'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Brain, Heart, Lightbulb, Users } from 'lucide-react'

const aboutData = [
  {
    icon: Brain,
    title: 'Psychology Expertise',
    description: 'Deep understanding of behavioral science and cognitive psychology with practical applications in digital environments.'
  },
  {
    icon: Heart,
    title: 'Mental Health Focus',
    description: 'Direct experience supporting crisis intervention efforts across 110+ countries with client-centered care approaches.'
  },
  {
    icon: Lightbulb,
    title: 'Technology Integration',
    description: 'Bridging the gap between psychological research and technological innovation to improve mental health outcomes.'
  },
  {
    icon: Users,
    title: 'Global Impact',
    description: 'High-stakes environment experience with diverse populations and cross-cultural mental health challenges.'
  }
]

export default function AboutSection() {
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
    <section id="about" className="py-20 relative">
      
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
            My Approach
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-medium max-w-4xl mx-auto leading-relaxed"
          >
            My work sits at the intersection of psychology and technology, where I apply 
            research methods and data analysis to examine how digital contexts influence 
            cognition, emotion, and behavior. This unique perspective allows me to develop 
            solutions that are both technologically advanced and psychologically sound.
          </motion.p>
        </motion.div>

        {/* Main content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-light mb-4">
              Core Values
            </h3>
            <p className="text-gray-medium leading-relaxed">
              I believe in the power of technology to democratize access to mental health 
              support while maintaining the human-centered approach that makes psychological 
              interventions effective. Every solution I develop is grounded in evidence-based 
              practices and designed with the end-user's wellbeing as the primary focus.
            </p>
            <p className="text-gray-medium leading-relaxed">
              My global experience has taught me the importance of cultural sensitivity 
              and adaptation in mental health interventions, ensuring that solutions are 
              effective across diverse populations and contexts.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-gray-light mb-4">
              Global Impact
            </h3>
            <p className="text-gray-medium leading-relaxed">
              Direct experience supporting crisis intervention efforts across 110+ countries 
              has provided me with unique insights into diverse mental health challenges and 
              cultural contexts. This global perspective informs every aspect of my work.
            </p>
            <p className="text-gray-medium leading-relaxed">
              I'm committed to creating solutions that are culturally sensitive and adaptable, 
              ensuring that mental health support is accessible and effective for all populations 
              regardless of their background or location.
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-surface/50 backdrop-blur-s hover:border-blue-primary/30 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-primary/20 to-green-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-primary" />
              </div>
              <h4 className="text-base sm:text-lg font-display font-semibold text-gray-light mb-3">
                {item.title}
              </h4>
              <p className="text-gray-medium text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
