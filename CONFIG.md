# Configuration Guide

## Overview
This document explains how to configure the API endpoints for the Jesslyn RAGBot project. All API endpoints are now centralized in configuration files for easy management.

## Frontend Configuration

### Environment Variables

The frontend uses Vite environment variables. Copy `.env.example` to `.env` and configure:

```bash
# Backend API Configuration
VITE_BACKEND_API_URL=http://localhost:5000

# Strapi CMS Configuration
VITE_STRAPI_API_URL=http://18.223.214.216:1337
```

### Configuration File

All API endpoints are defined in `frontend/src/config/api.ts`:

```typescript
import { API_ENDPOINTS } from '@/config/api'

// Use the endpoints
fetch(API_ENDPOINTS.chat, { ... })
fetch(API_ENDPOINTS.subsections, { ... })

// For Strapi assets
API_ENDPOINTS.getStrapiAssetUrl('/uploads/image.png')
```

## Backend Configuration

The backend uses a `.env` file in the `backend/` directory:

```bash
# OpenAI Configuration
OPENAI_API_KEY=your-api-key-here

# Flask Configuration
FLASK_ENV=development
FLASK_DEBUG=True
FLASK_PORT=5000

# Database Configuration
DB_NAME=chroma_full
CHUNK_SIZE=1000
CHUNK_OVERLAP=150

# Model Configuration
MODEL_NAME=gpt-4o-mini
TEMPERATURE=0.3
```

## Production Deployment

### Frontend Production Setup

For production (e.g., Vercel), set these environment variables in your deployment platform:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add:
   - `VITE_BACKEND_API_URL`: Your production backend URL
   - `VITE_STRAPI_API_URL`: Your production Strapi URL

### Backend Production Setup

Update `backend/.env` with production values:

```bash
FLASK_ENV=production
FLASK_DEBUG=False
# Add production-specific values
```

## Changed Files

The following files were modified to use centralized configuration:

- `frontend/src/components/ChatBot.tsx` - Uses `API_ENDPOINTS.chat`
- `frontend/src/pages/DashboardPage.tsx` - Uses `API_ENDPOINTS.subsections`, `API_ENDPOINTS.contentItems`, and `API_ENDPOINTS.getStrapiAssetUrl()`

## Benefits

1. **Single Source of Truth**: All API URLs in one place
2. **Environment-Specific**: Different URLs for dev/staging/production
3. **Type Safety**: TypeScript support for environment variables
4. **Easy Updates**: Change URLs without searching through code
5. **No Hardcoded Values**: Eliminates scattered API URLs in codebase

## Migration Notes

Previously hardcoded URLs have been replaced:
- `http://localhost:5000/api/chat` → `API_ENDPOINTS.chat`
- `http://18.223.214.216:1337/api/subsections` → `API_ENDPOINTS.subsections`
- `` `http://18.223.214.216:1337${path}` `` → `API_ENDPOINTS.getStrapiAssetUrl(path)`
