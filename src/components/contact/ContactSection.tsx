'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Mail, MapPin, Send, Linkedin, Github, Heart } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andrewjstoy@gmail.com',
      href: 'mailto:andrewjstoy@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maryland, USA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/drew-s-/'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/TheFusionCreatives'
    },
    {
      icon: Heart,
      label: 'LIAH',
      href: 'https://loveisahabit.org'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)
      
      // Use standard form submission for Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/x-www-form-urlencoded' }
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-dark-surface/30" />
      
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
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Let's collaborate on innovative solutions at the intersection of psychology and technology.
          </motion.p>

          {/* Current Availability - Under Header */}
          <motion.div 
            variants={itemVariants} 
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {/* Status indicator */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-primary/10 border border-green-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary"></span>
                </span>
                <span className="text-sm font-medium text-green-primary">Available for</span>
              </div>
              
              {/* Opportunity tags */}
              <span className="px-4 py-2 text-sm text-gray-light rounded-full border border-dark-border bg-dark-surface/30 hover:border-blue-primary/50 hover:bg-blue-primary/5 transition-all duration-300 cursor-default">
                Digital Mental Health
              </span>
              <span className="px-4 py-2 text-sm text-gray-light rounded-full border border-dark-border bg-dark-surface/30 hover:border-purple-electric/50 hover:bg-purple-electric/5 transition-all duration-300 cursor-default">
                Crisis Systems
              </span>
              <span className="px-4 py-2 text-sm text-gray-light rounded-full border border-dark-border bg-dark-surface/30 hover:border-coral-pop/50 hover:bg-coral-pop/5 transition-all duration-300 cursor-default">
                Speaking Engagements
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s">
              <h3 className="text-2xl font-display font-bold text-gray-light mb-6">
                Send a Message
              </h3>

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg/50 text-gray-light placeholder-gray-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg/50 text-gray-light placeholder-gray-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-light mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg/50 text-gray-light placeholder-gray-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all duration-300"
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-dark-border bg-dark-bg/50 text-gray-light placeholder-gray-medium focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or collaboration idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-primary to-green-primary text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-primary/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-primary/10 border border-green-primary/30 text-green-primary text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s">
              <h3 className="text-2xl font-display font-bold text-gray-light mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center p-4 rounded-lg border border-dark-border hover:border-blue-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-primary/20 to-green-primary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-blue-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-medium mb-1">{item.label}</div>
                      <div className="text-gray-light group-hover:text-blue-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s">
              <h3 className="text-2xl font-display font-bold text-gray-light mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg border border-dark-border hover:border-blue-primary/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${
                      social.label === 'LIAH' 
                        ? 'bg-gradient-to-br from-coral-pop/20 to-pink-500/20' 
                        : 'bg-gradient-to-br from-purple-electric/20 to-coral-pop/20'
                    }`}>
                      <social.icon className={`w-6 h-6 ${
                        social.label === 'LIAH' ? 'text-coral-pop' : 'text-purple-electric'
                      }`} />
                    </div>
                    <span className={`text-sm group-hover:transition-colors ${
                      social.label === 'LIAH' 
                        ? 'text-gray-medium group-hover:text-coral-pop' 
                        : 'text-gray-medium group-hover:text-purple-electric'
                    }`}>
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
