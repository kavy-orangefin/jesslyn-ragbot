import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    """Configuration class for the Flask RAG chatbot application."""
    
    # OpenAI Configuration
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    
    # Flask Configuration
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    FLASK_DEBUG = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    FLASK_PORT = int(os.getenv('FLASK_PORT', 5000))
    
    # Database Configuration
    #   DB_NAME = os.getenv('DB_NAME', 'chroma_db_28_2')  # give me the steps to Adds Day


    DB_NAME = os.getenv('DB_NAME', 'chroma_ms365')

    # Model Configuration
    MODEL_NAME = os.getenv('MODEL_NAME', 'gpt-4o-mini')
    TEMPERATURE = float(os.getenv('TEMPERATURE', 0.3))
    
    # Paths
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    WORKSPACE_ROOT = os.path.dirname(BASE_DIR)
    DB_PATH = os.path.join(WORKSPACE_ROOT, DB_NAME)
    
    @classmethod
    def validate(cls):
        """Validate that all required configuration is present."""
        if not cls.OPENAI_API_KEY:
            raise ValueError("OPENAI_API_KEY environment variable is required")
        
        # Resolve the path to get the absolute path without '..'
        absolute_db_path = os.path.abspath(cls.DB_PATH)
        if not os.path.exists(absolute_db_path):
            raise ValueError(f"Database path {absolute_db_path} does not exist")
        
        return True 