import React, { createContext, useContext, useState } from 'react'
// import { User, Session, AuthError } from '@supabase/supabase-js'
// import { supabase } from '@/lib/supabase'

interface User {
  id: string
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (username: string, password: string) => Promise<{ error: string | null }>
  signUp: (username: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  // Simple hardcoded authentication
  const signIn = async (username: string, password: string) => {
    if (username === 'kav1' && password === '123') {
      setUser({ id: '1', email: username })
      return { error: null }
    } else {
      return { error: 'Invalid credentials. Use username: kav1, password: 123' }
    }
  }

  const signUp = async (username: string, password: string) => {
    // For now, just redirect to sign in
    return { error: 'Please use the existing credentials: username: kav1, password: 123' }
  }

  const signOut = async () => {
    setUser(null)
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
} 