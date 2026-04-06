import Navigation from '@/components/navigation/Navigation'
import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import EducationSection from '@/components/education/EducationSection'
import NonprofitSection from '@/components/nonprofit/NonprofitSection'
import ProjectsSection from '@/components/projects/ProjectsSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <NonprofitSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
