import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import TypeWriter from '../../components/TypeWriter/TypeWriter'
import ParticleCanvas from '../../components/ParticleCanvas/ParticleCanvas'
import MagneticButton from '../../components/MagneticButton/MagneticButton'
import styles from './Landing.module.css'

function Landing() {
  return (
    <PageTransition>
      <Helmet>
        <title>Mostofa Abedin | Portfolio</title>
        <meta name="description" content="Projects & Operations Lead and Web Developer based in Sydney, NSW. PMI-ACP certified with a background in engineering, software, and automation." />
      </Helmet>
      <main className={styles.container}>
        <ParticleCanvas />
        <div className={styles.overlay} />

        <div className={styles.content}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <span className={styles.fname}>Mostofa</span>{' '}
            <span className={styles.lname}>Abedin</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <TypeWriter />
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <MagneticButton>
              <Link to="/about" className={styles.primaryBtn}>
                View Portfolio
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/contact" className={styles.secondaryBtn}>
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <Link to="/about" className={styles.scrollArrow} aria-label="Explore portfolio">
            <span />
          </Link>
        </motion.div>
      </main>
    </PageTransition>
  )
}

export default Landing
