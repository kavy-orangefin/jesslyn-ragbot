import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@/contexts/ThemeContext'
import ClickableSection from './ClickableSection'
import oBPng from '@/assets/oB.png'

interface ReferencedSection {
  id: string;
  title: string;
  url?: string;
}

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  sources?: Array<{
    content: string
    metadata: any
  }>
  referenced_sections?: ReferencedSection[]
}

interface ChatBotProps {
  className?: string
  onSectionClick?: (sectionId: string) => void
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '', onSectionClick }) => {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Helper function to get time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    if (hour < 21) return 'Good evening'
    return 'Good night'
  }
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `${getTimeBasedGreeting()} 👋 I'm Jesslyn, your AI assistant. I can help you with questions about on how to use our action library. What would you like to know?`,
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(`session_${Date.now()}`)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSectionClick = (sectionId: string, _section?: ReferencedSection) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      // Navigate to documentation page with hash
      navigate(`/documentation#${sectionId}`);
      
      // After navigation, scroll to the section
      setTimeout(() => {
        const contentElement = document.querySelector(`[data-section-id="${sectionId}"]`);
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth' });
          // Add highlight effect
          contentElement.classList.add('ring-2', 'ring-orange-500', 'ring-opacity-50');
          setTimeout(() => {
            contentElement.classList.remove('ring-2', 'ring-orange-500', 'ring-opacity-50');
          }, 2000);
        }
      }, 100);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          session_id: sessionId
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          isUser: false,
          timestamp: new Date(),
          sources: data.sources,
          referenced_sections: data.referenced_sections
        }
        setMessages(prev => [...prev, botMessage])
      } else {
        throw new Error('Failed to get response')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(message)
  }

  const renderMessageText = (text: string, referenced_sections?: ReferencedSection[]) => {
    if (!referenced_sections || referenced_sections.length === 0) {
      return <div className="text-sm whitespace-pre-line">{text}</div>
    }

    // Create a simple text replacement to make section titles clickable
    const sectionsToRender: Array<{ original: string; section: ReferencedSection; startIndex: number }> = [];
    const processedSections = new Set<string>(); // Track which sections we've already processed

    // Find only the FIRST occurrence of each section title in the text
    referenced_sections.forEach(section => {
      // Skip if we've already processed this section
      if (processedSections.has(section.title)) {
        return;
      }

      // Create a regex that handles section names with spaces and parentheses
      // Escape special regex characters
      const escapedTitle = section.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // For section names with spaces/parentheses, use a more flexible pattern
      let regex;
      if (section.title.includes(' ') || section.title.includes('(') || section.title.includes(')')) {
        // For complex names like "Confirmation (Info)", use lookahead/lookbehind
        regex = new RegExp(`(?<!\\w)${escapedTitle}(?!\\w)`, 'gi');
      } else {
        // For simple names like "Message Box", use word boundaries
        regex = new RegExp(`\\b${escapedTitle}\\b`, 'gi');
      }
      
      // Find only the first occurrence
      const match = regex.exec(text);
      if (match) {
        sectionsToRender.push({
          original: match[0],
          section,
          startIndex: match.index
        });
        processedSections.add(section.title); // Mark this section as processed
      }
    });

    // Sort by start index to process in order
    sectionsToRender.sort((a, b) => a.startIndex - b.startIndex);

    if (sectionsToRender.length === 0) {
      return <div className="text-sm whitespace-pre-line">{text}</div>
    }

    // Render text with clickable sections
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    sectionsToRender.forEach((item, index) => {
      // Add text before the section
      if (item.startIndex > lastIndex) {
        parts.push(
          <span key={`text-${index}`}>
            {text.slice(lastIndex, item.startIndex)}
          </span>
        );
      }

      // Add the clickable section
      parts.push(
        <ClickableSection
          key={`section-${index}`}
          section={item.section}
          onSectionClick={handleSectionClick}
          className="mx-1"
        />
      );

      lastIndex = item.startIndex + item.original.length;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">
          {text.slice(lastIndex)}
        </span>
      );
    }

    return (
      <div className="text-sm whitespace-pre-line">
        {parts}
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Widget */}
      <div className="relative">
        {/* Main Chat Box */}
        {isOpen && (
          <div className={`mb-4 rounded-lg shadow-lg border ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          } ${
            isMaximized ? 'w-[500px] h-[600px]' : 'w-[400px] h-[500px]'
          } flex flex-col`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Profile Picture */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                  <img 
                    src={oBPng} 
                    alt="Jesslyn Bot Icon" 
                    className="w-6 h-6 object-cover"
                  />
                </div>
                <span className="text-white font-medium">Chat with Jesslyn</span>
              </div>
              
              {/* Header Actions */}
              <div className="flex items-center">
                {/* Maximize/Minimize Button */}
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="text-white hover:text-gray-200 p-1"
                >
                  {isMaximized ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Chat Messages Area */}
            <div className={`flex-1 p-4 overflow-y-auto ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start space-x-3 mb-4 ${msg.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                    msg.isUser ? 'bg-orange-500' : theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                  }`}>
                    {msg.isUser ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <img 
                        src={oBPng} 
                        alt="Jesslyn Bot Icon" 
                        className="w-6 h-6 object-cover"
                      />
                    )}
                  </div>
                  <div className={`rounded-lg px-3 py-2 max-w-xs ${
                    msg.isUser ? 'bg-orange-500 text-white' : theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {renderMessageText(msg.text, msg.referenced_sections)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                  }`}>
                    <img 
                      src={oBPng} 
                      alt="Jesslyn Bot Icon" 
                      className="w-6 h-6 object-cover"
                    />
                  </div>
                  <div className={`rounded-lg px-3 py-2 ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
                      }`}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
                      }`} style={{animationDelay: '0.1s'}}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
                      }`} style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              {/* Scroll target element */}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message Input Area */}
            <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <form onSubmit={handleSubmit} className={`flex items-center space-x-3 rounded-full border shadow-sm px-4 py-2 ${
                theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-white border-gray-200'
              }`}>
                {/* Attachment Button */}
                <button
                  type="button"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    theme === 'dark' 
                      ? 'bg-gray-600 hover:bg-gray-500' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <svg className={`w-4 h-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                
                {/* Text Input */}
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  className={`flex-1 px-2 py-2 bg-transparent border-none outline-none ${
                    theme === 'dark' 
                      ? 'text-gray-200 placeholder-gray-400' 
                      : 'text-gray-700 placeholder-gray-500'
                  }`}
                />
                
                {/* Send Button */}
                <button
                  type="submit"
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center relative"
        >
          {/* Chat Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          
        </button>
      </div>
    </div>
  )
}

export default ChatBot 