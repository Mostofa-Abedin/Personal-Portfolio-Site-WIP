import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/Logo_1_removebg.png'
import { useDarkMode } from '../../context/DarkModeContext'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { dark, toggle } = useDarkMode()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo} aria-label="Mostofa Abedin - Home">
          <img
            src={logo}
            alt="Mostofa Abedin logo"
            style={dark ? { filter: 'brightness(0) invert(1) brightness(0.96)' } : undefined}
          />
        </NavLink>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <NavLink to="/about" className={styles.topBtn} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/experience" className={styles.topBtn} onClick={() => setMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/education" className={styles.topBtn} onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to="/projects" className={styles.topBtn} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          {/* BLOGS HIDDEN — uncomment to re-enable */}
          {/* <NavLink to="/blogs" className={styles.topBtn} onClick={() => setMenuOpen(false)}>Blogs</NavLink> */}
          <NavLink to="/contact" className={styles.topBtn} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>

        <div className={styles.rightControls}>
          <button
            className={styles.cmdBtn}
            onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
            aria-label="Open command palette"
            title="Open command palette (Ctrl+K)"
          >
            <kbd>⌘K</kbd>
          </button>

          <button
            className={styles.darkToggle}
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
