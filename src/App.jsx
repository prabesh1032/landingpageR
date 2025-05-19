import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import ProposeSection from './components/ProposeSection'
import ScheduleSection from './components/SeheduleSection'

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
    </main>
  )
}

export default App
