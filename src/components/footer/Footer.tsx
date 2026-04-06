'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/drew-s-/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:andrewjstoy@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Nonprofit', href: '#nonprofit' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-dark-border bg-dark-surface/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
      
      <Container>
        <div className="relative z-10 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-primary mr-2" />
                <h3 className="text-xl font-display font-bold gradient-text">
                  Andrew Stoy
                </h3>
              </div>
              <p className="text-gray-medium text-sm leading-relaxed mb-4">
                Psychology & Technology Integration specialist dedicated to improving mental health outcomes through innovative digital solutions.
              </p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-medium hover:text-blue-primary transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-display font-semibold text-gray-light mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-medium hover:text-blue-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-display font-semibold text-gray-light mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-medium">
                  <span className="text-gray-light">Email:</span> andrewjstoy@gmail.com
                </p>
                <p className="text-gray-medium">
                  <span className="text-gray-light">Location:</span> Washington DC, USA
                </p>
                <p className="text-gray-medium">
                  <span className="text-gray-light">Available:</span> Consulting & Collaborations
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-dark-border"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center text-sm text-gray-medium">
                <span>© 2025 Andrew Stoy. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-coral-pop fill-current" />
                <span>for mental health innovation.</span>
              </div>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center px-4 py-2 text-sm border border-blue-primary text-blue-primary rounded-lg hover:bg-blue-primary hover:text-white transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}
