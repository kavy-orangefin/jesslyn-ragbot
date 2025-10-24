@echo off
REM ###############################################################################
REM Production Startup Script for Jesslyn RAGBot Backend (Windows)
REM This script starts the Flask application using Gunicorn for production
REM ###############################################################################

echo ======================================================
echo 🚀 Starting Jesslyn RAGBot Backend (Production Mode)
echo ======================================================

REM Check if virtual environment exists
if not exist "venv\" (
    echo ❌ Error: Virtual environment not found!
    echo Please create one first: python -m venv venv
    pause
    exit /b 1
)

REM Activate virtual environment
echo 📦 Activating virtual environment...
call venv\Scripts\activate.bat

REM Check if .env file exists
if not exist ".env" (
    echo ⚠️  Warning: .env file not found!
    echo Please create .env file with required configuration
    pause
    exit /b 1
)

REM Create logs directory if it doesn't exist
if not exist "logs\" (
    echo 📁 Creating logs directory...
    mkdir logs
)

REM Stop any existing instance (Windows version)
if exist "gunicorn.pid" (
    echo 🛑 Stopping existing instance...
    for /f %%i in (gunicorn.pid) do taskkill /PID %%i /F 2>nul
    del gunicorn.pid
)

REM Start Gunicorn (or use waitress for Windows)
echo 🔄 Starting production server...
echo.
echo NOTE: Gunicorn doesn't work natively on Windows.
echo Using waitress-serve instead (install with: pip install waitress)
echo.

REM Install waitress if not already installed
pip show waitress >nul 2>&1
if errorlevel 1 (
    echo 📦 Installing waitress...
    pip install waitress
)

REM Start with waitress (Windows-friendly WSGI server)
echo ✅ Starting server with waitress...
waitress-serve --host=0.0.0.0 --port=5000 --threads=8 app:app

pause
