'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Supernova Background */}
      <div className="absolute inset-0 supernova-bg" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/10 via-transparent to-green-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-primary/30 bg-blue-primary/10 backdrop-blur-s">
            <span className="text-sm text-blue-primary font-medium">
              Psychology & Technology Integration
            </span>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6"
        >
          <span className="header-primary text-shadow-glow">
            Andrew Stoy
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-medium mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Psychology-focused professional integrating behavioral science and technology to improve mental health outcomes.
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-light mb-8 max-w-3xl mx-auto"
        >
          Direct experience supporting crisis intervention efforts for individuals across 110+ countries, with a strong commitment to client-centered care in high-stakes environments.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-12 text-gray-medium"
        >
          <span className="flex items-center">
            Washington DC, USA
          </span>
          <span className="hidden sm:inline">•</span>
          <a href="mailto:Andrewjstoy@gmail.com" className="hover:text-blue-primary transition-colors">
            Andrewjstoy@gmail.com
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+19189449222" className="hover:text-blue-primary transition-colors">
            +1(918) 944-9222
          </a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about')
              aboutSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-green-primary text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 focus:ring-offset-dark-bg text-sm sm:text-base"
          >
            <span className="mr-2">View My Work</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          {/* Download Resume Button - Hidden for now */}
          {/* <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-blue-primary text-blue-primary font-medium rounded-lg transition-all duration-300 hover:bg-blue-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 focus:ring-offset-dark-bg text-sm sm:text-base">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </button> */}
        </motion.div>

              </motion.div>
    </section>
  )
}
