import React, { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import HeroSection from '@/components/HeroSection'

interface Section {
  id: string
  title: string
  page: number
  children?: Section[]
}

const documentationData: Section[] = [
  {
    id: '1',
    title: 'GET STARTED',
    page: 23,
    children: [
      {
        id: '1.1',
        title: 'Download & Install Software',
        page: 23,
        children: [
          { id: '1.1.1', title: 'OrangeBot Agent', page: 23 },
          { id: '1.1.2', title: 'OrangeWeb Recorder', page: 34 },
          { id: '1.1.3', title: 'OrangeVision Form+', page: 40 },
          { id: '1.1.4', title: 'OrangeMobile', page: 45 }
        ]
      },
      {
        id: '1.2',
        title: 'Job Studio Designer',
        page: 47,
        children: [
          { id: '1.2.1', title: 'Create and Publish Job', page: 47 },
          { id: '1.2.2', title: 'Run Job', page: 60 },
          { id: '1.2.3', title: 'Import and Export Job', page: 70 }
        ]
      },
      {
        id: '1.3',
        title: 'OrangeWorkforce Platform',
        page: 74,
        children: [
          { id: '1.3.1', title: 'On Cloud (Hybrid)', page: 74 },
          { id: '1.3.2', title: 'On Premise', page: 75 }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'TUTORIAL',
    page: 1,
    children: [
      {
        id: '2.1',
        title: 'OrangeWorkforce Tutorial',
        page: 1
      }
    ]
  }
]

const DocumentationPage: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['1', '2']))
  const [activeSection, setActiveSection] = useState<string>('1')
  const [searchQuery, setSearchQuery] = useState('')

  // Handle URL hash on component mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) // Remove the #
      if (hash) {
        scrollToSection(hash)
      }
    }

    // Handle initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Try to find the section in the documentation data
    const findSection = (sections: Section[], id: string): Section | null => {
      for (const section of sections) {
        if (section.id === id) return section
        if (section.children) {
          const found = findSection(section.children, id)
          if (found) return found
        }
      }
      return null
    }

    const section = findSection(documentationData, sectionId)
    if (section) {
      setActiveSection(sectionId)
      // Expand parent sections if needed
      expandParentSections(sectionId)
      
      // Scroll to the section after a short delay to ensure it's rendered
      setTimeout(() => {
        const element = document.querySelector(`[data-section-id="${sectionId}"]`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          // Add highlight effect
          element.classList.add('ring-2', 'ring-orange-500', 'ring-opacity-50')
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-orange-500', 'ring-opacity-50')
          }, 2000)
        }
      }, 100)
    }
  }

  const expandParentSections = (sectionId: string) => {
    const findParentIds = (sections: Section[], targetId: string, parentIds: string[] = []): string[] => {
      for (const section of sections) {
        if (section.id === targetId) {
          return parentIds
        }
        if (section.children) {
          const found = findParentIds(section.children, targetId, [...parentIds, section.id])
          if (found.length > 0) {
            return found
          }
        }
      }
      return []
    }

    const parentIds = findParentIds(documentationData, sectionId)
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      parentIds.forEach(id => newSet.add(id))
      return newSet
    })
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/login', { replace: true })
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  const filteredData = documentationData.filter(section => 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.children?.some(child => 
      child.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.children?.some(subChild => 
        subChild.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  )

  const renderSection = (section: Section, level: number = 0) => {
    const isExpanded = expandedSections.has(section.id)
    const hasChildren = section.children && section.children.length > 0
    const isActive = activeSection === section.id

    return (
      <div key={section.id} className={`${level > 0 ? 'ml-4' : ''}`}>
        <div 
          className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors duration-200 ${
            isActive 
              ? 'bg-orange-100 text-orange-800 border-l-4 border-orange-500' 
              : 'hover:bg-gray-50'
          }`}
          onClick={() => handleSectionClick(section.id)}
        >
          <div className="flex items-center space-x-2">
            {hasChildren && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleSection(section.id)
                }}
                className="w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-700"
              >
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            <span className={`font-medium ${level === 0 ? 'text-gray-900' : level === 1 ? 'text-gray-800' : 'text-gray-700'}`}>
              {section.id} {section.title}
            </span>
          </div>
          <span className="text-sm text-gray-500">{section.page}</span>
        </div>
        
        {hasChildren && isExpanded && section.children && (
          <div className="mt-1">
            {section.children.map(child => renderSection(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const getActiveSectionContent = () => {
    const findSection = (sections: Section[], id: string): Section | null => {
      for (const section of sections) {
        if (section.id === id) return section
        if (section.children) {
          const found = findSection(section.children, id)
          if (found) return found
        }
      }
      return null
    }

    const activeSectionData = findSection(documentationData, activeSection)
    if (!activeSectionData) return null

    return (
      <div className="space-y-6" data-section-id={activeSectionData.id}>
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {activeSectionData.id} {activeSectionData.title}
          </h1>
          <p className="text-gray-600 mt-2">Page {activeSectionData.page}</p>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            This section covers the essential information about {activeSectionData.title.toLowerCase()}. 
            Here you'll find detailed instructions, best practices, and troubleshooting tips to help you 
            get the most out of this feature.
          </p>
          
          {activeSectionData.children && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sub-sections:</h3>
              <div className="grid gap-3">
                {activeSectionData.children.map(child => (
                  <div 
                    key={child.id}
                    data-section-id={child.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleSectionClick(child.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{child.id} {child.title}</span>
                      <span className="text-sm text-gray-500">Page {child.page}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      <nav className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Product Documentation
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.email}
              </span>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                ← Dashboard
              </button>
              <button
                onClick={handleSignOut}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-screen pt-16">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-sm border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="p-4 space-y-1">
            {filteredData.map(section => renderSection(section))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            {getActiveSectionContent() || (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Product Documentation</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Select a section from the sidebar to view detailed documentation. 
                  Use the search to quickly find specific topics or browse through the table of contents.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentationPage 