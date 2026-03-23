import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { DarkModeProvider } from './context/DarkModeContext'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import CustomCursor from './components/CustomCursor/CustomCursor'
import SplashScreen from './components/SplashScreen/SplashScreen'
import CommandPalette from './components/CommandPalette/CommandPalette'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
// BLOGS HIDDEN — uncomment the import + route below to re-enable
// import Blogs from './pages/Blogs/Blogs'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          {/* BLOGS HIDDEN — uncomment to re-enable: <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <SplashScreen />
          <CustomCursor />
          <CommandPalette />
          <AnimatedRoutes />
        </BrowserRouter>
      </DarkModeProvider>
    </HelmetProvider>
  )
}

export default App
