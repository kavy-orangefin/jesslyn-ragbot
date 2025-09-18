from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Absolute path to your DB
db_path = "/Users/kavilanmagantheran/Desktop/jesslyn-ragbot/chroma_db2"

# Check if the directory exists and list contents
if os.path.exists(db_path):
    print(f"Directory exists: {db_path}")
    print("Contents:", os.listdir(db_path))
else:
    print(f"Directory NOT found: {db_path}")

# Check if API key is available
api_key = os.getenv('OPENAI_API_KEY')
if api_key:
    print(f"✅ OpenAI API key found: {api_key[:10]}...")
else:
    print("❌ OpenAI API key not found. Please check your .env file")
    exit(1)

# Initialize the vector store
embeddings = OpenAIEmbeddings()
vectordb = Chroma(persist_directory=db_path, embedding_function=embeddings)

# Quick sanity check: get collection names
print("Collections in this DB:", vectordb._collection.name)
print("Vector store persist directory:", vectordb._persist_directory) 