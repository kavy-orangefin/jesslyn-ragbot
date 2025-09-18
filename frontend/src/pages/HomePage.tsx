import React, { useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'

const HomePage: React.FC = () => {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      if (user) {
        navigate('/dashboard', { replace: true })
      } else {
        // Add a delay to show the hero section briefly
        const timer = setTimeout(() => {
          navigate('/login', { replace: true })
        }, 5000) // Show hero for 5 seconds
        
        return () => clearTimeout(timer)
      }
    }
  }, [user, loading, navigate])

  // Show loading while determining where to redirect
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  // If user is logged in, redirect to dashboard
  if (user) {
    return null
  }

  // Show hero section for guests before redirecting to login
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Welcome Message Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Action Library</h1>
        <p className="text-xl opacity-90">Your comprehensive knowledge base for automation tools</p>
        <p className="text-lg opacity-75 mt-2">Redirecting to login in a few seconds...</p>
      </div>
    </div>
  )
}

export default HomePage 