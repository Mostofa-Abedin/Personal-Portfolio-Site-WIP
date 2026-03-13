import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/Logo_1_removebg.png'
import styles from './SplashScreen.module.css'

const DURATION = 2300 // ms before screen slides away

export default function SplashScreen() {
  const [visible, setVisible] = useState(
    () => !sessionStorage.getItem('splashShown')
  )

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('splashShown', '1')
    }, DURATION)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Mostofa Abedin"
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Loading bar */}
          <motion.div
            className={styles.barTrack}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.div
              className={styles.bar}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.65, ease: 'easeInOut', delay: 0.35 }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            className={styles.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
          >
            Mostofa Abedin
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
