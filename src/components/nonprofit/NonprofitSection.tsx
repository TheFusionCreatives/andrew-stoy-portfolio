'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Heart, Users, DollarSign, Calendar, Award } from 'lucide-react'

const nonprofitData = [
  {
    title: 'Co-Founder & President',
    organization: 'Love is a Habit, Corp (501(c)3)',
    location: 'Maryland, USA',
    period: 'August 2021 – January 2024',
    description: 'Co-founded and helped scale a registered 501(c)3 nonprofit focused on youth mentorship, service, and personal development.',
    achievements: [
      'Led public relations, outreach strategy, and community engagement initiatives across multiple regions',
      'Raised $33,000 in scholarships supporting youth educational opportunities in first five months',
      'Coordinated volunteers, service projects, and partnerships with community organizations',
      'Developed messaging, systems, and workflows for sustainable nonprofit operations'
    ],
    impact: [
      'Youth mentorship programs',
      'Educational scholarships',
      'Community service projects',
      'Personal development workshops'
    ]
  }
]

const volunteerData = [
  {
    title: 'Hurricane Relief Volunteer',
    organization: 'Samaritan\'s Purse',
    location: 'Boone, NC',
    period: '2024',
    description: 'Provided disaster relief support following hurricane damage.'
  },
  {
    title: 'Student Government Association President',
    organization: 'Covenant Life High School',
    location: 'Maryland, USA',
    period: '2020',
    description: 'Led student government and organized community events, food drives, and clothing drives.'
  },
  {
    title: 'Student Government Association Member',
    organization: 'Ohio Wesleyan University & Covenant Life High School',
    location: 'Multiple Locations',
    period: '2017 - 2021',
    description: 'Helped organize community events as well as food and clothing drives.'
  },
  {
    title: 'International Service Trips',
    organization: 'Various Organizations',
    location: 'India, Thailand, Puerto Rico, Dominican Republic, Peru',
    period: '2018 - 2022',
    description: 'Participated in international service and cultural exchange programs.'
  },
  {
    title: 'Domestic Service Trips',
    organization: 'Various Organizations',
    location: 'New York City, Washington, D.C.',
    period: '2018 - 2021',
    description: 'Engaged in domestic service initiatives and community development projects.'
  }
]

export default function NonprofitSection() {
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
    <section id="nonprofit" className="py-20 relative">
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
            Nonprofit & Community Impact
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed"
          >
            Dedicated to creating positive change through youth mentorship, service, and community engagement.
          </motion.p>
        </motion.div>

        {/* Main nonprofit experience */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {nonprofitData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s hover:border-blue-primary/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center text-blue-primary">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light group-hover:text-blue-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-medium">{item.organization}</p>
                  </div>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 text-xs sm:text-sm text-gray-medium">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {item.period}
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  $33,000+ raised
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-medium mb-6 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-center text-xs sm:text-sm text-gray-medium">
                      <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-primary mr-2 sm:mr-3 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact areas */}
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3">Impact Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.impact.map((impact, impactIndex) => (
                    <span 
                      key={impactIndex}
                      className="px-2 sm:px-3 py-1 text-xs rounded-full border border-green-primary/30 bg-green-primary/10 text-green-primary"
                    >
                      {impact}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Volunteer experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-display font-bold text-center mb-8 header-primary"
          >
            Volunteer & Service Experience
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
          >
            {volunteerData.map((volunteer, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/30 backdrop-blur-s hover:border-purple-electric/30 transition-all duration-300 group"
              >
                <div className="flex items-center text-purple-electric mb-4">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <h4 className="font-semibold text-gray-light group-hover:text-purple-electric transition-colors text-sm sm:text-base">
                    {volunteer.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-medium mb-2">{volunteer.organization}</p>
                <p className="text-xs sm:text-sm text-gray-medium mb-2">{volunteer.location}</p>
                <p className="text-xs text-gray-medium mb-2">{volunteer.period}</p>
                <p className="text-xs sm:text-sm text-gray-medium">{volunteer.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
