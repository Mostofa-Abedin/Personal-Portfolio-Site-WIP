import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import { jobs, skills } from '../../data/experienceData'
import styles from './Experience.module.css'

function Experience() {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Mostofa Abedin</title>
        <meta name="description" content="Professional experience including MagnetLab, PARts DB Australia, Lenovo, and more. PMI-ACP certified operations and project management professional." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.heading}>My Professional Experience</div>
        <div className={styles.expContent}>
          <div className={styles.expSummary}>
            <h2>Summary:</h2>
            <p>
              Resourceful PMI-certified professional with a background in engineering, software
              development, and operations. Experienced in bridging technical and business teams
              to deliver SaaS and automation projects efficiently. Skilled in stakeholder
              coordination, Jira-based workflows, and process improvement through clear
              documentation and data-driven decisions.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h2>Key Skills &amp; Tools:</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.id} className={styles.skillGroup}>
                  <h4>{skill.title}</h4>
                  <p>{skill.tools}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.proExp}>
            <h2>Experience:</h2>
            {jobs.map((job) => (
              <div key={job.id} className={styles.job}>
                <h4 className={styles.jobTitle}>{job.title}</h4>
                <h4 className={styles.company}>{job.company}</h4>
                <h4 className={styles.duration}>{job.duration}</h4>
                {job.description && (
                  <p className={styles.jobDesc}>{job.description}</p>
                )}
                <ul className={styles.responsibilities}>
                  {job.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.resume}>
            <a href="/Shekh_Mostofa_Abedin_Resume.pdf" download>
              <FontAwesomeIcon icon={faFile} style={{ color: 'black' }} /> Download my Resume here
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Experience
