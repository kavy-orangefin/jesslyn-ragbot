# Deployment Guide - Jesslyn RAGBot

## Overview
This guide explains how to deploy the Jesslyn RAGBot to production with:
- **Frontend**: IIS Server (Windows)
- **Backend**: Local/Office Server running Flask with Gunicorn/Waitress

---

## Backend Deployment (Flask on Local Server)

### Prerequisites
- Python 3.8+ installed on the server
- Network access and static IP (or dynamic DNS)
- Port 5000 accessible (or configure firewall)

### Step 1: Setup on Local Server

1. **Copy backend folder to your server**
   ```bash
   # Copy the entire backend/ directory to your server
   # Example: C:\jesslyn-ragbot\backend\
   ```

2. **Install Python dependencies**
   ```bash
   cd backend
   python -m venv venv

   # Windows:
   venv\Scripts\activate

   # Linux/Mac:
   source venv/bin/activate

   # Install packages
   pip install -r requirements.txt
   pip install waitress  # For Windows
   ```

3. **Configure environment variables**

   Create/update `backend/.env`:
   ```bash
   # OpenAI Configuration
   OPENAI_API_KEY=your-actual-api-key-here

   # Flask Configuration
   FLASK_ENV=production
   FLASK_DEBUG=False
   FLASK_PORT=5000

   # Database Configuration
   DB_NAME=chroma_full
   CHUNK_SIZE=1000
   CHUNK_OVERLAP=150

   # Model Configuration
   MODEL_NAME=gpt-4o-mini
   TEMPERATURE=0.3
   ```

4. **Copy your ChromaDB database**
   ```bash
   # Copy your chroma_full/ directory to the backend folder
   # This contains your vector database with embedded documents
   ```

### Step 2: Start the Backend

**For Windows Server:**
```bash
# Double-click or run:
start_production.bat
```

**For Linux Server:**
```bash
# Make script executable
chmod +x start_production.sh

# Run the script
./start_production.sh

# Or run in background:
nohup ./start_production.sh &
```

**Manual Start (alternative):**
```bash
# Activate virtual environment first
source venv/bin/activate  # Linux/Mac
# or
venv\Scripts\activate  # Windows

# Start with waitress (Windows-friendly)
waitress-serve --host=0.0.0.0 --port=5000 --threads=8 app:app

# Or with gunicorn (Linux)
gunicorn -c gunicorn_config.py app:app
```

### Step 3: Configure Network Access

#### Option A: Port Forwarding (Simple)
1. Open your router admin panel
2. Forward external port (e.g., 5000) to internal server IP:5000
3. Note your public IP address or set up dynamic DNS

#### Option B: Reverse Proxy with Nginx (Recommended)
1. Install nginx on your server
2. Configure nginx to proxy requests:

```nginx
server {
    listen 80;
    server_name your-domain.com;  # or your IP

    location /api/ {
        proxy_pass http://localhost:5000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

3. Restart nginx:
   ```bash
   sudo systemctl restart nginx
   ```

### Step 4: Keep Backend Running (Production)

**Windows - Run as Service:**

Use NSSM (Non-Sucking Service Manager):
```bash
# Download NSSM from nssm.cc
# Install as service:
nssm install JesslynRAGBot "C:\path\to\backend\venv\Scripts\python.exe" "C:\path\to\backend\start_production.bat"
nssm start JesslynRAGBot
```

**Linux - Systemd Service:**

Create `/etc/systemd/system/jesslyn-ragbot.service`:
```ini
[Unit]
Description=Jesslyn RAGBot Backend
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/path/to/backend
Environment="PATH=/path/to/backend/venv/bin"
ExecStart=/path/to/backend/venv/bin/gunicorn -c gunicorn_config.py app:app
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable and start:
```bash
sudo systemctl daemon-reload
sudo systemctl enable jesslyn-ragbot
sudo systemctl start jesslyn-ragbot
sudo systemctl status jesslyn-ragbot
```

---

## Frontend Deployment (IIS)

### Step 1: Build Frontend for Production

