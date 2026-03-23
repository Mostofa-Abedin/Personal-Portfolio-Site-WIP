import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import RevealText from '../../components/RevealText/RevealText'
import { jobs, skills } from '../../data/experienceData'
import styles from './Experience.module.css'

const categoryColors = {
  'CRM & Onboarding': '#ff6361',
  'Automation & Integrations': '#ffa600',
  'Technical Foundations': '#0ea5e9',
  'Data & Reporting': '#8b5cf6',
  'Collaboration & Productivity': '#22c55e',
  'Soft Skills': '#f59e0b',
}

function Experience() {
  const [expanded, setExpanded] = useState(new Set([jobs[0].id]))

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Mostofa Abedin</title>
        <meta name="description" content="Professional experience including MagnetLab, PARts DB Australia, Lenovo, and more. PMI-ACP certified operations and project management professional." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.headerBlock}>
          <RevealText delay={0.05}>
            <h1 className={styles.heading}>My Professional Experience</h1>
          </RevealText>
          <RevealText delay={0.18}>
            <p className={styles.subheading}>A track record across engineering, operations, and tech.</p>
          </RevealText>
        </div>

        {/* Timeline */}
        <div className={styles.timelineWrap}>
          <div className={styles.timelineLine} />
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.48, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.card}>
                <button
                  className={styles.cardHeader}
                  onClick={() => toggle(job.id)}
                  aria-expanded={expanded.has(job.id)}
                >
                  <div className={styles.cardMeta}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noreferrer" className={styles.companyLink}>
                        {job.company}
                      </a>
                    ) : (
                      <span className={styles.company}>{job.company}</span>
                    )}
                    <span className={styles.duration}>{job.duration}</span>
                  </div>
                  <FontAwesomeIcon
                    icon={expanded.has(job.id) ? faChevronUp : faChevronDown}
                    className={styles.chevron}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expanded.has(job.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: 'easeInOut' }}
                      className={styles.cardBody}
                    >
                      {job.description && (
                        <p className={styles.jobDesc}>{job.description}</p>
                      )}
                      <ul className={styles.responsibilities}>
                        {job.responsibilities.map((r, j) => (
                          <li key={j}>{r}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.skillsHeading}>Key Skills &amp; Tools</h2>
          <div className={styles.skillsGrid}>
            {skills.map(skill => (
              <div key={skill.id} className={styles.skillGroup}>
                <h4 style={{ color: categoryColors[skill.title] ?? 'var(--color-orange)' }}>
                  {skill.title}
                </h4>
                <div className={styles.tagCloud}>
                  {skill.tools.split(', ').map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resume */}
        <motion.div
          className={styles.resume}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="/Shekh_Mostofa_Abedin_Resume.pdf" download className={styles.resumeBtn}>
            <FontAwesomeIcon icon={faFile} /> Download Resume
          </a>
        </motion.div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Experience
