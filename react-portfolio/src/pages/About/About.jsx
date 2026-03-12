import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import profileImg from '../../assets/My_image.jpg'
import styles from './About.module.css'

function About() {
  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.content}>
          <div className={styles.textCol}>
            <h1>
              Hi, I&apos;m&nbsp;
              <span className={styles.fname}>Mostofa</span>{' '}
              <span className={styles.lname}>Abedin</span>.
            </h1>
            <h2 className={styles.subtitle}>Projects &amp; Operations Lead · PMI-ACP Certified</h2>
            <p className={styles.highlights}>
              <span className={styles.h1}>Operations &amp; PM |</span>{' '}
              <span className={styles.h2}>Full-Stack Web Dev |</span>{' '}
              <span className={styles.h3}>Automation &amp; AI</span>
            </p>
            <p className={styles.bio}>
              Resourceful PMI-certified professional with a background in engineering, software
              development, and operations. Experienced in bridging technical and business teams
              to deliver SaaS and automation projects efficiently. Skilled in stakeholder
              coordination, Jira-based workflows, and process improvement through clear
              documentation and data-driven decisions.
            </p>
            <div className={styles.buttons}>
              <Link to="/contact" className={styles.hireMeBtn}>Hire Me</Link>
              <Link to="/experience" className={styles.expBtn}>Experience</Link>
            </div>
          </div>
          <div className={styles.imageCol}>
            <img src={profileImg} alt="Mostofa Abedin" className={styles.meImg} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
