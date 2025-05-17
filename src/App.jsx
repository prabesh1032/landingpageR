import './App.css'
import CompanyLogo from './components/CompanyLogo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProposeSection from './components/ProposeSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-200 via-white to-red-100">
      <Navbar />
      <Hero />
      <CompanyLogo />
      <ProposeSection />
    </main>
  )
}

export default App
