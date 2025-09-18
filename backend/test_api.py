#!/usr/bin/env python3
"""
Simple test script for the Flask RAG Chatbot Backend
Run this after starting the Flask server to test the API endpoints
"""

import requests
import json
import time

BASE_URL = "http://localhost:5000"

def test_health():
    """Test the health check endpoint."""
    print("🏥 Testing health check...")
    try:
        response = requests.get(f"{BASE_URL}/api/health")
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Health check passed: {data['status']}")
            print(f"📊 Database info: {data.get('database', {})}")
        else:
            print(f"❌ Health check failed: {response.text}")
        print()
    except Exception as e:
        print(f"❌ Error testing health: {e}")
        print()

def test_chat():
    """Test the chat endpoint."""
    print("💬 Testing chat endpoint...")
    try:
        # Test message
        message = "Hello, can you tell me about your company knowledge?"
        
        payload = {
            "message": message,
            "session_id": "test_session_123"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/chat",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Chat successful!")
            print(f"🤖 Response: {data['response'][:100]}...")
            print(f"🆔 Session ID: {data['session_id']}")
            if data.get('sources'):
                print(f"📚 Sources: {len(data['sources'])} found")
            if data.get('sources'):
                print("📄 Source Documents:")
                for i, source in enumerate(data['sources'], 1):
                    print(f"  {i}. Content: {source.get('content', 'No content')[:100]}...")
                    print(f"     Metadata: {source.get('metadata', {})}")
                    print()
        else:
            print(f"❌ Chat failed: {response.text}")
        print()
        
        return data.get('session_id') if response.status_code == 200 else None
        
    except Exception as e:
        print(f"❌ Error testing chat: {e}")
        print()
        return None

def test_session_info(session_id):
    """Test the session info endpoint."""
    if not session_id:
        return
        
    print(f"ℹ️  Testing session info for {session_id}...")
    try:
        response = requests.get(f"{BASE_URL}/api/session/{session_id}")
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Session info retrieved!")
            print(f"📊 Message count: {data.get('message_count', 0)}")
            print(f"🧠 Has memory: {data.get('has_memory', False)}")
        else:
            print(f"❌ Session info failed: {response.text}")
        print()
    except Exception as e:
        print(f"❌ Error testing session info: {e}")
        print()

def test_reset_session(session_id):
    """Test the reset session endpoint."""
    if not session_id:
        return
        
    print(f"🔄 Testing reset session for {session_id}...")
    try:
        payload = {"session_id": session_id}
        response = requests.post(
            f"{BASE_URL}/api/reset",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        print(f"Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Session reset successful!")
            print(f"📝 Message: {data.get('message', '')}")
        else:
            print(f"❌ Session reset failed: {response.text}")
        print()
    except Exception as e:
        print(f"❌ Error testing reset: {e}")
        print()

def main():
    """Run all tests."""
    print("🧪 Flask RAG Chatbot API Test Suite")
    print("=" * 50)
    print()
    
    # Wait a moment for server to be ready
    print("⏳ Waiting for server to be ready...")
    time.sleep(2)
    
    # Run tests
    test_health()
    session_id = test_chat()
    test_session_info(session_id)
    test_reset_session(session_id)
    
    print("🎉 Test suite completed!")
    print()
    print("💡 If all tests passed, your Flask backend is working correctly!")
    print("🔗 You can now integrate it with your React frontend.")

if __name__ == "__main__":
    main() 