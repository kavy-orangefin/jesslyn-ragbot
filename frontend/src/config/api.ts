/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

// Backend API base URL
export const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000'

// Strapi CMS base URL
export const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://18.223.214.216:1337'

// API Endpoints
export const API_ENDPOINTS = {
  // Backend endpoints
  chat: `${BACKEND_API_URL}/api/chat`,

  // Strapi endpoints
  subsections: `${STRAPI_API_URL}/api/subsections`,
  contentItems: `${STRAPI_API_URL}/api/content-items`,

  // Helper function to get full Strapi asset URL
  getStrapiAssetUrl: (path: string) => {
    if (!path) return ''
    return path.startsWith('http') ? path : `${STRAPI_API_URL}${path}`
  }
}

export default API_ENDPOINTS
