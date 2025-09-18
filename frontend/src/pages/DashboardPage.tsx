import React, { useState, useEffect, useMemo } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'
import ChatBot from '@/components/ChatBot'
import HeroSection from '@/components/HeroSection'

// interface Section {
//   id: number
//   attributes: {
//     title: string
//     sectionNumber: string
//     description: string
//   }
// }

interface Subsection {
  id: number
  title: string
  sectionId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  contentItems?: ContentItem[]
}

interface ContentItem {
  id: number
  title: string
  setionID: string
  content: Array<{
    __component: string
    id: number
    title?: string
    content?: string
    stepNumber?: {
      id: number
      stepDescription: string
      stepImage?: {
        url: string
        name: string
      }
    }
    header?: string
    description?: string
    second_header?: string
    media?: {
      id: number
      url: string
      name: string
      alternativeText?: string
      caption?: string
      width: number
      height: number
      formats?: {
        thumbnail?: {
          url: string
          width: number
          height: number
        }
        small?: {
          url: string
          width: number
          height: number
        }
        medium?: {
          url: string
          width: number
          height: number
        }
      }
    }
    table?: string
  }>
  createdAt: string
  updatedAt: string
  publishedAt: string
}

const DashboardPage: React.FC = () => {
  const { user, signOut } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  // const [sections, setSections] = useState<Section[]>([])
  const [subsections, setSubsections] = useState<Subsection[]>([])
  const [contentItems, setContentItems] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [expandedSubsections, setExpandedSubsections] = useState<Set<number>>(new Set())
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null)
  const [activeSubsection, setActiveSubsection] = useState<Subsection | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Debug selectedContent state changes
  useEffect(() => {
    console.log('selectedContent state changed to:', selectedContent?.title, selectedContent?.id);
    if (selectedContent) {
      console.log('Should be rendering content for item:', selectedContent.id);
    }
  }, [selectedContent]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [subsectionsRes, contentItemsRes] = await Promise.all([
        fetch('http://18.223.214.216:1337/api/subsections'),
        fetch('http://18.223.214.216:1337/api/content-items?populate[content][on][content.step-guide][populate][stepNumber][populate]=*&populate[content][on][content.text-block]=*&populate[content][on][content.additional-information][populate]=*&populate[content][on][content.table]=*&pagination[pageSize]=200')
      ])

    // try {
    //   setLoading(true)
    //   const [subsectionsRes, contentItemsRes] = await Promise.all([
    //     fetch('http://18.223.214.216:1337/api/subsections?filters[information_status][$eq]=temporary'),
    //     fetch('http://18.223.214.216:1337/api/content-items?filters[parentSubsection][information_status][$eq]=temporary&populate[content][on][content.step-guide][populate][stepNumber][populate]=*&populate[content][on][content.text-block]=*&populate[content][on][content.table]=*')
    //   ])

      if (!subsectionsRes.ok || !contentItemsRes.ok) {
        throw new Error('Failed to fetch data from Strapi')
      }

      const subsectionsData = await subsectionsRes.json()
      const contentItemsData = await contentItemsRes.json()

      // Sort subsections by sectionId to ensure proper numerical order
      const sortedSubsections = (subsectionsData.data || []).sort((a: Subsection, b: Subsection) => {
        return a.sectionId.localeCompare(b.sectionId, undefined, { numeric: true })
      })

      setSubsections(sortedSubsections)
      setContentItems(contentItemsData.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/login', { replace: true })
  }

  const toggleSubsection = (subsectionId: number) => {
    const newExpanded = new Set(expandedSubsections)
    if (newExpanded.has(subsectionId)) {
      newExpanded.delete(subsectionId)
    } else {
      newExpanded.add(subsectionId)
    }
    setExpandedSubsections(newExpanded)
  }

  const handleContentItemClick = (contentItem: ContentItem) => {
    // Find the parent subsection for this content item
    const itemMajorNumber = contentItem.setionID.split('.')[0]
    const parentSubsection = subsectionsWithContent.find(sub => {
      const subMajorNumber = sub.sectionId.split('.')[0]
      return subMajorNumber === itemMajorNumber
    })

    // If we found a parent subsection, load it first
    if (parentSubsection) {
      // Auto-expand the parent subsection
      const newExpanded = new Set(expandedSubsections)
      newExpanded.add(parentSubsection.id)
      setExpandedSubsections(newExpanded)
      
      // Set this as the active subsection to show its content
      setActiveSubsection(parentSubsection)
      setSelectedContent(null) // Show subsection overview with all items
      
      // Scroll to the specific content item after a short delay
      setTimeout(() => {
        const contentElement = document.getElementById(`content-${contentItem.id}`)
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth' })
          // Add a subtle highlight effect
          contentElement.classList.add('ring-2', 'ring-orange-500', 'ring-opacity-50')
          setTimeout(() => {
            contentElement.classList.remove('ring-2', 'ring-orange-500', 'ring-opacity-50')
          }, 2000)
        } else {
          // Retry after more time for React to render
          setTimeout(() => {
            const retryElement = document.getElementById(`content-${contentItem.id}`)
            if (retryElement) {
              retryElement.scrollIntoView({ behavior: 'smooth' })
              retryElement.classList.add('ring-2', 'ring-orange-500', 'ring-opacity-50')
              setTimeout(() => {
                retryElement.classList.remove('ring-2', 'ring-orange-500', 'ring-opacity-50')
              }, 2000)
            }
          }, 300)
        }
      }, 100) // Small delay to ensure the content is rendered
    } else {
      // Fallback: set as selected content and scroll
      setSelectedContent(contentItem)
      setTimeout(() => {
        const contentElement = document.getElementById(`content-${contentItem.id}`)
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth' })
          // Add a subtle highlight effect
          contentElement.classList.add('ring-2', 'ring-orange-500', 'ring-opacity-50')
          setTimeout(() => {
            contentElement.classList.remove('ring-2', 'ring-orange-500', 'ring-opacity-50')
          }, 2000)
        }
      }, 100)
    }
  }

  // Helper function to find which subsection contains a content item
  // const findSubsectionContainingContent = (contentItem: ContentItem) => {
  //   console.log('Looking for parent of:', contentItem.setionID);
  //   console.log('Available subsections:');
  //   subsections.forEach(sub => {
  //     console.log(`- ${sub.title}: ${sub.sectionId.trim()}`);
  //   });
  //   
  //   // Fix the matching logic - '6.1' should match parent '6.0'
  //   return subsections.find(sub => {
  //     const parentId = sub.sectionId.trim();
  //     const contentId = contentItem.setionID;
  //     
  //     // Check if content ID starts with parent ID (6.1 starts with 6.0 won't work)
  //     // Instead check if they share the same major version number
  //     const contentMajor = contentId.split('.')[0]; // '6' from '6.1'
  //     const parentMajor = parentId.split('.')[0];   // '6' from '6.0'
  //     
  //     const matches = contentMajor === parentMajor;
  //     console.log(`${parentId} matches ${contentId}:`, matches);
  //     return matches;
  //   });
  // };

  // Helper function to find the processed subsection with content items
  const findProcessedSubsectionContainingContent = (contentItem: ContentItem) => {
    const contentMajor = contentItem.setionID.split('.')[0];
    return subsectionsWithContent.find(sub => {
      const parentMajor = sub.sectionId.split('.')[0];
      return parentMajor === contentMajor;
    });
  };

  // Helper function to find content item by section ID using all search strategies
  const findContentItemBySectionId = (sectionId: string) => {
    // Strategy 1: Find content item by section ID (exact match)
    const exactMatch = contentItems.find(item => item.setionID === sectionId)
    if (exactMatch) {
      console.log(`Found content item by exact setionID match:`, exactMatch);
      return exactMatch;
    }
    
    // Strategy 2: Find content item by title (exact match first)
    const exactTitleMatch = contentItems.find(item => 
      item.title && item.title.toLowerCase() === sectionId.toLowerCase().replace(/-/g, ' ').replace(/\(/g, '').replace(/\)/g, '').trim()
    )
    if (exactTitleMatch) {
      console.log(`Found content item by exact title match:`, exactTitleMatch);
      return exactTitleMatch;
    }
    
    // Strategy 3: Find content item by title (contains match)
    const titleMatchItem = contentItems.find(item => 
      item.title && item.title.toLowerCase().includes(sectionId.toLowerCase().replace(/-/g, ' ').replace(/\(/g, '').replace(/\)/g, '').trim())
    )
    if (titleMatchItem) {
      console.log(`Found content item by title contains match:`, titleMatchItem);
      return titleMatchItem;
    }
    
    // Strategy 4: Find content item by section ID (partial match)
    const partialIdMatches = contentItems.filter(item => 
      item.setionID && item.setionID.toLowerCase().includes(sectionId.toLowerCase())
    )
    
    if (partialIdMatches.length > 0) {
      // Sort by specificity (longer matches first)
      const sortedMatches = partialIdMatches.sort((a, b) => b.setionID.length - a.setionID.length)
      console.log(`Found content item by partial setionID match:`, sortedMatches[0]);
      return sortedMatches[0];
    }
    
    return null;
  };

  const handleSectionClick = (sectionId: string) => {
    console.log(`DashboardPage: handleSectionClick called with sectionId: "${sectionId}"`);
    
    // Use the helper function to find content item using all search strategies
    const contentItem = findContentItemBySectionId(sectionId);
    
    if (contentItem) {
      console.log('Found content item:', contentItem.title, contentItem.setionID);
      
      // Find which processed subsection contains this content (with content items)
      const parentSubsection = findProcessedSubsectionContainingContent(contentItem);
      
      if (parentSubsection) {
        console.log('Found parent subsection:', parentSubsection.title);
        console.log('Parent subsection contentItems:', parentSubsection.contentItems?.length || 'No contentItems');
        console.log('Looking for content item 84 in subsection:', parentSubsection.contentItems?.find(item => item.id === 84));
        
        // Load the full subsection view (like sidebar click)
        console.log('Calling handleSubsectionClick for:', parentSubsection.title);
        handleSubsectionClick(parentSubsection);
        console.log('handleSubsectionClick completed');
        
        // Don't set selectedContent - we want subsection overview
        // setSelectedContent(contentItem);  // Remove this line
        
        // Scroll to specific item within the subsection view
        setTimeout(() => {
          const element = document.getElementById(`content-${contentItem.id}`);
          console.log('First attempt - Looking for element:', `content-${contentItem.id}`, 'Found:', !!element);
          
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Add highlight effect
            element.classList.add('ring-2', 'ring-orange-500');
            setTimeout(() => element.classList.remove('ring-2', 'ring-orange-500'), 2000);
          } else {
            // Retry after more time for React to render
            console.log('Element not found, retrying in 300ms...');
            setTimeout(() => {
              const retryElement = document.getElementById(`content-${contentItem.id}`);
              console.log('Retry attempt - Found element:', !!retryElement);
              if (retryElement) {
                retryElement.scrollIntoView({ behavior: 'smooth' });
                retryElement.classList.add('ring-2', 'ring-orange-500');
                setTimeout(() => retryElement.classList.remove('ring-2', 'ring-orange-500'), 2000);
              } else {
                // Debug: show what elements actually exist
                const allElements = document.querySelectorAll('[id^="content-"]');
                console.log('Available content elements:', Array.from(allElements).map(el => el.id));
                
                // Debug: check if the content item exists in the current activeSubsection
                console.log('Current activeSubsection:', activeSubsection?.title);
                console.log('ActiveSubsection contentItems:', activeSubsection?.contentItems?.map(item => ({id: item.id, title: item.title, setionID: item.setionID})));
                
                // Debug: check if content item 84 exists anywhere
                const allContentItems = document.querySelectorAll('[data-section-id]');
                console.log('All content items with data-section-id:', Array.from(allContentItems).map(el => ({id: el.id, sectionId: el.getAttribute('data-section-id')})));
              }
            }, 300);
          }
        }, 800);
      } else {
        console.log('No parent subsection found, falling back to direct scroll');
        // Fallback: just scroll to the content item if no parent subsection found
        handleContentItemClick(contentItem);
      }
    } else {
      console.log(`Failed to find any content matching sectionId: "${sectionId}"`);
      console.log(`Available contentItems:`, contentItems);
      console.log(`Available subsections:`, subsections);
    }
  }

  const handleSubsectionClick = (subsection: Subsection & { contentItems?: ContentItem[] }) => {
    if (subsection.contentItems && subsection.contentItems.length > 0) {
      toggleSubsection(subsection.id)
      // Set this as the active subsection to show its content prominently
      setActiveSubsection(subsection)
      setSelectedContent(null) // Clear individual selection to show overview
    }
  }

  // Function to highlight search terms in text
  const highlightSearchTerms = (text: string, searchQuery: string) => {
    if (!searchQuery.trim() || !text) return text
    
    const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => {
      if (regex.test(part)) {
        return (
          <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
            {part}
          </mark>
        )
      }
      return part
    })
  }

  // Function to render markdown table
  const renderTable = (tableContent: string) => {
    if (!tableContent) return null;
    
    // Parse markdown table
    const lines = tableContent.trim().split('\n');
    if (lines.length < 3) return null; // Need at least header, separator, and one data row
    
    const headers = lines[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    // const separatorLine = lines[1];
    const dataRows = lines.slice(2).filter(line => line.trim() && line.includes('|'));
    
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-orange-600 dark:bg-orange-900">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-sm font-semibold text-white dark:text-orange-100">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800">
            {dataRows.map((row, rowIndex) => {
              const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
              return (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}>
                  {cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // Search filtering logic
  const filteredContentItems = useMemo(() => {
    if (!searchQuery.trim()) {
      setIsSearchActive(false)
      return contentItems
    }

    setIsSearchActive(true)
    const query = searchQuery.toLowerCase().trim()

    return contentItems.filter(item => {
      // Filter by category first - check if the item belongs to the selected category's subsection
      if (selectedCategory !== 'all') {
        // Find which subsection this content item belongs to
        const itemMajorNumber = item.setionID.split('.')[0]
        const parentSubsection = subsections.find(sub => {
          const subMajorNumber = sub.sectionId.split('.')[0]
          return subMajorNumber === itemMajorNumber
        })
        
        // Check if the parent subsection title matches the selected category
        const categoryMatch = parentSubsection?.title?.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                             parentSubsection?.sectionId?.toLowerCase().includes(selectedCategory.toLowerCase())
        if (!categoryMatch) return false
      }

      // Search in title and sectionID
      const titleMatch = item.title?.toLowerCase().includes(query)
      const sectionIdMatch = item.setionID?.toLowerCase().includes(query)

      // Search in content blocks
      const contentMatch = item.content?.some(block => {
        switch (block.__component) {
          case 'content.text-block':
            return block.content?.toLowerCase().includes(query)
          case 'content.step-guide':
            return block.title?.toLowerCase().includes(query) ||
                   block.stepNumber?.stepDescription?.toLowerCase().includes(query)
          case 'content.additional-information':
            return block.header?.toLowerCase().includes(query) ||
                   block.description?.toLowerCase().includes(query) ||
                   block.second_header?.toLowerCase().includes(query)
          case 'content.table':
            return block.content?.toLowerCase().includes(query) ||
                   block.table?.toLowerCase().includes(query)
          default:
            return false
        }
      })

      return titleMatch || sectionIdMatch || contentMatch
    })
  }, [contentItems, searchQuery, selectedCategory, subsections])

  const subsectionsWithContent = useMemo(() => {
    return subsections.map(subsection => {
      // Extract the major section number from subsection (e.g., "2" from "2.0", "5" from "5.0")
      const subsectionMajorNumber = subsection.sectionId.split('.')[0]
      
      // Use filtered content items when search is active, otherwise use all content items
      const itemsToFilter = isSearchActive ? filteredContentItems : contentItems
      
      // Filter content items that belong to this major section
      // This will match content items like "5.5.8", "5.5.9" for subsection "5.0"
      const relatedContentItems = itemsToFilter.filter(item => {
        const itemSectionId = item.setionID
        // Extract the major section number from content item (e.g., "5" from "5.5.8")
        const itemMajorNumber = itemSectionId.split('.')[0]
        
        // Match if the major section numbers are the same
        return itemMajorNumber === subsectionMajorNumber
      })
      
      // Sort content items by their section ID to maintain logical order
      const sortedContentItems = relatedContentItems.sort((a, b) => {
        return a.setionID.localeCompare(b.setionID, undefined, { numeric: true })
      })
      
      console.log(`Subsection ${subsection.sectionId} (${subsection.title}) has ${sortedContentItems.length} content items`)
      
      return { ...subsection, contentItems: sortedContentItems }
    }).filter(subsection => {
      // Hide empty subsections during search
      if (isSearchActive) {
        return subsection.contentItems && subsection.contentItems.length > 0
      }
      return true
    })
  }, [subsections, contentItems, filteredContentItems, isSearchActive])

  const renderSubsection = (subsection: Subsection & { contentItems?: ContentItem[] }) => {
    if (!subsection) return null
    const isExpanded = expandedSubsections.has(subsection.id)
    const hasContentItems = subsection.contentItems && subsection.contentItems.length > 0

    return (
      <div key={subsection.id} className="mb-2">
        <div
          className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-800/30 border border-orange-200 dark:border-orange-600 cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-700/50 transition-colors"
          onClick={() => handleSubsectionClick(subsection)}
        >
          <span className="nav-item font-medium text-orange-700 dark:text-orange-300">
            {subsection.sectionId} {subsection.title}
          </span>
          {hasContentItems && (
            <svg
              className={`w-4 h-4 text-orange-600 dark:text-orange-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>

        {isExpanded && hasContentItems && subsection.contentItems && (
          <div className="ml-6 mt-2 space-y-1">
            {subsection.contentItems.map(contentItem => (
              <div
                key={contentItem.id}
                className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => handleContentItemClick(contentItem)}
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {contentItem.setionID} {contentItem.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-gray-900 dark:text-gray-100">Loading content from Strapi...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-xl text-red-600 dark:text-red-400">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 transition-colors duration-200">
      {/* Hero Section with Integrated Navigation */}
      <div className="relative">
        <HeroSection 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onSearchQueryChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onSearch={() => {
            // Search is already handled by the onChange events
            // This prevents form submission from causing page navigation
            console.log('Search triggered:', searchQuery, selectedCategory)
          }}
        />
        
        {/* Media assets positioned relative to hero section */}
        <img 
          src="/src/assets/b_leaf.svg" 
          alt="File illustration" 
          className="absolute bottom-4 left-4 w-16 h-16 opacity-80 z-20"
        />
        <img 
          src="/src/assets/v.svg" 
          alt="File illustration" 
          className="absolute bottom-4 right-4 w-20 h-20 opacity-80 z-20"
        />


        <img 
          src="/src/assets/Artboard-4-1.png" 
          alt="" 
          className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
            
        
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-30 bg-transparent">
          <div className="px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            

            <div className="flex items-center space-x-4">
              <span className="text-sm text-white/90">
                Welcome, {user?.email?.split('@')[0] || 'User'}
              </span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={handleSignOut}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 backdrop-blur-sm border border-white/30"
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar - Fixed Position (stays in place) */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out overflow-hidden sticky top-16 h-[calc(100vh-4rem)] z-20`}>
          {/* Search Results Count */}
          {isSearchActive && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-600">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {filteredContentItems.length} result{filteredContentItems.length !== 1 ? 's' : ''} found
              </div>
            </div>
          )}

          {/* Navigation Items */}
          <div className="p-4 space-y-2 overflow-y-auto h-full">
            {subsectionsWithContent.map(subsection => renderSubsection(subsection))}
          </div>
        </div>

        {/* Main Content Area - Scrollable with proper spacing */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto p-8">
            {/* Selected Content Item - Priority over subsection overview */}
            {selectedContent && (
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {selectedContent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Detailed information and step-by-step guide for {selectedContent.title.toLowerCase()}.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div key={selectedContent.id} id={`content-${selectedContent.id}`} data-section-id={selectedContent.setionID} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {selectedContent?.title || ''}
                      </h4>
                    </div>
                    
                    {selectedContent.content && selectedContent.content.length > 0 && (
                      <div className="space-y-4">
                        {(() => {
                          console.log('Rendering individual item:', selectedContent?.title);
                          console.log('Content blocks:', selectedContent?.content);
                          let stepCounter = 1; // Start step counter from 1
                          return selectedContent.content.map((contentBlock, index) => {
                            // Reset step counter when a new title is detected
                            if (contentBlock.__component === 'content.step-guide' && contentBlock.title) {
                              stepCounter = 1;
                            }
                            
                            return (
                              <div key={index} className="space-y-4">
                                {contentBlock.__component === 'content.text-block' && (
                                  <div className="prose max-w-none">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                      {isSearchActive ? highlightSearchTerms(contentBlock.content || '', searchQuery) : contentBlock.content}
                                    </p>
                                  </div>
                                )}
                                
                                {contentBlock.__component === 'content.step-guide' && (
                                  <div>
                                    {/* Show the title (e.g., "How To Download OrangeBot") */}
                                    {contentBlock.title && (
                                      <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                        {isSearchActive ? highlightSearchTerms(contentBlock.title || '', searchQuery) : contentBlock.title}
                                      </h5>
                                    )}
                                    {contentBlock.stepNumber && (
                                      <div className="space-y-3">
                                        <div className="flex items-start space-x-4">
                                          <span className="step-number flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-lg">
                                            {stepCounter++}
                                          </span>
                                          <div className="flex-1">
                                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                              {isSearchActive ? highlightSearchTerms(contentBlock.stepNumber.stepDescription || '', searchQuery) : contentBlock.stepNumber.stepDescription}
                                            </p>
                                            {contentBlock.stepNumber.stepImage && (
                                              <div className="mt-4">
                                                <img 
                                                  src={`http://18.223.214.216:1337${contentBlock.stepNumber.stepImage.url}`}
                                                  alt={contentBlock.stepNumber.stepImage.name || 'Step image'}
                                                  className="max-w-full h-auto rounded border shadow-md"
                                                />
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                {contentBlock.__component === 'content.additional-information' && (
                                  <div className="space-y-4">
                                    {/* Main header */}
                                    {contentBlock.header && (
                                      <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                        {isSearchActive ? highlightSearchTerms(contentBlock.header || '', searchQuery) : contentBlock.header}
                                      </h5>
                                    )}
                                    
                                    {/* Main description */}
                                    {contentBlock.description && (
                                      <div className="prose max-w-none">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.description || '', searchQuery) : contentBlock.description}
                                        </p>
                                      </div>
                                    )}
                                    
                                    {/* Second header */}
                                    {contentBlock.second_header && (
                                      <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
                                        {isSearchActive ? highlightSearchTerms(contentBlock.second_header || '', searchQuery) : contentBlock.second_header}
                                      </h6>
                                    )}
                                    
                                    {/* Media/image */}
                                    {contentBlock.media && (
                                      <div className="mt-4">
                                        <img 
                                          src={`http://18.223.214.216:1337${contentBlock.media.url}`}
                                          alt={contentBlock.media.alternativeText || contentBlock.media.name || 'Additional information image'}
                                          className="max-w-full h-auto rounded border shadow-md"
                                        />
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Table component */}
                                {contentBlock.__component === 'content.table' && (
                                  <div className="space-y-4">
                                    {contentBlock.table && (
                                      <div>
                                        {renderTable(contentBlock.table)}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          });
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Active Subsection Content - Only show if no selectedContent */}
            {!selectedContent && activeSubsection && (
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {activeSubsection.sectionId} {activeSubsection.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Explore detailed information and step-by-step guides for {activeSubsection.title.toLowerCase()}.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {activeSubsection.contentItems && activeSubsection.contentItems.map(item => item && (
                    <div key={item.id} id={`content-${item.id}`} data-section-id={item.setionID} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {item?.title || ''}
                        </h4>
                      </div>
                      
                      {item.content && item.content.length > 0 && (
                        <div className="space-y-4">
                          {(() => {
                            console.log('Rendering subsection item in group:', item.title);
                            console.log('Content blocks:', item.content);
                            let stepCounter = 1; // Start step counter from 1
                            return item.content.map((contentBlock, index) => {
                              // Reset step counter when a new title is detected
                              if (contentBlock.__component === 'content.step-guide' && contentBlock.title) {
                                stepCounter = 1;
                              }
                              
                              return (
                                <div key={index} className="space-y-4">
                                  {contentBlock.__component === 'content.text-block' && (
                                    <div className="prose max-w-none">
                                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                        {isSearchActive ? highlightSearchTerms(contentBlock.content || '', searchQuery) : contentBlock.content}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {contentBlock.__component === 'content.step-guide' && (
                                    <div>
                                      {/* Show the title (e.g., "How To Download OrangeBot") */}
                                      {contentBlock.title && (
                                        <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.title || '', searchQuery) : contentBlock.title}
                                        </h5>
                                      )}
                                      {contentBlock.stepNumber && (
                                        <div className="space-y-3">
                                          <div className="flex items-start space-x-4">
                                            <span className="step-number flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-lg">
                                              {stepCounter++}
                                            </span>
                                            <div className="flex-1">
                                              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                {isSearchActive ? highlightSearchTerms(contentBlock.stepNumber.stepDescription || '', searchQuery) : contentBlock.stepNumber.stepDescription}
                                              </p>
                                              {contentBlock.stepNumber.stepImage && (
                                                <div className="mt-4">
                                                  <img 
                                                    src={`http://18.223.214.216:1337${contentBlock.stepNumber.stepImage.url}`}
                                                    alt={contentBlock.stepNumber.stepImage.name || 'Step image'}
                                                    className="max-w-full h-auto rounded border shadow-md"
                                                  />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  
                                  {contentBlock.__component === 'content.additional-information' && (
                                    <div className="space-y-4">
                                      {/* Main header */}
                                      {contentBlock.header && (
                                        <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.header || '', searchQuery) : contentBlock.header}
                                        </h5>
                                      )}
                                      
                                      {/* Main description */}
                                      {contentBlock.description && (
                                        <div className="prose max-w-none">
                                          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                            {isSearchActive ? highlightSearchTerms(contentBlock.description || '', searchQuery) : contentBlock.description}
                                          </p>
                                        </div>
                                      )}
                                      
                                      {/* Second header */}
                                      {contentBlock.second_header && (
                                        <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.second_header || '', searchQuery) : contentBlock.second_header}
                                        </h6>
                                      )}
                                      
                                      {/* Media/image */}
                                      {contentBlock.media && (
                                        <div className="mt-4">
                                          <img 
                                            src={`http://18.223.214.216:1337${contentBlock.media.url}`}
                                            alt={contentBlock.media.alternativeText || contentBlock.media.name || 'Additional information image'}
                                            className="max-w-full h-auto rounded border shadow-md"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Table component */}
                                  {contentBlock.__component === 'content.table' && (
                                    <div className="space-y-4">
                                      {contentBlock.table && (
                                        <div>
                                          {renderTable(contentBlock.table)}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            });
                          })()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Show all content items when no subsection is active and no selectedContent */}
            {!selectedContent && !activeSubsection && (isSearchActive ? filteredContentItems : contentItems).length > 0 && (
              <div className="mt-8">
                <div className="space-y-6">
                  {(isSearchActive ? filteredContentItems : contentItems).map(item => item && (
                    <div key={item.id} id={`content-${item.id}`} data-section-id={item.setionID} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {isSearchActive ? highlightSearchTerms(item?.title || '', searchQuery) : (item?.title || '')}
                        </h4>
                      </div>
                      
                      {item.content && item.content.length > 0 && (
                        <div className="space-y-4">
                          {(() => {
                            let stepCounter = 1; // Start step counter from 1
                            return item.content.map((contentBlock, index) => {
                              // Reset step counter when a new title is detected
                              if (contentBlock.__component === 'content.step-guide' && contentBlock.title) {
                                stepCounter = 1;
                              }
                              
                              return (
                                <div key={index} className="space-y-4">
                                  {contentBlock.__component === 'content.text-block' && (
                                    <div className="prose max-w-none">
                                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                        {isSearchActive ? highlightSearchTerms(contentBlock.content || '', searchQuery) : contentBlock.content}
                                      </p>
                                    </div>
                                  )}
                                  
                                  {contentBlock.__component === 'content.step-guide' && (
                                    <div>
                                      {/* Show the title (e.g., "How To Download OrangeBot") */}
                                      {contentBlock.title && (
                                        <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.title || '', searchQuery) : contentBlock.title}
                                        </h5>
                                      )}
                                      {contentBlock.stepNumber && (
                                        <div className="space-y-3">
                                          <div className="flex items-start space-x-4">
                                            <span className="step-number flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-lg">
                                              {stepCounter++}
                                            </span>
                                            <div className="flex-1">
                                              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                {isSearchActive ? highlightSearchTerms(contentBlock.stepNumber.stepDescription || '', searchQuery) : contentBlock.stepNumber.stepDescription}
                                              </p>
                                              {contentBlock.stepNumber.stepImage && (
                                                <div className="mt-4">
                                                  <img 
                                                    src={`http://18.223.214.216:1337${contentBlock.stepNumber.stepImage.url}`}
                                                    alt={contentBlock.stepNumber.stepImage.name || 'Step image'}
                                                    className="max-w-full h-auto rounded border shadow-md"
                                                  />
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  
                                  {contentBlock.__component === 'content.additional-information' && (
                                    <div className="space-y-4">
                                      {/* Main header */}
                                      {contentBlock.header && (
                                        <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.header || '', searchQuery) : contentBlock.header}
                                        </h5>
                                      )}
                                      
                                      {/* Main description */}
                                      {contentBlock.description && (
                                        <div className="prose max-w-none">
                                          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                            {isSearchActive ? highlightSearchTerms(contentBlock.description || '', searchQuery) : contentBlock.description}
                                          </p>
                                        </div>
                                      )}
                                      
                                      {/* Second header */}
                                      {contentBlock.second_header && (
                                        <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
                                          {isSearchActive ? highlightSearchTerms(contentBlock.second_header || '', searchQuery) : contentBlock.second_header}
                                        </h6>
                                      )}
                                      
                                      {/* Media/image */}
                                      {contentBlock.media && (
                                        <div className="mt-4">
                                          <img 
                                            src={`http://18.223.214.216:1337${contentBlock.media.url}`}
                                            alt={contentBlock.media.alternativeText || contentBlock.media.name || 'Additional information image'}
                                            className="max-w-full h-auto rounded border shadow-md"
                                          />
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Table component */}
                                  {contentBlock.__component === 'content.table' && (
                                    <div className="space-y-4">
                                      {contentBlock.table && (
                                        <div>
                                          {renderTable(contentBlock.table)}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            });
                          })()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 All Rights Reserved by <span className="text-orange-400 font-medium">OrangeFin Asia</span>
          </p>
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <ChatBot onSectionClick={handleSectionClick} />
      </div>
    </div>
  )
}

export default DashboardPage

