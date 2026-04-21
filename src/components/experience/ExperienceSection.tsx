'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Calendar, MapPin, Briefcase, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'

const experienceData = [
  {
    title: 'Client Experience & Technology Integration Coordinator',
    organization: 'Kentlands Psychotherapy',
    location: 'Maryland, USA',
    period: '2026 – Present',
    description: 'Engineered an end-to-end clinical CRM ecosystem, automating multi-channel touchpoints to streamline the patient journey from intake to therapeutic intervention.',
    achievements: [
      'Bridged technical systems with clinical decision-making, collaborating with licensed psychologists',
      'Architected complex data integrations and automated workflows for clinician tracking',
      'Redesigned the digital "Customer Pipeline" using behavioral design principles to reduce friction',
      'Managed patient-facing communication and hands-on technical support using clinical empathy'
    ]
  },
  {
    title: 'Crisis Hotline Counselor',
    organization: 'The Hope Line, Inc',
    location: 'Remote',
    period: 'July 2022 – September 2024',
    description: 'Evaluated acute psychological crises within digital-first environments, identifying behavioral markers of suicidal ideation, depression, and trauma in youth.',
    achievements: [
      'Applied evidence-informed clinical strategies to navigate unique psychological friction of online intervention',
      'Facilitated development of cognitive-behavioral coping mechanisms and emotional regulation strategies',
      'Systematically analyzed digital behavioral markers for real-time risk assessments',
      'Documented qualitative data to support evidence-informed follow-up and care continuity'
    ]
  },
  {
    title: 'Tulsa Remote Contributor',
    organization: 'Gradient, Tulsa Innovation Hub',
    location: 'Tulsa, OK',
    period: '2022 – 2025',
    description: 'Awarded a selective $10,000 professional merit grant to contribute to Tulsa\'s emerging technology sector, recognized for high digital proficiency and potential for social impact.',
    achievements: [
      'Contributed to technology-driven projects and digital problem-solving',
      'Collaborated within federally recognized U.S. Tech Hub environment',
      'Applied systematic analysis and digital tools to generate actionable insights',
      'Engaged in professional networking within the innovation ecosystem'
    ]
  },
  {
    title: 'Business Systems & Technology Consultant',
    organization: 'Fusion Creatives',
    location: 'Remote',
    period: 'May 2021 – Dec 2025',
    description: 'Engineered and optimized interactive digital platforms and web applications, focusing on the intersection of UX design and cognitive engagement to enhance knowledge transfer.',
    achievements: [
      'Directed Quality Assurance for complex digital workflows, prioritizing data integrity',
      'Designed and analyzed behavioral data architectures and user journey mapping',
      'Leveraged computational tools to automate multi-channel workflows',
      'Synthesized complex technical architectures into actionable design strategies'
    ]
  },
  {
    title: 'Hospitality Agent',
    organization: 'Nomada Urban Beach Hostel',
    location: 'San Juan, PR',
    period: 'September 2021 – March 2022',
    description: 'Maintained a safe and structured environment in a high-traffic, multicultural setting, supporting well-being and conflict prevention.',
    achievements: [
      'Built rapport and trust with individuals from diverse cultural and socioeconomic backgrounds',
      'Applied emotional regulation techniques and active listening',
      'Managed tense situations and promoted positive interpersonal outcomes',
      'Enhanced engagement and cooperation through cross-cultural communication'
    ]
  },
  {
    title: 'Owner / Operations Manager',
    organization: 'Blue Crab Lawn Care LLC',
    location: 'Maryland, USA',
    period: 'May 2013 – December 2021',
    description: 'Fully digitized business operations, implementing cloud-based scheduling, client management, and workflow tracking systems.',
    achievements: [
      'Supervised and trained seasonal staff with structured performance tracking',
      'Managed budgeting, invoicing, and financial reporting using digital tools',
      'Streamlined client communications through automated reminders and digital records',
      'Applied analytical insights to enhance efficiency and customer satisfaction'
    ]
  }
]

