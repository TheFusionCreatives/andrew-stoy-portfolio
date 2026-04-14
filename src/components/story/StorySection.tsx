'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import { X, ChevronDown, ChevronUp, Keyboard, BookOpen, ArrowRight } from 'lucide-react'

const storyPhases = [
  {
    id: 'title',
    content: {
      title: "The Education That Couldn't Be Taught",
      text: "Before I ever worked in digital mental health, I learned what it means for a system to fail in real time."
    },
    background: "bg-dark-bg",
    accentColor: "blue-primary"
  },
  {
    id: 'trauma',
    content: {
      text: "At twelve, in the span of a few months, a classmate was killed outside our school, several friends were seriously injured, my parents divorced, and a friend's mother died of cancer. On the last day of school, our family's minivan was T-boned on the way home. I remember the blur of a blue pickup truck, then waking up bloodied on the side of the road."
    },
    background: "bg-dark-bg",
    accentColor: "red-500"
  },
  {
    id: 'recovery',
    content: {
      text: "My nine-year-old sister awoke a month later unable to speak, paralyzed, and missing half of her skull. Over the following year, I watched her relearn how to write, speak, and eventually walk—returning to school in a wheelchair and later earning a full-ride scholarship to college. That season was my first education in human resilience and the invisible architectures that shape recovery."
    },
    background: "bg-dark-bg",
    accentColor: "green-primary"
  },
  {
    id: 'conventional',
    content: {
      text: "For a while, I followed the culturally sanctioned blueprint of success: academic achievement, entrepreneurship, athletics, leadership. I ran a landscaping business, graduated as valedictorian, earned a full-ride scholarship, and collected championships and MVP awards. On paper, my trajectory looked secure."
    },
    background: "bg-dark-bg",
    accentColor: "blue-primary"
  },
  {
    id: 'awakening',
    content: {
      text: "The pandemic exposed the cracks. College collapsed into screens and isolation, and I was forced to confront not just how I was learning, but why. Rather than freeze, I made an unconventional choice: I gave up my full-ride scholarship at Ohio Wesleyan University after a year of hybrid COVID learning and transferred to the University of Maryland Global Campus to study fully online."
    },
    background: "bg-dark-bg",
    accentColor: "purple-electric"
  },
  {
    id: 'journey',
    content: {
      text: "Working full time, running a business, traveling, and managing school was not the easy option—but I no longer wanted to only read about the world behind a screen; I wanted to study it in motion. Before graduating, I traveled to all fifty states and circled the globe. I lived and worked in Puerto Rico for a year, running my landscaping business from the beach while working at a hostel and pescadería, meeting travelers and locals from every walk of life."
    },
    background: "bg-dark-bg",
    accentColor: "coral"
  },
  {
    id: 'realization',
    content: {
      text: "I deepened my business acumen through consulting, business strategy, and technological systems architecture, and was awarded $10,000 to relocate and join the Tech Hub in Tulsa, Oklahoma. From there, I spent four months in Asia supporting NGOs and community organizations, including time in Thailand working with Burmese trafficking survivors. Moving through so many different crises, cultures, and technical systems made one thing clear to me: the systems around us, from software to workflows to relationships, either push us closer to the edge or help us find our way back."
    },
    background: "bg-dark-bg",
    accentColor: "blue-primary"
  },
  {
    id: 'purpose',
    content: {
      text: "That understanding still sits at the center of my work. I don't just integrate psychology and technology in the abstract; I design systems for real people, in real crises, navigating moments when everything can change in less than a second."
    },
    background: "bg-dark-bg",
    accentColor: "green-primary"
  }
]

