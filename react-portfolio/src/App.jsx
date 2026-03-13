import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { DarkModeProvider } from './context/DarkModeContext'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Blogs from './pages/Blogs/Blogs'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HelmetProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </DarkModeProvider>
    </HelmetProvider>
  )
}

export default App
