'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Science in Business Administration',
    institution: 'University of Maryland, Global Campus',
    location: 'Maryland, USA',
    period: '2021 - 2025',
    minor: 'Minor in Marketing',
    graduation: 'Graduated May 30th, 2025 - Certified',
    diplomaLink: 'https://thefusioncreatives.github.io/My-resume/assets/Bachelors-of-Science-in-Business-Admin-Diploma.pdf',
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
    link: 'https://thefusioncreatives.github.io/My-resume/assets/IBM-Data-Analysis-Basics-Certificate.pdf'
  },
  {
    name: 'Programming (Multiple Certified Badges)',
    issuer: 'CodeCademy',
    date: '2024',
    credential: 'Certified',
    link: 'https://www.codecademy.com/profiles/andrewstoy'
  },
  {
    name: 'Foundations of Business Intelligence',
    issuer: 'Google, Coursera',
    date: '2024',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/Foundations-in-Business-Intelligence.pdf'
  },
  {
    name: 'Leadership and Ethics',
    issuer: 'University of Maryland, GC',
    date: '2024',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/Leadership-and-Ethics-Certificate.pdf'
  },
  {
    name: 'Addiction Treatment: Clinical Skills',
    issuer: 'Yale University, Coursera',
    date: '2024',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/Yale-Addiction-Treatment-Certificate.pdf'
  },
  {
    name: 'Understanding LGBTQ+ Sexuality and Gender Identity',
    issuer: 'Colorado University, Coursera',
    date: '2024',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/University-of-Colorado-LGBTQ%2BIdentities-Certificate.pdf'
  },
  {
    name: 'Decision Support for Business',
    issuer: 'University of Maryland, GC',
    date: '2024',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/Decision-Support-for-Business-Certificate.pdf'
  },
  {
    name: 'Accounting Foundations',
    issuer: 'University of Maryland, GC',
    date: '2023',
    credential: 'Certified',
    link: 'https://thefusioncreatives.github.io/My-resume/assets/accounting-foundations-certificate.pdf'
  }
]

export default function EducationSection() {
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
                    <a
                      href={item.diplomaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-2 text-xs sm:text-sm text-blue-primary hover:text-blue-primary/80 transition-colors"
                    >
                      <span>View Diploma</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                      </svg>
                    </a>
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
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/30 backdrop-blur-s hover:border-green-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center text-green-primary mb-4">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <h4 className="font-semibold text-gray-light group-hover:text-green-primary transition-colors text-sm sm:text-base">
                    {cert.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-medium mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center text-xs text-gray-medium mb-3">
                </div>
                <div className="flex items-center text-blue-primary hover:text-blue-primary/80 transition-colors">
                  <span className="text-xs sm:text-sm font-medium">
                    View Certification
                  </span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L6 14" />
                  </svg>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
