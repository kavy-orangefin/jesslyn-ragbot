import os
import logging
from typing import List, Optional
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.schema import Document
from config import Config

logger = logging.getLogger(__name__)

class VectorStoreManager:
    """Manages the Chroma vector database and document processing."""
    
    def __init__(self):
        self.config = Config()
        self.embeddings = OpenAIEmbeddings(
            openai_api_key=self.config.OPENAI_API_KEY,
            model="text-embedding-ada-002"
        )
        self.vector_store = None
        
        # Print database info on initialization
        logger.info("=" * 60)
        logger.info("🔍 VECTOR STORE INITIALIZATION")
        logger.info("=" * 60)
        logger.info(f"📁 Database Name: {self.config.DB_NAME}")
        logger.info(f"📂 Database Path: {self.config.DB_PATH}")
        logger.info(f"🤖 Embedding Model: text-embedding-ada-002")
        logger.info("=" * 60)
        
    def initialize_vector_store(self) -> Chroma:
        """Initialize the vector store from existing database."""
        try:
            logger.info(f"🚀 Initializing vector store from: {self.config.DB_PATH}")
            
            if not os.path.exists(self.config.DB_PATH):
                logger.error(f"❌ Database path does not exist: {self.config.DB_PATH}")
                raise FileNotFoundError(f"Database path {self.config.DB_PATH} not found")
            
            # Load existing Chroma database
            self.vector_store = Chroma(
                persist_directory=self.config.DB_PATH,
                embedding_function=self.embeddings
            )
            
            # Get collection info
            collection = self.vector_store._collection
            count = collection.count()
            logger.info(f"✅ Vector store initialized successfully!")
            logger.info(f"📊 Documents in database: {count}")
            logger.info(f"🏠 Database location: {os.path.abspath(self.config.DB_PATH)}")
            
            return self.vector_store
            
        except Exception as e:
            logger.error(f"❌ Failed to initialize vector store: {str(e)}")
            raise
    
    def get_vector_store(self) -> Chroma:
        """Get the current vector store instance."""
        if self.vector_store is None:
            self.vector_store = self.initialize_vector_store()
        return self.vector_store
    
    def search_documents(self, query: str, k: int = 4) -> List[Document]:
        """Search for relevant documents based on query."""
        try:
            logger.info(f"🔍 SEARCHING DATABASE: {self.config.DB_NAME}")
            logger.info(f"📍 Database Path: {os.path.abspath(self.config.DB_PATH)}")
            logger.info(f"❓ Query: {query}")
            logger.info(f"📝 Searching for top {k} results...")
            
            vector_store = self.get_vector_store()
            results = vector_store.similarity_search(query, k=k)
            
            logger.info(f"✅ Found {len(results)} relevant documents for query: {query}")
            return results
        except Exception as e:
            logger.error(f"❌ Error searching documents: {str(e)}")
            return []
    
    def add_documents(self, documents: List[Document]) -> bool:
        """Add new documents to the vector store."""
        try:
            logger.info(f"📥 Adding documents to database: {self.config.DB_NAME}")
            logger.info(f"📍 Database Path: {self.config.DB_PATH}")
            
            vector_store = self.get_vector_store()
            
            # Add documents directly to vector store (no chunking needed)
            vector_store.add_documents(documents)
            vector_store.persist()
            
            logger.info(f"✅ Documents added successfully to vector store at: {self.config.DB_PATH}")
            return True
            
        except Exception as e:
            logger.error(f"❌ Error adding documents: {str(e)}")
            return False
    
    def get_database_info(self) -> dict:
        """Get information about the current database."""
        try:
            vector_store = self.get_vector_store()
            collection = vector_store._collection
            count = collection.count()
            
            db_info = {
                "document_count": count,
                "database_name": self.config.DB_NAME,
                "database_path": self.config.DB_PATH,
                "absolute_path": os.path.abspath(self.config.DB_PATH),
                "embedding_model": "text-embedding-ada-002"
            }
            
            logger.info(f"📊 DATABASE INFO:")
            logger.info(f"   📁 Name: {db_info['database_name']}")
            logger.info(f"   📂 Path: {db_info['database_path']}")
            logger.info(f"   🏠 Absolute Path: {db_info['absolute_path']}")
            logger.info(f"   📝 Documents: {db_info['document_count']}")
            
            return db_info
        except Exception as e:
            logger.error(f"❌ Error getting database info: {str(e)}")
            return {}
    
    def print_database_status(self):
        """Print current database status to console."""
        try:
            db_info = self.get_database_info()
            print("\n" + "="*60)
            print("🔍 CURRENT VECTOR DATABASE STATUS")
            print("="*60)
            print(f"📁 Database Name: {db_info.get('database_name', 'Unknown')}")
            print(f"📂 Database Path: {db_info.get('database_path', 'Unknown')}")
            print(f"🏠 Absolute Path: {db_info.get('absolute_path', 'Unknown')}")
            print(f"📝 Total Documents: {db_info.get('document_count', 'Unknown')}")
            print(f"🤖 Embedding Model: {db_info.get('embedding_model', 'Unknown')}")
            print("="*60)
            
        except Exception as e:
            print(f"❌ Error printing database status: {str(e)}") 