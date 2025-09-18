#!/bin/bash

echo "🚀 Setting up Flask RAG Chatbot Backend..."
echo "=========================================="
echo

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ first."
    exit 1
fi

echo "✅ Python 3 found: $(python3 --version)"

# Check if pip is installed
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 is not installed. Please install pip3 first."
    exit 1
fi

echo "✅ pip3 found: $(pip3 --version)"

# Create virtual environment
echo "📦 Creating virtual environment..."
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "✅ Virtual environment created"
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install requirements
echo "📚 Installing dependencies..."
pip install -r requirements.txt

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from template..."
    cp env.example .env
    echo "✅ .env file created from template"
    echo "⚠️  IMPORTANT: Please edit .env file and add your OpenAI API key!"
    echo "   OPENAI_API_KEY=your_actual_api_key_here"
else
    echo "✅ .env file already exists"
fi

echo
echo "🎉 Setup completed successfully!"
echo
echo "📋 Next steps:"
echo "1. Edit .env file and add your OpenAI API key"
echo "2. Run the backend: python run.py"
echo "3. Test the API: python test_api.py"
echo "4. Integrate with your React frontend"
echo
echo "🔗 Useful commands:"
echo "   Start server: python run.py"
echo "   Test API: python test_api.py"
echo "   Health check: curl http://localhost:5000/api/health"
echo
echo "💡 The backend will be available at: http://localhost:5000" 