'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/ui/Container'
import { GraduationCap, Award, BookOpen, Calendar, MapPin, X, Library, ChevronLeft, ChevronRight } from 'lucide-react'

const courseworkData = {
  institutions: [
    { name: 'Ohio Wesleyan University', period: '2020-2021' },
    { name: 'University of Maryland Global Campus', period: '2021-2025' },
    { name: 'ACE/NCCRS Certified Undergraduate College Credits', period: '2021-2026' }
  ],
  categories: [
    {
      title: 'PSYCHOLOGY',
      color: 'blue',
      courses: [
        { name: 'Lifespan Developmental Psychology (PSYC 107)', status: 'in-progress', desc: 'Study of human development across the lifespan, including physical, cognitive, and socioemotional changes.' },
        { name: 'Psychology of Personality (PSYC 310)', status: 'in-progress', desc: 'Examination of major personality theories, individual differences, and psychological factors shaping identity.' },
        { name: 'Psychology of Motivation (PSYC 315)', status: 'in-progress', desc: 'Exploration of processes that initiate, sustain, and regulate goal-directed behavior.' },
        { name: 'Advanced Abnormal Psychology (PSYC 306)', status: 'in-progress', desc: 'In-depth study of psychological disorders, diagnosis, etiology, and evidence-based treatment.' },
        { name: 'Industrial/Organizational Psychology (PSYC 301)', status: 'completed', desc: 'Study of workplace behavior, motivation, leadership, and employee performance.' },
        { name: 'Research Methods in Psychology (PSYC 300)', status: 'completed', desc: 'Designing studies, analyzing data, and applying scientific methods to psychological research.' },
        { name: 'Psychology of Gender (PSYC 338)', status: 'completed', desc: 'Exploration of gender identity, social roles, and psychological research on gender differences.' },
        { name: 'Introduction to Psychology (PSYC 100)', status: 'completed', desc: 'Overview of core psychological concepts including cognition, behavior, and mental processes.' }
      ]
    },
    {
      title: 'DATA & ANALYTICS',
      color: 'green',
      courses: [
        { name: 'Statistics (STAT 200)', status: 'completed', desc: 'Statistical analysis, probability, and interpretation of quantitative data.' },
        { name: 'Intelligence & Data Analytics (IFSM 330)', status: 'completed', desc: 'Using data analytics tools to support business intelligence and decision-making.' },
        { name: 'Information Systems (IFSM 300)', status: 'completed', desc: 'Role of technology systems in business operations and organizational strategy.' },
        { name: 'Finance (FINC 330)', status: 'completed', desc: 'Financial analysis, budgeting, and evaluation of investments and financial performance.' },
        { name: 'Microeconomics (ECON 203)', status: 'completed', desc: 'Economic behavior of individuals and firms, supply, demand, and market structures.' },
        { name: 'Macroeconomics (ECON 201)', status: 'completed', desc: 'National and global economic systems, inflation, unemployment, and fiscal policy.' },
        { name: 'Principles of Accounting I & II (ACCT 220 & 221)', status: 'completed', desc: 'Financial accounting fundamentals, financial statements, reporting, and analysis.' },
        { name: 'Intermediate Accounting (ACCT 310)', status: 'completed', desc: 'Advanced financial reporting, accounting standards, and complex transactions.' }
      ]
    },
    {
      title: 'MARKETING & CONSUMER',
      color: 'purple',
      courses: [
        { name: 'Consumer Behavior (MRKT 410)', status: 'completed', desc: 'Analysis of how psychological, social, and cultural factors influence purchasing decisions.' },
        { name: 'Managing Customer Relationships (MRKT 394)', status: 'completed', desc: 'Strategies for customer retention, CRM systems, and building long-term relationships.' },
        { name: 'Email Marketing (MRKT 356)', status: 'completed', desc: 'Planning and executing targeted email campaigns using analytics and segmentation.' },
        { name: 'Nonprofit Marketing (MRKT 314)', status: 'completed', desc: 'Marketing strategies for nonprofits, including fundraising and mission-driven messaging.' },
        { name: 'Social Media Marketing (MRKT 458)', status: 'completed', desc: 'Developing digital marketing strategies using social platforms and engagement analytics.' },
        { name: 'Marketing Principles (MRKT 310)', status: 'completed', desc: 'Fundamentals of marketing including market research, branding, and strategy development.' }
      ]
    },
    {
      title: 'LEADERSHIP & MANAGEMENT',
      color: 'coral',
      courses: [
        { name: 'Foundations of Leadership (BMGT 302)', status: 'completed', desc: 'Leadership theories, communication strategies, and decision-making in organizations.' },
        { name: 'Business Ethics (BMGT 496)', status: 'completed', desc: 'Ethical decision-making, corporate responsibility, and ethical frameworks in business.' },
        { name: 'Management & Organizational Theory (BMGT 364)', status: 'completed', desc: 'Examination of management models, organizational structures, and workplace effectiveness.' },
        { name: 'Business Law (BMGT 380)', status: 'completed', desc: 'Legal principles affecting businesses including contracts, liability, and compliance.' },
        { name: 'Strategic Management (BMGT 495)', status: 'completed', desc: 'Developing long-term business strategies using competitive and organizational analysis.' },
        { name: 'Organizational Leadership (BMGT 365)', status: 'completed', desc: 'Leadership approaches focused on change management, influence, and organizational growth.' },
        { name: 'Human Resource Management (HMRN 300)', status: 'completed', desc: 'Workforce planning, talent management, and HR policies in organizations.' },
        { name: 'Developing Effective Teams (BMGT Elective)', status: 'completed', desc: 'Building high-performing teams through collaboration, communication, and group dynamics.' },
        { name: 'Managing Conflicts (BMGT Elective)', status: 'completed', desc: 'Conflict resolution strategies and negotiation techniques within professional environments.' }
      ]
    }
  ]
}

