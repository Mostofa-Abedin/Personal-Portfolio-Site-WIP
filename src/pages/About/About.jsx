import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import MagneticButton from '../../components/MagneticButton/MagneticButton'
import profileImg from '../../assets/My_image.jpg'
import styles from './About.module.css'


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About | Mostofa Abedin</title>
        <meta name="description" content="Learn about Mostofa Abedin, a PMI-ACP certified professional with a background in engineering, software development, operations, and automation." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        {/* Hero row */}
        <div className={styles.content}>
          <motion.div
            className={styles.textCol}
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h1 variants={fadeUp} custom={0}>
              Hi, I&apos;m&nbsp;
              <span className={styles.fname}>Mostofa</span>{' '}
              <span className={styles.lname}>Abedin</span>.
            </motion.h1>

            <motion.h2 className={styles.subtitle} variants={fadeUp} custom={1}>
              Projects &amp; Operations Lead · PMI-ACP Certified
            </motion.h2>

            <motion.p className={styles.highlights} variants={fadeUp} custom={2}>
              <span className={styles.h1}>Operations &amp; PM</span>{' · '}
              <span className={styles.h2}>Full-Stack Dev</span>{' · '}
              <span className={styles.h3}>Automation &amp; AI</span>
            </motion.p>

            <motion.p className={styles.bio} variants={fadeUp} custom={3}>
              Resourceful PMI-certified professional with a background in engineering, software
              development, and operations. Experienced in bridging technical and business teams
              to deliver SaaS and automation projects efficiently. Skilled in stakeholder
              coordination, Jira-based workflows, and process improvement through clear
              documentation and data-driven decisions.
            </motion.p>

            <motion.div className={styles.buttons} variants={fadeUp} custom={4}>
              <MagneticButton>
                <Link to="/contact" className={styles.hireMeBtn}>Hire Me</Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/experience" className={styles.expBtn}>Experience</Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.imgGlow}>
              <img src={profileImg} alt="Mostofa Abedin" className={styles.meImg} />
            </div>
          </motion.div>
        </div>

      </main>
      <Footer />
    </PageTransition>
  )
}

export default About
