import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import StarField from './components/StarField'
import Hero from './pages/Hero'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Gallery from './pages/Gallery'
import Resume from './pages/Resume'
import Testimonials from './pages/Testimonials'
import UpcomingShows from './pages/UpcomingShows'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <StarField />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Portfolio />
            <Gallery />
            <Resume />
            <Testimonials />
            <UpcomingShows />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  )
}

export default App