const educationData = [
  {
    degree: 'Bachelor of Science in Business Administration',
    institution: 'University of Maryland, Global Campus',
    location: 'Maryland, USA',
    period: '2021 - 2025',
    minor: 'Minor in Marketing',
    graduation: 'Graduated May 30th, 2025 - Certified',
    diplomaLink: '/assets/Bachelors-of-Science-in-Business-Admin-Diploma.pdf',
    diplomaTitle: 'Bachelor of Science Diploma',
    achievements: [
      'Leadership and Ethics Undergraduate Certificate',
      'Decision Support for Business Undergraduate Certificate',
      'Accounting Foundations Undergraduate Certificate'
    ],
    coursework: [
      'Psychology of Personality',
      'Research Methods in Psychology',
      'Industrial/Organizational Psychology',
      'Psychology of Gender',
      'Intelligence & Data Analytics',
      'Consumer Behavior',
      'Social Media Marketing',
      'Strategic Management'
    ]
  },
  {
    degree: 'High School Diploma',
    institution: 'Covenant Life High School',
    location: 'Maryland, USA',
    period: '2016 - 2020',
    graduation: 'Graduated June, 2020 - Valedictorian',
    achievements: [
      'Varsity Soccer Captain - Conference Championship Team',
      'Varsity Basketball Captain',
      'Student Government Association President - 2020',
      'DECA Member'
    ],
    coursework: [
      'Advanced Placement Courses',
      'Leadership Development',
      'Community Service Organization'
    ]
  },
  {
    degree: 'Undergraduate Studies',
    institution: 'Ohio Wesleyan University',
    location: 'Delaware, OH',
    period: '2020 - 2021',
    achievements: [
      'Student Representative Academic Status Committee',
      'DECA Member',
      'Student Government Association'
    ],
    coursework: [
      'Liberal Arts Curriculum',
      'Academic Committee Work'
    ]
  }
]

