#!/bin/bash
###############################################################################
# Production Startup Script for Jesslyn RAGBot Backend
# This script starts the Flask application using Gunicorn for production
###############################################################################

echo "🚀 Starting Jesslyn RAGBot Backend (Production Mode)"
echo "======================================================"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Error: Virtual environment not found!"
    echo "Please create one first: python3 -m venv venv"
    exit 1
fi

# Activate virtual environment
echo "📦 Activating virtual environment..."
source venv/bin/activate

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "Please create .env file with required configuration"
    exit 1
fi

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    echo "📁 Creating logs directory..."
    mkdir -p logs
fi

# Stop any existing instance
if [ -f "gunicorn.pid" ]; then
    echo "🛑 Stopping existing instance..."
    kill $(cat gunicorn.pid) 2>/dev/null || true
    rm -f gunicorn.pid
fi

# Start Gunicorn
echo "🔄 Starting Gunicorn server..."
gunicorn -c gunicorn_config.py app:app

echo "✅ Server started successfully!"
echo "📍 Server running at: http://0.0.0.0:5000"
echo "📝 Logs: logs/access.log and logs/error.log"
echo "🛑 To stop: kill \$(cat gunicorn.pid)"
