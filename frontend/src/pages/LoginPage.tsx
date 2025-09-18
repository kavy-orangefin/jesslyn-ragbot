import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const { signIn, signUp } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = isLogin 
        ? await signIn(username, password)
        : await signUp(username, password)

      if (error) {
        setError(error)
      } else {
        if (isLogin) {
          navigate('/dashboard')
        } else {
          setError('Please use the existing credentials: username: kav1, password: 123')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: theme === 'light'
          ? 'linear-gradient(90deg, #FFF8F5 0%, #FFB366 100%)'
          : 'linear-gradient(90deg, #F5E6D3 0%, #FFD4B3 100%)'
      }}
    >
      <div className="max-w-lg w-full">
        {/* Main White Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header Section */}
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/orange-removebg-preview.png" 
                alt="Orange Knowledge Base Logo" 
                className="w-12 h-12 mr-3 object-contain drop-shadow-md"
              />
              <h1 className="text-3xl font-bold text-orange-600" style={{ fontFamily: 'Calibri, sans-serif', letterSpacing: '0.025em' }}>
                Orange Knowledge Base
              </h1>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-2xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '0.025em' }}>
              Sign into your account
            </h2>
            
            {/* Sign up prompt */}
            <p className="text-gray-600" style={{ fontFamily: 'Inter', fontWeight: '400' }}>
              Don't have an account?{' '}
              <span className="text-orange-600 font-medium">
                Please do contact administrator !
              </span>
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="Insert your username"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                placeholder="Insert your password"
              />
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm text-red-700 text-center">{error}</p>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Login'}
          </button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <button className="text-orange-500 hover:text-orange-600 text-sm">
              Forgot Password?
            </button>
          </div>



          {/* Footer Information */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              v1.23.14.25126-(PID2025-MAY-06) © 2025 - OrangeFIN Asia Sdn Bhd
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LoginPage 