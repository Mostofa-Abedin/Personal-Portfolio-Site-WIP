import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import { projects } from '../../data/projectsData'
import styles from './Projects.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Projects() {
  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Mostofa Abedin</title>
        <meta name="description" content="A selection of projects by Mostofa Abedin spanning web development, CRM automation, data engineering, and operations management." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={styles.headerBlock}
        >
          <h1 className={styles.heading}>Selected Work</h1>
          <p className={styles.subheading}>
            A cross-section of what I&apos;ve built, automated, and delivered.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map(project => (
            <motion.div key={project.id} className={styles.card} variants={item}>
              {project.featured && <span className={styles.featuredBadge}>Featured</span>}
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className={styles.privateNote}>Client / Internal Project</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Projects
