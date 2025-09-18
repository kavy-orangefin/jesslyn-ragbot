import os
import logging
import uuid
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from utils.chat_handler import ChatHandler
from utils.vector_store import VectorStoreManager

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Global variables
chat_handler = None
vector_store_manager = None

def initialize_services():
    """Initialize services."""
    global chat_handler, vector_store_manager
    
    try:
        # Validate configuration
        Config.validate()
        
        # Initialize services
        vector_store_manager = VectorStoreManager()
        chat_handler = ChatHandler()
        
        logger.info("Services initialized successfully")
        
    except Exception as e:
        logger.error(f"Failed to initialize services: {str(e)}")
        raise

# Initialize services when app is created
with app.app_context():
    initialize_services()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    try:
        if chat_handler and vector_store_manager:
            db_info = vector_store_manager.get_database_info()
            return jsonify({
                "status": "healthy",
                "timestamp": datetime.now().isoformat(),
                "database": db_info,
                "services": {
                    "chat_handler": "initialized",
                    "vector_store": "initialized"
                }
            }), 200
        else:
            return jsonify({
                "status": "unhealthy",
                "error": "Services not initialized"
            }), 503
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return jsonify({
            "status": "unhealthy",
            "error": str(e)
        }), 500

@app.route('/api/chat', methods=['POST'])
def chat():
    """Main chat endpoint."""
    try:
        # Validate request
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 400
        
        data = request.get_json()
        message = data.get('message')
        session_id = data.get('session_id')
        
        if not message:
            return jsonify({"error": "Message is required"}), 400
        
        # Generate session ID if not provided
        if not session_id:
            session_id = str(uuid.uuid4())
        
        # Process chat message
        response = chat_handler.chat(message, session_id)
        
        return jsonify(response), 200
        
    except Exception as e:
        logger.error(f"Chat endpoint error: {str(e)}")
        return jsonify({
            "error": "Internal server error",
            "message": str(e)
        }), 500

@app.route('/api/reset', methods=['POST'])
def reset_session():
    """Reset conversation memory for a session."""
    try:
        if not request.is_json:
            return jsonify({"error": "Request must be JSON"}), 400
        
        data = request.get_json()
        session_id = data.get('session_id')
        
        if not session_id:
            return jsonify({"error": "Session ID is required"}), 400
        
        # Reset session
        success = chat_handler.reset_session(session_id)
        
        if success:
            return jsonify({
                "message": "Session reset successfully",
                "session_id": session_id
            }), 200
        else:
            return jsonify({
                "message": "Session not found or already reset",
                "session_id": session_id
            }), 404
        
    except Exception as e:
        logger.error(f"Reset session error: {str(e)}")
        return jsonify({
            "error": "Internal server error",
            "message": str(e)
        }), 500

@app.route('/api/session/<session_id>', methods=['GET'])
def get_session_info(session_id):
    """Get information about a specific session."""
    try:
        session_info = chat_handler.get_session_info(session_id)
        return jsonify(session_info), 200
        
    except Exception as e:
        logger.error(f"Get session info error: {str(e)}")
        return jsonify({
            "error": "Internal server error",
            "message": str(e)
        }), 500

@app.route('/api/database/info', methods=['GET'])
def get_database_info():
    """Get information about the vector database."""
    try:
        db_info = vector_store_manager.get_database_info()
        return jsonify(db_info), 200
        
    except Exception as e:
        logger.error(f"Get database info error: {str(e)}")
        return jsonify({
            "error": "Internal server error",
            "message": str(e)
        }), 500

@app.route('/api/upload', methods=['POST'])
def upload_documents():
    """Upload new documents to the knowledge base."""
    try:
        # This endpoint would handle file uploads
        # For now, return a placeholder response
        return jsonify({
            "message": "Document upload endpoint - implementation pending",
            "note": "This endpoint will handle file uploads and add documents to the vector store"
        }), 200
        
    except Exception as e:
        logger.error(f"Upload documents error: {str(e)}")
        return jsonify({
            "error": "Internal server error",
            "message": str(e)
        }), 500

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors."""
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors."""
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    try:
        # Validate configuration before starting
        Config.validate()
        
        port = Config.FLASK_PORT
        debug = Config.FLASK_DEBUG
        
        logger.info(f"Starting Flask RAG chatbot on port {port}")
        app.run(host='0.0.0.0', port=port, debug=debug, threaded=True)
        
    except Exception as e:
        logger.error(f"Failed to start application: {str(e)}")
        exit(1) 