On your development machine:
```bash
cd frontend

# Update .env with production backend URL
# Create frontend/.env.production:
VITE_BACKEND_API_URL=http://YOUR_SERVER_IP:5000
VITE_STRAPI_API_URL=http://18.223.214.216:1337

# Build
npm run build
```

This creates a `frontend/dist/` folder with production files.

### Step 2: Deploy to IIS

1. **Copy `dist/` folder contents to IIS:**
   ```
   C:\inetpub\wwwroot\jesslyn-ragbot\
   ```

2. **Install URL Rewrite module** (if not already):
   - Download from: https://www.iis.net/downloads/microsoft/url-rewrite

3. **Create `web.config` in the IIS folder:**

Create `C:\inetpub\wwwroot\jesslyn-ragbot\web.config`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
  </system.webServer>
</configuration>
```

4. **Configure IIS Site:**
   - Open IIS Manager
   - Right-click Sites → Add Website
   - Site name: `JesslynRAGBot`
   - Physical path: `C:\inetpub\wwwroot\jesslyn-ragbot`
   - Binding: Port 80 (or your preferred port)
   - Start the site

### Step 3: Configure CORS on Backend

Update `backend/app.py` to allow requests from your IIS domain:

```python
# Instead of CORS(app)
CORS(app, origins=["http://your-iis-domain.com", "http://localhost:3000"])
```

---

## Testing Deployment

### Test Backend
```bash
# From any machine on the network:
curl http://YOUR_SERVER_IP:5000/api/health

# Should return:
# {"status":"healthy","timestamp":"...","database":{...}}
```

### Test Frontend
1. Open browser
2. Navigate to your IIS site: `http://your-iis-domain.com`
3. Open browser DevTools → Network tab
4. Try chatting with Jesslyn
5. Verify API calls go to `http://YOUR_SERVER_IP:5000/api/chat`

---

## Troubleshooting

### Backend Issues

**Problem: "Connection refused"**
- Check if backend is running: `netstat -ano | findstr :5000` (Windows) or `lsof -i :5000` (Linux)
- Check firewall allows port 5000
- Verify .env file exists and has correct values

**Problem: "Services not initialized"**
- Check logs: `backend/logs/error.log`
- Verify ChromaDB folder exists: `backend/chroma_full/`
- Check OpenAI API key is valid

**Problem: "Module not found"**
- Reinstall dependencies: `pip install -r requirements.txt`
- Check virtual environment is activated

### Frontend Issues

**Problem: "Failed to fetch"**
- Check CORS configuration in backend
- Verify backend URL in `.env.production`
- Check browser console for detailed error

**Problem: "404 on refresh"**
- Check `web.config` exists and has URL rewrite rules
- Verify URL Rewrite module is installed in IIS

---

## Monitoring

### Check Backend Status
```bash
# Linux
sudo systemctl status jesslyn-ragbot

# Windows
sc query JesslynRAGBot

# Check logs
tail -f backend/logs/error.log  # Linux
type backend\logs\error.log     # Windows
```

### View Access Logs
```bash
# See who's using the API
tail -f backend/logs/access.log
```

---

## Updating

### Update Backend
```bash
cd backend
git pull  # or copy updated files
source venv/bin/activate
pip install -r requirements.txt
sudo systemctl restart jesslyn-ragbot  # Linux
# or restart service in Windows
```

### Update Frontend
```bash
cd frontend
git pull  # or copy updated files
npm run build
# Copy dist/ contents to IIS folder
```

---

## Security Recommendations

1. **Use HTTPS**: Set up SSL certificates (Let's Encrypt)
2. **Firewall**: Only expose necessary ports
3. **API Key**: Keep `.env` secure, never commit to git
4. **Regular Updates**: Keep Python packages updated
5. **Monitoring**: Set up uptime monitoring (UptimeRobot, etc.)
6. **Backups**: Regular backup of ChromaDB folder

---

## Support

For issues, check:
1. Backend logs: `backend/logs/error.log`
2. IIS logs: `C:\inetpub\logs\LogFiles\`
3. Browser console (F12)
