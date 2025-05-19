import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import PricingSection from './components/PricingSection'
import ProposeSection from './components/ProposeSection'
import ScheduleSection from './components/SeheduleSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-100 via-white to-red-50">
      <Navbar />
      <Hero />
      <CompanyLogo />
      <ProposeSection />
      <FeaturesSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsLetter />
      <Footer />
    </main>
  )
}

export default App