function ExperienceModal({ 
  item, 
  index, 
  totalItems,
  isOpen, 
  onClose, 
  onPrev, 
  onNext 
}: { 
  item: typeof experienceData[0]
  index: number
  totalItems: number
  isOpen: boolean
  onClose: (finalIndex?: number) => void
  onPrev: () => void
  onNext: () => void
}) {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onPrev, onNext])
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])
  
  if (!isOpen || !item) return null
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => onClose()}
        >
          {/* Backdrop - transparent with light fog effect */}
          <div className="absolute inset-0 bg-dark-bg/40 backdrop-blur-sm" />
          
          {/* Modal Container - allows arrows to sit outside */}
          <div className="relative flex items-center" onClick={(e) => e.stopPropagation()}>
            {/* Left Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              disabled={index === 0}
              className="flex-shrink-0 p-3 rounded-full bg-dark-surface/80 border border-blue-primary/30 hover:bg-blue-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg mr-2 sm:mr-4"
              aria-label="Previous experience"
            >
              <ChevronLeft className="w-6 h-6 text-gray-light" />
            </button>
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-blue-primary/30 bg-dark-surface/95 backdrop-blur-xl shadow-2xl shadow-blue-primary/20"
            >
              {/* Close Button - positioned inside the card */}
              <button
                onClick={(e) => { e.stopPropagation(); onClose(index); }}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-border/50 hover:bg-blue-primary/20 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-light" />
              </button>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Counter */}
                <div className="text-sm text-gray-medium mb-4 text-center">
                  {index + 1} / {totalItems}
                </div>
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center text-blue-primary">
                    <Briefcase className="w-6 h-6 mr-3" />
                    <h2 className="text-xl sm:text-2xl font-display font-bold">{item.title}</h2>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-light mb-4">
                  {item.organization === 'The Hope Line, Inc' ? (
                    <a 
                      href="https://www.thehopeline.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-light hover:text-blue-primary transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      {item.organization}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    item.organization
                  )}
                </h3>
                
                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-medium">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {item.location}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-medium mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-light mb-4 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start text-sm text-gray-medium"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-primary mt-1.5 mr-3 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Footer hint */}
              <div className="px-6 py-4 border-t border-dark-border/50 bg-dark-surface/50">
                <p className="text-xs text-gray-medium text-center">
                  Use <kbd className="px-2 py-1 rounded bg-dark-border text-gray-light">←</kbd> <kbd className="px-2 py-1 rounded bg-dark-border text-gray-light">→</kbd> to navigate · <kbd className="px-2 py-1 rounded bg-dark-border text-gray-light">ESC</kbd> to close
                </p>
              </div>
            </motion.div>
            
            {/* Right Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              disabled={index === totalItems - 1}
              className="flex-shrink-0 p-3 rounded-full bg-dark-surface/80 border border-blue-primary/30 hover:bg-blue-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg ml-2 sm:ml-4"
              aria-label="Next experience"
            >
              <ChevronRight className="w-6 h-6 text-gray-light" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ExperienceCard({ item, index, isActive, innerRef, onClick }: { 
  item: typeof experienceData[0], 
  index: number, 
  isActive: boolean,
  innerRef?: React.Ref<HTMLDivElement>
  onClick?: () => void
}) {
  return (
    <motion.div
      ref={innerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:justify-between`}
    >
      {/* Timeline dot - pulses when active */}
      <motion.div 
        className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 z-20"
        animate={isActive ? { scale: 1.5 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-4 border-dark-bg shadow-lg transition-all duration-300 ${isActive ? 'bg-blue-primary shadow-blue-primary/50 shadow-xl' : 'bg-green-primary shadow-green-primary/50'}`} />
      </motion.div>

      {/* Content card */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-16 md:ml-0 ${index > 0 ? 'md:-mt-24' : ''}`}>
        <motion.div 
          className={`p-4 sm:p-6 rounded-xl border backdrop-blur-s transition-all duration-300 group relative cursor-pointer ${
            isActive 
              ? 'border-blue-primary/50 bg-dark-surface/80 shadow-2xl shadow-blue-primary/20 scale-[1.02] z-10' 
              : 'border-dark-border bg-dark-surface/50 hover:border-green-primary/30 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-green-primary/20'
          }`}
          whileHover={{ scale: isActive ? 1.02 : 1.03 }}
          onClick={onClick}
        >
          {/* Active indicator glow */}
          {isActive && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-primary/10 via-transparent to-green-primary/10 pointer-events-none" />
          )}
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 md:justify-end md:flex-row-reverse">
            <div className={`flex items-center transition-colors duration-300 ${isActive ? 'text-blue-primary' : 'text-green-primary'}`}>
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-medium text-sm sm:text-base">{item.title}</span>
            </div>
          </div>

          <h3 className={`text-lg sm:text-xl font-display font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-light group-hover:text-blue-primary'}`}>
            {item.organization === 'The Hope Line, Inc' ? (
              <a 
                href="https://www.thehopeline.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isActive ? 'text-white hover:text-blue-primary' : 'text-gray-light hover:text-blue-primary'} transition-colors duration-300 inline-flex items-center gap-2`}
              >
                {item.organization}
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              item.organization
            )}
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-medium md:justify-end">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {item.period}
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {item.location}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-medium mb-4 leading-relaxed text-sm sm:text-base">
            {item.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2">
            {item.achievements.map((achievement, achievementIndex) => (
              <li 
                key={achievementIndex}
                className="flex items-start text-xs sm:text-sm text-gray-medium md:justify-end"
              >
                <span className={`inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 mr-2 sm:mr-3 flex-shrink-0 md:order-2 md:ml-3 md:mr-0 transition-colors duration-300 ${isActive ? 'bg-blue-primary' : 'bg-green-primary'}`} />
                <span className="md:order-1">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const openModal = useCallback((index: number) => {
    setModalIndex(index)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback((finalIndex?: number) => {
    setModalOpen(false)
    // Scroll to the card that was being viewed when modal closes
    const indexToScroll = finalIndex !== undefined ? finalIndex : modalIndex
    const card = cardRefs.current[indexToScroll]
    if (card) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100) // Small delay to allow modal close animation
    }
  }, [modalIndex])

  const goToPrev = useCallback(() => {
    setModalIndex((prev) => {
      const newIndex = Math.max(0, prev - 1)
      // Real-time scroll sync
      const card = cardRefs.current[newIndex]
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return newIndex
    })
  }, [])

  const goToNext = useCallback(() => {
    setModalIndex((prev) => {
      const newIndex = Math.min(experienceData.length - 1, prev + 1)
      // Real-time scroll sync
      const card = cardRefs.current[newIndex]
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return newIndex
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2
      let closestIndex = 0
      let closestDistance = Infinity

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const cardCenter = rect.top + rect.height / 2
          const distance = Math.abs(viewportCenter - cardCenter)
          
          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        }
      })

      setActiveIndex(closestIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 relative">
      
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6 header-primary"
          >
            Experience
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed"
          >
            Leveraging psychology and technology to drive meaningful change in mental health.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-primary via-green-primary to-purple-electric" />

          {/* Progress indicator line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-primary to-blue-primary origin-top"
            style={{ 
              height: `${((activeIndex + 1) / experienceData.length) * 100}%`
            }}
            initial={{ height: 0 }}
            animate={{ height: `${((activeIndex + 1) / experienceData.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          <div className="space-y-2">
            {experienceData.map((item, index) => (
              <ExperienceCard 
                key={index} 
                item={item} 
                index={index}
                isActive={activeIndex === index}
                innerRef={(el: HTMLDivElement | null) => { cardRefs.current[index] = el }}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          
          {/* Modal */}
          <ExperienceModal
            item={experienceData[modalIndex]}
            index={modalIndex}
            totalItems={experienceData.length}
            isOpen={modalOpen}
            onClose={closeModal}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        </div>
      </Container>
    </section>
  )
}