export default function StorySection() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const scrollCooldownRef = useRef(false)

  const openStory = () => {
    setIsOpen(true)
    setCurrentPhase(0)
    setUserInteracted(false)
    setShowInstructions(true)
    document.body.style.overflow = 'hidden'
    
    // Hide instructions after 5 seconds
    setTimeout(() => setShowInstructions(false), 5000)
  }

  const closeStory = () => {
    setIsOpen(false)
    setCurrentPhase(0)
    document.body.style.overflow = 'unset'
  }

  const nextPhase = useCallback(() => {
    if (currentPhase < storyPhases.length - 1) {
      setCurrentPhase(prev => prev + 1)
      setUserInteracted(true)
    }
  }, [currentPhase])

  const prevPhase = useCallback(() => {
    if (currentPhase > 0) {
      setCurrentPhase(prev => prev - 1)
      setUserInteracted(true)
    }
  }, [currentPhase])

  // Auto-advance functionality
  useEffect(() => {
    if (!isOpen || userInteracted) return
    
    // Clear any existing timer
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current)
    }
    
    // First phase: 3 seconds, subsequent phases: 10 seconds
    const delay = currentPhase === 0 ? 3000 : 10000
    
    if (currentPhase < storyPhases.length - 1) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        setCurrentPhase(prev => prev + 1)
      }, delay)
    }
    
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current)
      }
    }
  }, [isOpen, currentPhase, userInteracted])

  // Handle scroll/wheel events - lock-based approach to prevent double-skipping
  useEffect(() => {
    if (!isOpen) return
    
    const COOLDOWN_MS = 3000 // 3 second cooldown between scrolls
    const THRESHOLD = 200 // Higher threshold for trackpads
    
    const handleWheel = (e: WheelEvent) => {
      // If in cooldown, completely ignore the event
      if (scrollCooldownRef.current) {
        e.preventDefault()
        return
      }
      
      e.preventDefault()
      
      // Check scroll direction and magnitude
      if (Math.abs(e.deltaY) > THRESHOLD) {
        // Set cooldown lock immediately
        scrollCooldownRef.current = true
        
        // Execute navigation
        if (e.deltaY > 0 && currentPhase < storyPhases.length - 1) {
          setCurrentPhase(prev => prev + 1)
          setUserInteracted(true)
        } else if (e.deltaY < 0 && currentPhase > 0) {
          setCurrentPhase(prev => prev - 1)
          setUserInteracted(true)
        }
        
        // Release cooldown after delay
        setTimeout(() => {
          scrollCooldownRef.current = false
        }, COOLDOWN_MS)
      }
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isOpen, currentPhase])

  // Handle touch events for mobile
  useEffect(() => {
    if (!isOpen) return
    
    let touchStartY = 0
    let lastTouchTime = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now()
      if (now - lastTouchTime < 1000) return // Debounce - 1 second between swipes
      
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY
      const threshold = 50
      
      if (Math.abs(diff) > threshold) {
        lastTouchTime = now
        if (diff > 0 && currentPhase < storyPhases.length - 1) {
          setCurrentPhase(prev => prev + 1)
          setUserInteracted(true)
        } else if (diff < 0 && currentPhase > 0) {
          setCurrentPhase(prev => prev - 1)
          setUserInteracted(true)
        }
      }
    }
    
    const modal = modalRef.current
    if (modal) {
      modal.addEventListener('touchstart', handleTouchStart, { passive: true })
      modal.addEventListener('touchend', handleTouchEnd, { passive: true })
      
      return () => {
        modal.removeEventListener('touchstart', handleTouchStart)
        modal.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isOpen, currentPhase])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    
    let lastKeyTime = 0
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      const now = Date.now()
      if (now - lastKeyTime < 300) return // Debounce
      
      if (e.key === 'Escape') {
        closeStory()
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        if (currentPhase < storyPhases.length - 1) {
          lastKeyTime = now
          setCurrentPhase(prev => prev + 1)
          setUserInteracted(true)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        if (currentPhase > 0) {
          lastKeyTime = now
          setCurrentPhase(prev => prev - 1)
          setUserInteracted(true)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentPhase])

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  }

  const getAccentClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'blue-primary': 'text-blue-primary border-blue-primary/30 bg-blue-primary/10',
      'green-primary': 'text-green-primary border-green-primary/30 bg-green-primary/10',
      'purple-electric': 'text-purple-electric border-purple-electric/30 bg-purple-electric/10',
      'coral': 'text-coral border-coral/30 bg-coral/10',
      'red-500': 'text-red-400 border-red-400/30 bg-red-400/10'
    }
    return colorMap[color] || colorMap['blue-primary']
  }

  return (
    <section 
      ref={sectionRef}
      id="story" 
      className="relative py-20 scroll-mt-20"
    >
      <Container>
        {/* Entry Card */}
        <motion.div
          className="text-center py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          <motion.div
            variants={variants}
            className="p-8 sm:p-12 rounded-2xl border border-blue-primary/30 bg-dark-surface/50 backdrop-blur-sm hover:border-blue-primary/50 hover:bg-dark-surface/70 transition-all duration-300 cursor-pointer group"
            onClick={openStory}
          >
            <motion.h2 
              variants={variants}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 header-primary group-hover:text-blue-primary transition-colors"
            >
              The Education That Couldn't Be Taught
            </motion.h2>
            <motion.p 
              variants={variants}
              className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Before I ever worked in digital mental health, I learned what it means for a system to fail in real time. Click to read my story.
            </motion.p>
            <motion.div
              variants={variants}
              className="flex justify-center"
            >
              <div className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-blue-primary/40 bg-blue-primary/20 text-blue-primary group-hover:text-white font-semibold text-base group-hover:bg-blue-primary/60 group-hover:border-blue-primary group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-primary/10 group-hover:shadow-blue-primary/30">
                <BookOpen className="w-5 h-5" />
                <span>Read My Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Immersive Story Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center touch-pan-y"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-dark-bg/95 backdrop-blur-xl"
              onClick={closeStory}
            />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8">
              <Container>
                <motion.div
                  key={currentPhase}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center max-w-4xl mx-auto"
                >
                  {/* Phase Indicator */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium border text-blue-primary border-blue-primary/30 bg-blue-primary/10">
                      {currentPhase + 1} / {storyPhases.length}
                    </span>
                  </div>

                  {/* Title (if exists) */}
                  {storyPhases[currentPhase].content.title && (
                    <motion.h1
                      variants={variants}
                      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-8 text-white"
                    >
                      {storyPhases[currentPhase].content.title}
                    </motion.h1>
                  )}
                  
                  {/* Story Text */}
                  <motion.p
                    variants={variants}
                    className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-light mb-12"
                  >
                    {storyPhases[currentPhase].content.text}
                  </motion.p>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={prevPhase}
                      disabled={currentPhase === 0}
                      className="p-3 rounded-full border border-dark-border bg-dark-surface/50 hover:bg-dark-surface disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      aria-label="Previous"
                    >
                      <ChevronUp className="w-6 h-6 text-gray-light" />
                    </button>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-2 px-4">
                      {storyPhases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhase(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentPhase 
                              ? 'w-8 bg-blue-primary' 
                              : 'w-2 bg-gray-medium/30 hover:bg-gray-medium/50'
                          }`}
                          aria-label={`Go to phase ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextPhase}
                      disabled={currentPhase === storyPhases.length - 1}
                      className="p-3 rounded-full border border-dark-border bg-dark-surface/50 hover:bg-dark-surface disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      aria-label="Next"
                    >
                      <ChevronDown className="w-6 h-6 text-gray-light" />
                    </button>
                  </div>

                  {/* Exit hint */}
                  {currentPhase === storyPhases.length - 1 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 text-sm text-gray-medium"
                    >
                      Press ESC or click X to close
                    </motion.p>
                  )}
                </motion.div>
              </Container>

              {/* Instructions Overlay */}
              <AnimatePresence>
                {showInstructions && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-dark-surface/80 border border-blue-primary/30 backdrop-blur-sm">
                      <Keyboard className="w-5 h-5 text-blue-primary" />
                      <div className="flex items-center gap-2 text-sm text-gray-light">
                        <span className="hidden sm:inline">Use</span>
                        <kbd className="px-2 py-1 rounded bg-dark-border text-xs">←</kbd>
                        <kbd className="px-2 py-1 rounded bg-dark-border text-xs">→</kbd>
                        <span className="hidden sm:inline">or</span>
                        <span className="sm:hidden">Swipe</span>
                        <span>to navigate</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Exit Button */}
              <button
                onClick={closeStory}
                className="absolute top-8 right-8 p-3 rounded-full bg-dark-surface/80 border border-dark-border hover:border-blue-primary/30 hover:bg-blue-primary/10 transition-all z-20"
                aria-label="Close story"
              >
                <X className="w-6 h-6 text-gray-light" />
              </button>

              {/* Mobile Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 sm:hidden">
                <p className="text-xs text-gray-medium/60 text-center">
                  Swipe up/down to navigate
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
