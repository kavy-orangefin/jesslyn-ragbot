import logging
from typing import Dict, List, Optional
from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain.schema import Document
from config import Config
from .vector_store import VectorStoreManager
from datetime import datetime

logger = logging.getLogger(__name__)

class ChatHandler:
    """Handles chat conversations and RAG operations."""
    
    def __init__(self):
        self.config = Config()
        self.vector_store_manager = VectorStoreManager()
        
        # Initialize LLM
        self.llm = ChatOpenAI(
            model_name=self.config.MODEL_NAME,
            temperature=self.config.TEMPERATURE,
            openai_api_key=self.config.OPENAI_API_KEY
        )
        
        # Initialize smart QA chain
        self.smart_qa_chain = None
        self._initialize_smart_qa_chain()
        
        # Session memory storage
        self.session_memories: Dict[str, ConversationBufferMemory] = {}
        
    def _initialize_smart_qa_chain(self):
        """Initialize the smart QA chain with enhanced retrieval."""
        try:
            vector_store = self.vector_store_manager.get_vector_store()
            self.smart_qa_chain = self._create_smart_qa_chain(vector_store, self.llm, k=4)
            logger.info("Smart QA chain initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize smart QA chain: {str(e)}")
            raise
    
    def _create_smart_qa_chain(self, vectordb, llm, k=4):
        """Creates a QA chain with smart retrieval logic"""
        
        def smart_retrieve(query, k_retrieve=k):
            """Smart retrieval function with topic boosting"""
            # Get more candidates initially
            candidates = vectordb.similarity_search_with_score(query, k=k_retrieve*10)
            
            # Extract potential topic names from query
            query_lower = query.lower()
            query_words = query_lower.split()
            
            reranked = []
            for doc, score in candidates:
                topic = doc.metadata.get('topic', '').lower()
                topic_words = topic.split()
                
                # Check if topic name appears in query
                topic_boost = 0
                if topic in query_lower:
                    topic_boost = -0.5  # Boost for exact topic match
                
                # Check if query asks specifically about this topic
                for word in query_words:
                    if word in topic_words:
                        topic_boost -= 0.1
                
                final_score = score + topic_boost
                reranked.append((doc, final_score))
            
            # Sort by final score and return top k
            reranked.sort(key=lambda x: x[1])
            return [doc for doc, score in reranked[:k_retrieve]]
        
        def ask(question, session_memory=None):
            """Ask a question with smart retrieval and optional session memory"""
            # Get smart-retrieved documents
            relevant_docs = smart_retrieve(question)
            
            # Create context from retrieved documents
            context = "\n\n".join([doc.page_content for doc in relevant_docs])
            
            # Add conversation history if available
            history_context = ""
            if session_memory and hasattr(session_memory, 'chat_memory'):
                messages = session_memory.chat_memory.messages[-6:]  # Last 3 exchanges
                history_parts = []
                for msg in messages:
                    if hasattr(msg, 'content'):
                        role = "Human" if hasattr(msg, 'type') and msg.type == "human" else "Assistant"
                        history_parts.append(f"{role}: {msg.content}")
                if history_parts:
                    history_context = f"\n\nPrevious conversation:\n" + "\n".join(history_parts)
            
            # Create prompt with system instructions
            system_instructions = """You are Jesslyn, a helpful AI assistant for action library knowledge. 
            Provide clear, direct answers about feature objectives.
            When providing technical guidance:
            - Answer directly: "The objective of [exact feature name] is to [brief purpose]" if they ask about the objective of a feature
            - Answer directly: "The steps to [exact feature name] are:" followed by numbered steps if they ask about steps or how to use a feature
            - Use the exact feature name as it appears in the context (e.g., "Compare String", "Message Box", "Confirmation")
            - Keep responses short and to the point
            - Use clear, numbered steps when multiple steps are required
            - Be helpful but concise
            - Don't add extra words or explanations beyond what's needed"""
            
            prompt = f"""{system_instructions}

Answer the question using ONLY the information provided in the context below. 
Do not add any information from your general knowledge.
If the context contains the exact answer, use it word-for-word.{history_context}

Context:
{context}

Question: {question}

Answer:"""
            
            # Get answer from LLM
            response = llm.invoke(prompt)
            answer = response.content if hasattr(response, 'content') else str(response)
            
            return {
                "answer": answer,
                "source_documents": relevant_docs
            }
        
        return ask
    
    def _get_available_sections(self):
        """Dynamically get all available sections from vector store."""
        try:
            # Get all unique topics/sections from vector store metadata
            vector_store = self.vector_store_manager.get_vector_store()
            
            # Query all documents and extract unique topics
            all_docs = vector_store.similarity_search("", k=1000)  
            sections = set()
            
            for doc in all_docs:
                if hasattr(doc, 'metadata') and doc.metadata:
                    topic = doc.metadata.get('topic', '')
                    if topic:
                        sections.add(topic)
            
            return list(sections)
        except Exception as e:
            logger.error(f"Error getting sections: {e}")
            return []

    def _extract_section_references(self, source_documents: List[Document]) -> List[Dict[str, str]]:
        """Extract section references from source documents."""
        referenced_sections = []
        seen_sections = set()
        
        # Get available sections dynamically
        available_sections = self._get_available_sections()
        
        for doc in source_documents:
            if hasattr(doc, 'metadata') and doc.metadata:
                topic = doc.metadata.get('topic', '')
                if topic and topic not in seen_sections:
                    section_id = self._generate_section_id(topic)
                    
                    referenced_sections.append({
                        "id": section_id,
                        "title": topic,
                        "url": f"/documentation#{section_id}"  # Updated URL format
                    })
                    seen_sections.add(topic)
        
        return referenced_sections
    
    def _generate_section_id(self, topic: str) -> str:
        """Generate a URL-friendly section ID from topic."""
        return topic.lower().replace(' ', '-').replace('(', '').replace(')', '').replace('_', '-')
    
    
    def _extract_section_id(self, section_title: str, content: str) -> str:
        """Extract a section ID from the section title and content."""
        # Convert section title to a URL-friendly ID
        section_id = section_title.lower().replace(' ', '-').replace('(', '').replace(')', '')
        
        # Look for specific patterns in the content that might give us a better ID
        if "message box" in section_title.lower():
            return "message-box"
        elif "confirmation" in section_title.lower():
            return "confirmation"
        elif "application" in section_title.lower():
            return "application-command"
        elif "attend" in section_title.lower():
            return "attend-command"
        else:
            return section_id
    
    def _fallback_section_extraction(self, source_documents: List[Document]) -> List[Dict[str, str]]:
        """Fallback method to extract sections when primary method fails."""
        referenced_sections = []
        
        for doc in source_documents:
            if hasattr(doc, 'page_content') and doc.page_content:
                content = doc.page_content
                
                # Look for lines that start with ### or ## (markdown headers)
                lines = content.split('\n')
                for line in lines:
                    line = line.strip()
                    if line.startswith('###') or line.startswith('##'):
                        # Extract the header text
                        header_text = line.replace('#', '').strip()
                        if header_text and len(header_text) > 3:
                            section_id = header_text.lower().replace(' ', '-').replace('(', '').replace(')', '')
                            
                            referenced_sections.append({
                                "id": section_id,
                                "title": header_text
                            })
                            logger.info(f"Fallback: Found section from markdown header: {header_text}")
                            break  # Only take the first header per document
        
        return referenced_sections
    
    def get_session_memory(self, session_id: str) -> ConversationBufferMemory:
        """Get or create memory for a specific session."""
        if session_id not in self.session_memories:
            self.session_memories[session_id] = ConversationBufferMemory(
                memory_key="chat_history",
                return_messages=True,
                output_key="answer"
            )
        return self.session_memories[session_id]
    
    def chat(self, message: str, session_id: str) -> dict:
        """Process a chat message and return response using smart QA chain."""
        try:
            logger.info(f"Processing chat message for session {session_id}: {message}")
            
            # Get session memory
            memory = self.get_session_memory(session_id)
            
            # Use smart QA chain with session memory
            logger.info(f"Calling smart QA chain with question: {message}")
            response = self.smart_qa_chain(message, session_memory=memory)
            logger.info(f"Smart QA chain response received")
            
            # Extract relevant information
            answer = response.get("answer", "I'm sorry, I couldn't generate a response.")
            source_documents = response.get("source_documents", [])
            
            # Update session memory with the conversation
            memory.save_context(
                {"input": message},
                {"answer": answer}
            )
            
            # Extract section references from source documents
            referenced_sections = self._extract_section_references(source_documents)
            
            # Debug logging for section extraction
            logger.info(f"Source documents count: {len(source_documents)}")
            logger.info(f"Extracted referenced sections: {referenced_sections}")
            
            # Format source documents
            sources = []
            for doc in source_documents:
                if hasattr(doc, 'metadata') and doc.metadata:
                    sources.append({
                        "content": doc.page_content[:200] + "..." if len(doc.page_content) > 200 else doc.page_content,
                        "metadata": doc.metadata
                    })
            
            result = {
                "response": answer,
                "session_id": session_id,
                "sources": sources,
                "referenced_sections": referenced_sections,
                "timestamp": datetime.now().isoformat()
            }
            
            logger.info(f"Generated response for session {session_id} with {len(referenced_sections)} referenced sections")
            return result
            
        except Exception as e:
            logger.error(f"Error processing chat message: {str(e)}")
            logger.error(f"Error type: {type(e).__name__}")
            import traceback
            logger.error(f"Traceback: {traceback.format_exc()}")
            return {
                "response": "I'm sorry, I encountered an error processing your request. Please try again.",
                "session_id": session_id,
                "error": str(e),
                "error_type": type(e).__name__,
                "timestamp": datetime.now().isoformat()
            }
    
    def reset_session(self, session_id: str) -> bool:
        """Reset conversation memory for a specific session."""
        try:
            if session_id in self.session_memories:
                del self.session_memories[session_id]
                logger.info(f"Reset memory for session {session_id}")
                return True
            return False
        except Exception as e:
            logger.error(f"Error resetting session {session_id}: {str(e)}")
            return False
    
    def get_session_info(self, session_id: str) -> dict:
        """Get information about a specific session."""
        try:
            memory = self.session_memories.get(session_id)
            if memory:
                chat_history = memory.chat_memory.messages
                return {
                    "session_id": session_id,
                    "message_count": len(chat_history),
                    "has_memory": True
                }
            else:
                return {
                    "session_id": session_id,
                    "message_count": 0,
                    "has_memory": False
                }
        except Exception as e:
            logger.error(f"Error getting session info: {str(e)}")
            return {"session_id": session_id, "error": str(e)}
    
    def cleanup_old_sessions(self, max_sessions: int = 100):
        """Clean up old sessions to prevent memory leaks."""
        try:
            if len(self.session_memories) > max_sessions:
                # Remove oldest sessions (simple FIFO approach)
                sessions_to_remove = list(self.session_memories.keys())[:len(self.session_memories) - max_sessions]
                for session_id in sessions_to_remove:
                    del self.session_memories[session_id]
                
                logger.info(f"Cleaned up {len(sessions_to_remove)} old sessions")
        except Exception as e:
            logger.error(f"Error cleaning up sessions: {str(e)}") 