const certificationsData = [
  {
    name: 'Excel Basics for Data Analysis',
    issuer: 'IBM, Coursera',
    date: '2023',
    credential: 'Certified',
    link: '/assets/IBM-Data-Analysis-Basics-Certificate.pdf',
    title: 'IBM Data Analysis Certificate'
  },
  {
    name: 'Programming (Multiple Certified Badges)',
    issuer: 'CodeCademy',
    date: '2024',
    credential: 'Certified',
    link: 'https://www.codecademy.com/profiles/andrewstoy',
    title: 'CodeCademy Profile',
    isExternal: true
  },
  {
    name: 'Foundations of Business Intelligence',
    issuer: 'Google, Coursera',
    date: '2024',
    credential: 'Certified',
    link: '/assets/Foundations-in-Business-Intelligence.pdf',
    title: 'Business Intelligence Certificate'
  },
  {
    name: 'Leadership and Ethics',
    issuer: 'University of Maryland, GC',
    date: '2024',
    credential: 'Certified',
    link: '/assets/Leadership-and-Ethics-Certificate.pdf',
    title: 'Leadership and Ethics Certificate'
  },
  {
    name: 'Addiction Treatment: Clinical Skills',
    issuer: 'Yale University, Coursera',
    date: '2024',
    credential: 'Certified',
    link: '/assets/Yale-Addiction-Treatment-Certificate.pdf',
    title: 'Yale Addiction Treatment Certificate'
  },
  {
    name: 'Understanding LGBTQ+ Sexuality and Gender Identity',
    issuer: 'Colorado University, Coursera',
    date: '2024',
    credential: 'Certified',
    link: '/assets/University-of-Colorado-LGBTQ+Identities-Certificate.pdf',
    title: 'LGBTQ+ Identities Certificate'
  },
  {
    name: 'Decision Support for Business',
    issuer: 'University of Maryland, GC',
    date: '2024',
    credential: 'Certified',
    link: '/assets/Decision-Support-for-Business-Certificate.pdf',
    title: 'Decision Support Certificate'
  },
  {
    name: 'Accounting Foundations',
    issuer: 'University of Maryland, GC',
    date: '2023',
    credential: 'Certified',
    link: '/assets/accounting-foundations-certificate.pdf',
    title: 'Accounting Foundations Certificate'
  }
]

