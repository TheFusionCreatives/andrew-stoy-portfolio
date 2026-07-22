import Navigation from '@/components/navigation/Navigation'
import HeroSection from '@/components/hero/HeroSection'
import ShowcaseSection from '@/components/showcase/ShowcaseSection'
import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import StorySection from '@/components/story/StorySection'
import EducationSection from '@/components/education/EducationSection'
import NonprofitSection from '@/components/nonprofit/NonprofitSection'
import CareConsoleModule from '@/components/care-console/CareConsoleModule'
import ProjectsSection from '@/components/projects/ProjectsSection'
import ContactSection from '@/components/contact/ContactSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <ExperienceSection />
      <StorySection />
      <EducationSection />
      <NonprofitSection />
      <CareConsoleModule />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
