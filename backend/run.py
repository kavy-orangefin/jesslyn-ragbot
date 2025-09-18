#!/usr/bin/env python3
"""
Simple startup script for the Flask RAG Chatbot Backend
"""

import os
import sys
from app import app

if __name__ == '__main__':
    try:
        # Check if .env file exists
        if not os.path.exists('.env'):
            print("⚠️  Warning: .env file not found!")
            print("Please copy env.example to .env and configure your OpenAI API key")
            print("cp env.example .env")
            print()
        
        # Start the Flask application
        print("🚀 Starting Flask RAG Chatbot Backend...")
        print("📍 Server will be available at: http://localhost:5000")
        print("🔍 Health check: http://localhost:5000/api/health")
        print("💬 Chat endpoint: http://localhost:5000/api/chat")
        print()
        print("Press Ctrl+C to stop the server")
        print("-" * 50)
        
        app.run(host='0.0.0.0', port=5000, debug=True)
        
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"❌ Error starting server: {e}")
        sys.exit(1) 