export default function EducationSection() {
  const [courseworkModalOpen, setCourseworkModalOpen] = useState(false)
  const [pdfModalOpen, setPdfModalOpen] = useState(false)
  const [pdfModalIndex, setPdfModalIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)

  // All PDF items for navigation (including external CodeCademy)
  const allPdfItems = [
    { name: 'Bachelor of Science Diploma', src: '/assets/Bachelors-of-Science-in-Business-Admin-Diploma.pdf', type: 'pdf' },
    { name: 'IBM Data Analysis Certificate', src: '/assets/IBM-Data-Analysis-Basics-Certificate.pdf', type: 'pdf' },
    { name: 'CodeCademy Profile', src: 'https://www.codecademy.com/profiles/andrewstoy', type: 'external' },
    { name: 'Business Intelligence Certificate', src: '/assets/Foundations-in-Business-Intelligence.pdf', type: 'pdf' },
    { name: 'Leadership and Ethics Certificate', src: '/assets/Leadership-and-Ethics-Certificate.pdf', type: 'pdf' },
    { name: 'Yale Addiction Treatment Certificate', src: '/assets/Yale-Addiction-Treatment-Certificate.pdf', type: 'pdf' },
    { name: 'LGBTQ+ Identities Certificate', src: '/assets/University-of-Colorado-LGBTQ+Identities-Certificate.pdf', type: 'pdf' },
    { name: 'Decision Support Certificate', src: '/assets/Decision-Support-for-Business-Certificate.pdf', type: 'pdf' },
    { name: 'Accounting Foundations Certificate', src: '/assets/accounting-foundations-certificate.pdf', type: 'pdf' },
  ]

  const openPdfModal = (index: number) => {
    setPdfModalIndex(index)
    setPdfModalOpen(true)
  }

  const closePdfModal = () => {
    setPdfModalOpen(false)
  }

  const goToPrev = () => {
    setPdfModalIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setPdfModalIndex((prev) => Math.min(allPdfItems.length - 1, prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    if (!pdfModalOpen) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePdfModal()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [pdfModalOpen])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="py-20 relative">
      
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
            Education
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed"
          >
            Academic foundation in psychology with specialized training in digital mental health interventions.
          </motion.p>
        </motion.div>

        {/* Education cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s hover:border-blue-primary/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center text-blue-primary">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light group-hover:text-blue-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-medium">{item.institution}</p>
                  </div>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 text-xs sm:text-sm text-gray-medium">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {item.period}
                </div>
                {item.minor && (
                  <div className="flex items-center">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {item.minor}
                  </div>
                )}
                {item.graduation && item.graduation.includes('Valedictorian') && (
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 text-xs rounded-full border border-green-primary/30 bg-green-primary/10 text-green-primary font-medium">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Valedictorian
                  </div>
                )}
              </div>

              {/* Graduation */}
              {item.graduation && (
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-2">Graduation:</h4>
                  <p className="text-gray-medium text-xs sm:text-sm italic">{item.graduation}</p>
                  {item.diplomaLink && (
                    <button
                      onClick={() => openPdfModal(0)}
                      className="inline-flex items-center mt-2 text-xs sm:text-sm text-blue-primary hover:text-blue-primary/80 transition-colors"
                    >
                      <span>View Diploma</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                      </svg>
                    </button>
                  )}
                </div>
              )}

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3">Achievements:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-center text-xs sm:text-sm text-gray-medium">
                      <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-primary mr-2 sm:mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course, courseIndex) => (
                    <span 
                      key={courseIndex}
                      className="px-2 sm:px-3 py-1 text-xs rounded-full border border-blue-primary/30 bg-blue-primary/10 text-blue-primary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Coursework Gallery Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-xl border border-purple-electric/30 bg-dark-surface/50 backdrop-blur-s hover:border-purple-electric/50 transition-all duration-300 group cursor-pointer"
            onClick={() => setCourseworkModalOpen(true)}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-electric/20 to-blue-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Library className="w-8 h-8 text-purple-electric" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light group-hover:text-purple-electric transition-colors mb-2">
                Academic Coursework
              </h3>
              <p className="text-sm text-gray-medium mb-4">
                Complete course catalog from all institutions
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {courseworkData.categories.slice(0, 3).map((cat, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-purple-electric/30 bg-purple-electric/10 text-purple-electric"
                  >
                    {cat.title}
                  </span>
                ))}
                <span className="px-3 py-1 text-xs rounded-full border border-dark-border bg-dark-surface/50 text-gray-medium">
                  +{courseworkData.categories.length - 3} more
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          id="certifications"
          className="scroll-mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-display font-bold text-center mb-8 header-primary"
          >
            Professional Certifications
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {certificationsData.map((cert, index) => (
              cert.isExternal ? (
                <button
                  key={index}
                  onClick={() => openPdfModal(2)} // CodeCademy is index 2
                  className="block w-full text-left p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/30 backdrop-blur-s hover:border-green-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center text-green-primary mb-4">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <h4 className="font-semibold text-gray-light group-hover:text-green-primary transition-colors text-sm sm:text-base">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-blue-primary hover:text-blue-primary/80 transition-colors">
                    <span className="text-xs sm:text-sm font-medium">View Profile</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                    </svg>
                  </div>
                </button>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    // Map cert to index in allPdfItems
                    const pdfIndex = allPdfItems.findIndex(item => item.src === cert.link)
                    openPdfModal(pdfIndex >= 0 ? pdfIndex : 0)
                  }}
                  className="block w-full text-left p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/30 backdrop-blur-s hover:border-green-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center text-green-primary mb-4">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <h4 className="font-semibold text-gray-light group-hover:text-green-primary transition-colors text-sm sm:text-base">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-blue-primary hover:text-blue-primary/80 transition-colors">
                    <span className="text-xs sm:text-sm font-medium">View Certification</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                    </svg>
                  </div>
                </button>
              )
            ))}
          </motion.div>
        </motion.div>

        {/* PDF Viewer Modal */}
        <AnimatePresence>
          {pdfModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={closePdfModal}
            >
              {/* Backdrop - transparent with light fog */}
              <div className="absolute inset-0 bg-dark-bg/40 backdrop-blur-sm" />
              
              {/* Modal Container with arrows */}
              <div className="relative flex items-center" onClick={(e) => e.stopPropagation()}>
                {/* Left Arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  disabled={pdfModalIndex === 0}
                  className="flex-shrink-0 p-3 rounded-full bg-dark-surface/80 border border-blue-primary/30 hover:bg-blue-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg mr-2 sm:mr-4"
                  aria-label="Previous document"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-light" />
                </button>
                
                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-[90vw] max-h-[90vh] rounded-2xl border border-blue-primary/30 bg-dark-surface/95 backdrop-blur-xl shadow-2xl shadow-blue-primary/20 overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-dark-border">
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light">
                        {allPdfItems[pdfModalIndex].name}
                      </h3>
                      <p className="text-sm text-gray-medium">
                        {pdfModalIndex + 1} / {allPdfItems.length}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {allPdfItems[pdfModalIndex].type === 'pdf' && (
                        <a
                          href={allPdfItems[pdfModalIndex].src}
                          download
                          className="p-2 rounded-full bg-dark-border/50 hover:bg-green-primary/20 transition-colors duration-200"
                          aria-label="Download PDF"
                          title="Download PDF"
                        >
                          <svg className="w-5 h-5 text-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      )}
                      <button
                        onClick={closePdfModal}
                        className="p-2 rounded-full bg-dark-border/50 hover:bg-blue-primary/20 transition-colors duration-200"
                        aria-label="Close modal"
                      >
                        <X className="w-5 h-5 text-gray-light" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="h-[70vh] sm:h-[75vh]">
                    {allPdfItems[pdfModalIndex].type === 'external' ? (
                      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                        <p className="text-gray-medium mb-4">This will open CodeCademy in a new tab</p>
                        <a
                          href={allPdfItems[pdfModalIndex].src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-primary/20 text-blue-primary hover:bg-blue-primary/30 transition-colors"
                        >
                          <span>View Profile</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <iframe
                        src={allPdfItems[pdfModalIndex].src}
                        className="w-full h-full"
                        title={allPdfItems[pdfModalIndex].name}
                      />
                    )}
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
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  disabled={pdfModalIndex === allPdfItems.length - 1}
                  className="flex-shrink-0 p-3 rounded-full bg-dark-surface/80 border border-blue-primary/30 hover:bg-blue-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 shadow-lg ml-2 sm:ml-4"
                  aria-label="Next document"
                >
                  <ChevronRight className="w-6 h-6 text-gray-light" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coursework Modal */}
        <AnimatePresence>
          {courseworkModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setCourseworkModalOpen(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm" />
              
              {/* Modal Container */}
              <div className="relative flex items-center" onClick={(e) => e.stopPropagation()}>
                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-purple-electric/30 bg-dark-surface/95 backdrop-blur-xl shadow-2xl shadow-purple-electric/20"
                >
                  {/* Close Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); setCourseworkModalOpen(false); }}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-border/50 hover:bg-purple-electric/20 transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-gray-light" />
                  </button>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <Library className="w-6 h-6 text-purple-electric" />
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-gray-light">Academic Coursework</h2>
                    </div>
                    
                    {/* Institutions */}
                    <div className="flex flex-wrap gap-3 mb-6 text-xs text-gray-medium">
                      {courseworkData.institutions.map((inst, i) => (
                        <div key={i} className="px-3 py-1 rounded-full bg-dark-surface/50 border border-dark-border">
                          <span className="font-medium text-gray-light">{inst.name}</span>
                          <span className="ml-2 text-purple-electric">{inst.period}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 mb-6 border-b border-dark-border pb-4">
                      {courseworkData.categories.map((cat, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(index)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                            activeCategory === index
                              ? 'bg-purple-electric/20 text-purple-electric border border-purple-electric/50'
                              : 'bg-dark-surface/50 text-gray-medium border border-dark-border hover:border-purple-electric/30'
                          }`}
                        >
                          {cat.title}
                        </button>
                      ))}
                    </div>
                    
                    {/* Course List */}
                    <div className="space-y-3">
                      {courseworkData.categories[activeCategory].courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="p-4 rounded-lg border border-dark-border hover:border-purple-electric/30 bg-dark-surface/30 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-light text-sm sm:text-base">{course.name}</h4>
                            {course.status === 'in-progress' && (
                              <span className="px-2 py-1 text-xs rounded-full bg-blue-primary/10 text-blue-primary border border-blue-primary/30">
                                In Progress
                              </span>
                            )}
                            {course.status === 'completed' && (
                              <span className="px-2 py-1 text-xs rounded-full bg-green-primary/10 text-green-primary border border-green-primary/30">
                                Completed
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-medium">{course.desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-dark-border/50 text-center">
                      <p className="text-xs text-gray-medium">
                        Use category tabs to explore different subject areas
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
