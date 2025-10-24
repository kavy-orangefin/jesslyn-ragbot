# Quick Start Guide - Production Deployment

## For Your Local Server (Backend)

### 1. Copy Files to Server
Copy the `backend/` folder to your server (e.g., `C:\jesslyn-ragbot\backend\` on Windows)

### 2. Install Dependencies
```bash
cd backend
python -m venv venv
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

### 3. Configure Environment
Edit `backend/.env`:
```bash
# Set to production
FLASK_ENV=production
FLASK_DEBUG=False

# Add your production frontend URL (IIS server)
ALLOWED_ORIGINS=http://your-iis-server.com,http://localhost:3000
```

### 4. Copy ChromaDB Database
Make sure `backend/chroma_full/` folder exists with your vector database

### 5. Start Server
```bash
# Windows - Double click:
start_production.bat

# Or manually:
venv\Scripts\activate
waitress-serve --host=0.0.0.0 --port=5000 --threads=8 app:app
```

### 6. Test Backend
Open browser: `http://YOUR_SERVER_IP:5000/api/health`

Should see:
```json
{
  "status": "healthy",
  "timestamp": "2025-...",
  "database": {...}
}
```

---

## For IIS (Frontend)

### 1. Build Frontend
On your development machine:
```bash
cd frontend

# Create production env file
echo VITE_BACKEND_API_URL=http://YOUR_SERVER_IP:5000 > .env.production
echo VITE_STRAPI_API_URL=http://18.223.214.216:1337 >> .env.production

# Build
npm run build
```

### 2. Deploy to IIS
1. Copy `frontend/dist/*` to `C:\inetpub\wwwroot\jesslyn-ragbot\`
2. Create `web.config` (see DEPLOYMENT.md)
3. Open IIS Manager
4. Create new site pointing to the folder
5. Start the site

### 3. Test Full System
1. Open IIS site in browser
2. Try chatting with Jesslyn
3. Check Network tab - API calls should go to your backend server

---

## Network Configuration

### If Backend is on Same Network as IIS:
- Use internal IP: `http://192.168.1.100:5000` (example)
- No port forwarding needed

### If Backend is on Different Network:
1. **Port Forward:** Router → Forward port 5000 to server
2. **Firewall:** Allow port 5000
3. **Public IP or Dynamic DNS:** Use public IP or set up DDNS

---

## Running as Service (Keep It Running 24/7)

### Windows:
```bash
# Download NSSM (nssm.cc)
nssm install JesslynRAGBot "C:\jesslyn-ragbot\backend\start_production.bat"
nssm start JesslynRAGBot
```

### Linux (if using Linux server):
```bash
# Create systemd service (see DEPLOYMENT.md)
sudo systemctl enable jesslyn-ragbot
sudo systemctl start jesslyn-ragbot
```

---

## Troubleshooting

**Frontend can't connect to backend?**
- Check `ALLOWED_ORIGINS` in `backend/.env` includes your IIS domain
- Verify backend is running: `http://SERVER_IP:5000/api/health`
- Check browser console for CORS errors

**Backend not starting?**
- Check `backend/logs/error.log`
- Verify `.env` file exists
- Check `chroma_full/` folder exists

---

## File Checklist

Before deploying, make sure these files exist:

**Backend:**
- ✅ `backend/.env` (with production settings)
- ✅ `backend/chroma_full/` (vector database)
- ✅ `backend/venv/` (Python virtual environment)
- ✅ `backend/start_production.bat` (Windows) or `.sh` (Linux)

**Frontend:**
- ✅ `frontend/dist/` (built files)
- ✅ `web.config` (in IIS folder)
- ✅ `.env.production` (production backend URL)

---

## Need Help?

See full documentation: `DEPLOYMENT.md`

Common issues:
- CORS errors → Check `ALLOWED_ORIGINS` in backend `.env`
- Connection refused → Check backend is running and port is open
- 404 on refresh → Check IIS `web.config` has URL rewrite rules
