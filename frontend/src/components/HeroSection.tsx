import React, { useEffect, useRef } from 'react'
import BlurText from './BlurText'

interface HeroSectionProps {
  searchQuery?: string
  selectedCategory?: string
  onSearchQueryChange?: (query: string) => void
  onCategoryChange?: (category: string) => void
  onSearch?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  searchQuery = '', 
  selectedCategory = 'all',
  onSearchQueryChange,
  onCategoryChange,
  onSearch
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match kbDoc specifications
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 350 // kbDoc hero height: 1292 x 350
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system - subtle white stars like in the image
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
    }> = []

    // Create particles - subtle white stars
    const createParticles = () => {
      for (let i = 0; i < 30; i++) { // Reduced for subtlety
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.1, // Very slow movement
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 2 + 1, // Small stars
          color: '#ffffff', // White stars
          opacity: Math.random() * 0.3 + 0.1 // Very subtle opacity
        })
      }
    }

    // Animate particles
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw star particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      requestAnimationFrame(animateParticles)
    }

    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="breadcrumb_area relative h-[350px] overflow-hidden mb-8">
      {/* Solid Orange Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-orange-500"
        style={{ zIndex: 0 }}
      />

      {/* Canvas background with subtle white stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Content - centered like kbDoc */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4">
        {/* Title and Prompt */}
        <div className="text-center mb-8">
          <BlurText
            text="OrangeWorkforce Knowledge Base"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Calibri, sans-serif' }}
          />
          <p className="text-xl text-white/90">
            Hello, what can we help you find?
          </p>
        </div>

        {/* Search Interface - kbDoc style */}
        <div className="w-[770px]">
          <form 
            className="banner_search_form banner_search_form_two"
            onSubmit={(e) => {
              e.preventDefault()
              onSearch?.()
            }}
          >
            <div className="input-group bg-white rounded-2xl shadow-lg p-2 flex items-center h-[65px]">
              {/* Search Input */}
              <input
                type="search"
                className="form-control flex-1 px-6 py-4 text-gray-600 placeholder-gray-400 text-lg focus:outline-none border-0"
                placeholder="Search OrangeWorkforce Help Topics"
                value={searchQuery}
                onChange={(e) => onSearchQueryChange?.(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === '/') {
                    e.preventDefault()
                    e.currentTarget.focus()
                  }
                }}
              />

              {/* Category Dropdown */}
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange?.(e.target.value)}
                className="input-group-append px-6 py-4 border-l border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors bg-transparent text-gray-600 text-lg focus:outline-none"
              >
                <option value="all">All Category</option>
                <option value="download">Download & Install</option>
                <option value="application">Application Command</option>
                <option value="ocr">OCR Command</option>
                <option value="word">Word Command</option>
                <option value="email">Email Command</option>
                <option value="file">File/Folder Command</option>
                <option value="teams">M365 Teams</option>
                <option value="authentication">Authentication Command</option>
                <option value="control">Control Structure Command</option>
              </select>

              {/* Search Button */}
              <button 
                type="submit" 
                className="bg-orange-400 hover:bg-orange-500 text-white p-4 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 