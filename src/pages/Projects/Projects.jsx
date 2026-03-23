import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import RevealText from '../../components/RevealText/RevealText'
import TiltCard from '../../components/TiltCard/TiltCard'
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

const CATEGORIES = ['Software', 'Operations & Automation']

function ProjectCard({ project }) {
  return (
    <TiltCard className={styles.card}>
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
    </TiltCard>
  )
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
        <div className={styles.headerBlock}>
          <RevealText delay={0.05}>
            <h1 className={styles.heading}>Selected Work</h1>
          </RevealText>
          <RevealText delay={0.18}>
            <p className={styles.subheading}>
              A cross-section of what I&apos;ve built, automated, and delivered.
            </p>
          </RevealText>
        </div>

        {CATEGORIES.map((category, catIndex) => {
          const categoryProjects = projects.filter(p => p.category === category)
          if (!categoryProjects.length) return null
          return (
            <div key={category} className={styles.categorySection}>
              <RevealText delay={0.05 + catIndex * 0.1}>
                <h2 className={styles.categoryHeading}>{category}</h2>
              </RevealText>
              <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {categoryProjects.map(project => (
                  <motion.div key={project.id} variants={item}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )
        })}
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Projects
