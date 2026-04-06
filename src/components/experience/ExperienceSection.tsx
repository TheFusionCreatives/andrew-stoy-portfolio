'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const experienceData = [
  {
    title: 'Mental Health Practice Operations Assistant',
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

export default function ExperienceSection() {
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
            A journey bridging psychology and technology to create meaningful impact in mental health.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-primary via-green-primary to-purple-electric" />

          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-primary border-4 border-dark-bg shadow-lg shadow-blue-primary/50" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-16 md:ml-0 ${index > 0 ? 'md:-mt-24' : ''}`}>
                  <div className="p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s hover:border-blue-primary/30 hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:shadow-blue-primary/20 transition-all duration-300 group relative">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 md:justify-end md:flex-row-reverse">
                      <div className="flex items-center text-blue-primary">
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="font-medium text-sm sm:text-base">{item.title}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light mb-2">
                      {item.organization}
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
                          <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-primary mt-1.5 mr-2 sm:mr-3 flex-shrink-0 md:order-2 md:ml-3 md:mr-0" />
                          <span className="md:order-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
