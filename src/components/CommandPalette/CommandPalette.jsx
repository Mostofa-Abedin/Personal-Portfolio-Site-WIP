import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faHouse,
  faUser,
  faBriefcase,
  faGraduationCap,
  faCode,
  faNewspaper,
  faEnvelope,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from '../../context/DarkModeContext'
import styles from './CommandPalette.module.css'

const navCommands = [
  { id: 'home',       label: 'Home',       desc: 'Landing page',            icon: faHouse,          path: '/'           },
  { id: 'about',      label: 'About',      desc: 'Who I am',                icon: faUser,           path: '/about'      },
  { id: 'experience', label: 'Experience', desc: 'Work history & skills',   icon: faBriefcase,      path: '/experience' },
  { id: 'education',  label: 'Education',  desc: 'Academic background',     icon: faGraduationCap,  path: '/education'  },
  { id: 'projects',   label: 'Projects',   desc: 'Selected work',           icon: faCode,           path: '/projects'   },
  { id: 'blogs',      label: 'Blogs',      desc: 'Articles & writing',      icon: faNewspaper,      path: '/blogs'      },
  { id: 'contact',    label: 'Contact',    desc: 'Get in touch',            icon: faEnvelope,       path: '/contact'    },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()
  const { dark, toggle } = useDarkMode()

  const allCommands = [
    ...navCommands,
    {
      id: 'theme',
      label: dark ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      desc: 'Toggle colour theme',
      icon: dark ? faSun : faMoon,
      action: toggle,
    },
  ]

  const filtered = query.trim()
    ? allCommands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.desc.toLowerCase().includes(query.toLowerCase())
      )
    : allCommands

  // Global Ctrl+K / Cmd+K toggle + Escape close
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => {
          if (!o) { setQuery(''); setSelected(0) }
          return !o
        })
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    // Also allow opening via custom event (from Navbar button)
    const onOpen = () => { setOpen(true); setQuery(''); setSelected(0) }
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // Reset selected when query changes
  useEffect(() => { setSelected(0) }, [query])

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.children[selected]
    el?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  const execute = (cmd) => {
    setOpen(false)
    setQuery('')
    if (cmd.path) navigate(cmd.path)
    else if (cmd.action) cmd.action()
  }

  const onInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => Math.max(s - 1, 0))
    } else if (e.key === 'Enter') {
      if (filtered[selected]) execute(filtered[selected])
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Palette panel */}
          <motion.div
            className={styles.palette}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -14 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Search row */}
            <div className={styles.searchRow}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
              <input
                ref={inputRef}
                className={styles.input}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Search pages or actions…"
                aria-label="Command search"
                autoComplete="off"
                spellCheck={false}
              />
              <kbd className={styles.escKey} onClick={() => setOpen(false)}>esc</kbd>
            </div>

            {/* Results */}
            <ul className={styles.list} ref={listRef} role="listbox">
              {filtered.length === 0 ? (
                <li className={styles.empty}>No results for &ldquo;{query}&rdquo;</li>
              ) : (
                filtered.map((cmd, i) => (
                  <li
                    key={cmd.id}
                    className={`${styles.item} ${i === selected ? styles.active : ''}`}
                    role="option"
                    aria-selected={i === selected}
                    onMouseEnter={() => setSelected(i)}
                    onClick={() => execute(cmd)}
                  >
                    <span className={styles.itemIcon}>
                      <FontAwesomeIcon icon={cmd.icon} />
                    </span>
                    <span className={styles.itemText}>
                      <span className={styles.itemLabel}>{cmd.label}</span>
                      <span className={styles.itemDesc}>{cmd.desc}</span>
                    </span>
                    {i === selected && (
                      <kbd className={styles.enterHint}>↵</kbd>
                    )}
                  </li>
                ))
              )}
            </ul>

            {/* Footer hints */}
            <div className={styles.footer}>
              <span><kbd>↑↓</kbd> navigate</span>
              <span><kbd>↵</kbd> open</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
