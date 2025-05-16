import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-200 via-white to-red-100">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
