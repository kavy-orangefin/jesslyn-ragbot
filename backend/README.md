# Flask RAG Chatbot Backend

A Flask-based backend API that provides RAG (Retrieval-Augmented Generation) chatbot functionality using LangChain, OpenAI, and Chroma vector database.

## Features

- **RAG Chatbot**: Answer questions based on company knowledge stored in vector database
- **Session Management**: Maintain conversation history for multiple users
- **Vector Database**: Uses existing ChromaDB for knowledge storage
- **OpenAI Integration**: Powered by GPT-4o-mini model
- **RESTful API**: Clean endpoints for frontend integration
- **CORS Support**: Ready for React frontend integration

## Project Structure

```
backend/
├── app.py                 # Main Flask application
├── config.py             # Configuration settings
├── requirements.txt      # Python dependencies
├── env.example          # Environment variables template
├── utils/
│   ├── __init__.py
│   ├── chat_handler.py  # Chat logic and session management
│   └── vector_store.py  # Vector database operations
└── README.md            # This file
```

## Prerequisites

- Python 3.8+
- OpenAI API key
- Existing ChromaDB knowledge base (`action_library_db/`)

## Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your OpenAI API key and other settings
   ```

## Configuration

Edit the `.env` file with your settings:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Flask Configuration
FLASK_ENV=development
FLASK_DEBUG=True
FLASK_PORT=5000

# Database Configuration
DB_NAME=action_library_db

# Model Configuration
MODEL_NAME=gpt-4o-mini
TEMPERATURE=0.3
```

## Running the Application

### Development Mode
```bash
python app.py
```

### Production Mode
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

The server will start on `http://localhost:5000`

## API Endpoints

### 1. Health Check
- **GET** `/api/health`
- Returns server status and database information

### 2. Chat
- **POST** `/api/chat`
- **Body:** `{"message": "user question", "session_id": "optional"}`
- **Response:** `{"response": "ai answer", "session_id": "id", "sources": [...]}`

### 3. Reset Session
- **POST** `/api/reset`
- **Body:** `{"session_id": "session_id"}`
- Clears conversation memory for a session

### 4. Session Info
- **GET** `/api/session/<session_id>`
- Returns information about a specific session

### 5. Database Info
- **GET** `/api/database/info`
- Returns vector database statistics

### 6. Upload Documents (Placeholder)
- **POST** `/api/upload`
- Placeholder for future document upload functionality

## Frontend Integration

Your React frontend can now communicate with the Flask backend:

```javascript
// Example chat request
const response = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'What is our company policy on...?',
    session_id: 'user123'
  })
});

const data = await response.json();
console.log(data.response); // AI answer
```

## Session Management

- Each user gets a unique `session_id`
- Conversation history is maintained per session
- Sessions are automatically cleaned up to prevent memory leaks
- Use the same `session_id` to continue conversations

## Error Handling

The API includes comprehensive error handling:
- Input validation
- OpenAI API error handling
- Database connection errors
- Proper HTTP status codes
- Detailed error messages

## Logging

The application logs:
- Service initialization
- Chat requests and responses
- Errors and exceptions
- Database operations

## Troubleshooting

### Common Issues

1. **OpenAI API Key Error**
   - Ensure `OPENAI_API_KEY` is set in `.env`
   - Verify the API key is valid and has sufficient credits

2. **Database Not Found**
   - Ensure `action_library_db/` directory exists in project root
   - Check file permissions

3. **Import Errors**
   - Ensure all dependencies are installed: `pip install -r requirements.txt`
   - Check Python version compatibility

4. **CORS Issues**
   - Frontend should be running on a different port
   - CORS is enabled for all origins in development

### Debug Mode

Enable debug mode in `.env`:
```env
FLASK_DEBUG=True
```

This will show detailed error messages and enable auto-reload.

## Production Deployment

For production deployment:

1. Set `FLASK_ENV=production` and `FLASK_DEBUG=False`
2. Use Gunicorn or similar WSGI server
3. Set up proper logging
4. Configure environment variables securely
5. Set up reverse proxy (nginx) if needed

## Contributing

1. Follow PEP 8 style guidelines
2. Add proper error handling
3. Include logging for new features
4. Update this README for new endpoints

## License

This project is part of the Jesslyn RAG Bot application. 