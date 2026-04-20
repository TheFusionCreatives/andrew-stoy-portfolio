'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { ExternalLink, Users, TrendingUp, Brain, Globe } from 'lucide-react'

const projectsData = [
  {
    title: 'Clinical CRM Ecosystem',
    description: 'Engineered an end-to-end clinical CRM ecosystem automating multi-channel touchpoints (Call, SMS, Email, Phone Trees) to streamline the patient journey from intake to therapeutic intervention.',
    role: 'Client Experience & Technology Integration Coordinator',
    organization: 'Kentlands Psychotherapy',
    period: '2026 – Present',
    impact: 'Improved patient accessibility and reduced onboarding friction',
    technologies: ['CRM Systems', 'HIPAA Compliance', 'Automation', 'Clinical Workflows', 'Data Integration'],
    achievements: [
      'Bridged technical systems with clinical decision-making',
      'Architected complex data integrations for clinician tracking',
      'Redesigned digital pipeline using behavioral design principles',
      'Implemented automated patient communication systems'
    ],
    metrics: {
      accessibility: 'Improved',
      onboarding: 'Streamlined',
      communication: 'Automated',
      compliance: 'HIPAA Verified'
    }
  },
  {
    title: 'Digital Crisis Intervention Platform',
    description: 'Evaluated acute psychological crises within digital-first environments, identifying behavioral markers of suicidal ideation, depression, and trauma in youth across 110+ countries.',
    role: 'Crisis Hotline Counselor',
    organization: 'The Hope Line, Inc',
    period: 'July 2022 – September 2024',
    impact: 'Real-time risk assessment and evidence-informed crisis response',
    technologies: ['Digital Assessment', 'Risk Analysis', 'Crisis Protocols', 'Documentation Systems', 'Behavioral Analysis'],
    achievements: [
      'Applied evidence-informed clinical strategies for online intervention',
      'Facilitated cognitive-behavioral coping mechanisms development',
      'Systematically analyzed digital behavioral markers for risk assessment',
      'Documented qualitative data for care continuity'
    ],
    metrics: {
      countries: '110+',
      accuracy: 'High',
      response: 'Real-time',
      documentation: 'Comprehensive'
    }
  },
  {
    title: 'Nonprofit Operations System',
    description: 'Co-founded and scaled a registered 501(c)3 nonprofit, developing messaging, systems, and workflows to support sustainable youth mentorship operations.',
    role: 'Co-Founder & President',
    organization: 'Love is a Habit, Corp',
    period: 'June 2022 – Present',
    impact: 'Raised $33,000 in scholarships and established sustainable nonprofit operations',
    technologies: ['Nonprofit Management', 'Fundraising Systems', 'Volunteer Coordination', 'Community Outreach', 'Strategic Planning'],
    achievements: [
      'Led public relations and outreach strategy across multiple regions',
      'Raised $33,000 in scholarships in first five months',
      'Coordinated volunteers and service projects',
      'Developed sustainable nonprofit workflows and systems'
    ],
    metrics: {
      scholarships: '$33,000+',
      volunteers: 'Multiple',
      projects: 'Numerous',
      sustainability: 'Established'
    }
  }
]

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  const getIcon = (index: number) => {
    const icons = [Users, TrendingUp, Brain]
    return icons[index % icons.length]
  }

  const Icon = getIcon(index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-6 sm:p-8 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s hover:border-blue-primary/30 transition-all duration-300 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center text-blue-primary">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-primary/20 to-green-primary/20 flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-light group-hover:text-blue-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-medium">{project.role}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-medium leading-relaxed mb-6 flex-grow text-sm sm:text-base">
          {project.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 text-xs sm:text-sm text-gray-medium">
          <div>
            <span className="text-gray-light">Organization:</span> {project.organization}
          </div>
          <div>
            <span className="text-gray-light">Period:</span> {project.period}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6 p-3 sm:p-4 rounded-lg bg-gradient-to-r from-blue-primary/10 to-green-primary/10 border border-blue-primary/20">
          <p className="text-xs sm:text-sm font-medium text-blue-primary mb-2">Key Impact:</p>
          <p className="text-xs sm:text-sm text-gray-light">{project.impact}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-2 sm:p-3 rounded-lg bg-dark-bg/50">
              <div className="text-lg sm:text-xl font-bold text-green-primary">{value}</div>
              <div className="text-xs text-gray-medium capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 sm:px-3 py-1 text-xs rounded-full border border-purple-electric/30 bg-purple-electric/10 text-purple-electric"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="flex-grow">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-light mb-3 uppercase tracking-wider">Key Achievements</h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, achievementIndex) => (
              <li 
                key={achievementIndex}
                className="flex items-start text-xs sm:text-sm text-gray-medium"
              >
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-primary mt-1.5 mr-2 sm:mr-3 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 relative">
      
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
            Projects & Case Studies
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed"
          >
            Real-world applications of psychology and technology integration creating measurable impact in mental health.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-1 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Global impact summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12 sm:mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-xl border border-green-primary/30 bg-gradient-to-br from-green-primary/10 to-blue-primary/10 backdrop-blur-s"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-primary mr-3" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-light">Global Impact</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-primary mb-2">$33K+</div>
                <div className="text-xs sm:text-sm text-gray-medium">Scholarships Raised</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-primary mb-2">110+</div>
                <div className="text-xs sm:text-sm text-gray-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-coral-pop mb-2">501c3</div>
                <div className="text-xs sm:text-sm text-gray-medium">Nonprofit Founded</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
