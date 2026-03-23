import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import caLogo from '../../assets/CA_logo.jpg'
import usydLogo from '../../assets/usyd_logo_2.jpg'
import fsaeImg from '../../assets/fsae_image.jpg'
import carbonFibreImg from '../../assets/carbon_fibre_img.jpg'
import styles from './Education.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.48, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

const certs = [
  { title: 'PMI Agile Certified Practitioner (PMI-ACP)®', body: 'Project Management Institute · Issued Nov 2025 · Expires Nov 2028', href: 'https://www.pmi.org/certifications/agile-acp' },
  { title: 'Certified Associate in Project Management (CAPM)®', body: 'Project Management Institute · Issued Oct 2025 · Expires Oct 2028', href: 'https://www.pmi.org/certifications/certified-associate-capm' },
  { title: 'Professional Year in Engineering (GradIEAust)', body: 'Engineers Australia · 2021', href: 'https://eea.org.au/professional-year-program' },
  { title: 'Startup Fundamentals', body: 'Incubate Program, University of Sydney · 2021', href: 'https://incubate.org.au/proto/' },
  { title: 'AWS Certified Cloud Practitioner (CCP)', body: 'In progress', href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
]

function Education() {
  return (
    <PageTransition>
      <Helmet>
        <title>Education | Mostofa Abedin</title>
        <meta name="description" content="Academic background including Coder Academy Diploma in Web Development and a Bachelor of Mechanical Engineering from the University of Sydney." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <motion.div className={styles.headerBlock} {...fadeUp()}>
          <h1 className={styles.heading}>My Education</h1>
          <p className={styles.subheading}>
            Engineering foundations · Web development · Continuous learning
          </p>
        </motion.div>

        {/* Qualifications */}
        <motion.section className={styles.block} {...fadeUp(0.08)}>
          <h2 className={styles.sectionTitle}>Qualifications</h2>
          <div className={styles.qualGrid}>
            <div className={styles.qualCard}>
              <img src={caLogo} alt="Coder Academy" className={styles.instLogo} />
              <div>
                <h3>Coder Academy</h3>
                <p className={styles.degree}>Diploma of Information Technology (Web Development)</p>
                <p className={styles.years}>Apr 2024 – Feb 2025</p>
                <ul className={styles.diplomaList}>
                  <li>Built full-stack web apps using the MERN stack (MongoDB, Express, React, Node.js)</li>
                  <li>Structured backend codebases with MVC architecture and RESTful API design</li>
                  <li>Designed and queried relational databases with PostgreSQL alongside NoSQL with MongoDB</li>
                  <li>Frontend development with React, JavaScript (ES6+), HTML5, and CSS3</li>
                  <li>Version control with Git and GitHub, including branching and pull request workflows</li>
                  <li>Agile development practices and collaborative team projects</li>
                </ul>
                <div className={styles.diplomaTags}>
                  {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'MVC', 'HTML5', 'CSS3', 'Git'].map(t => (
                    <span key={t} className={styles.diplomaTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.qualCard}>
              <a href="https://www.sydney.edu.au/" target="_blank" rel="noreferrer">
                <img src={usydLogo} alt="University of Sydney" className={styles.instLogo} />
              </a>
              <div>
                <h3>University of Sydney</h3>
                <p className={styles.degree}>Bachelor of Engineering: Mechanical</p>
                <p className={styles.years}>Class of 2020</p>
                <p className={styles.thesis}>
                  <strong>Final Year Thesis (Distinction)</strong><br />
                  Numerical and experimental study of externally loaded bolted joints, comparing
                  physical models, analytical formulae, and FEA in ANSYS and SolidWorks.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section className={styles.block} {...fadeUp(0.1)}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certGrid}>
            {certs.map(c => (
              <div key={c.title} className={styles.certCard}>
                {c.href
                  ? <h4><a href={c.href} target="_blank" rel="noreferrer" className={styles.certLink}>{c.title}</a></h4>
                  : <h4>{c.title}</h4>
                }
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section className={styles.block} {...fadeUp(0.12)}>
          <h2 className={styles.sectionTitle}>Degree Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <img src={fsaeImg} alt="FSAE race car" className={styles.projectImg} />
              <div className={styles.projectText}>
                <h4><a href="https://www.sydneymotorsport.com.au" target="_blank" rel="noreferrer" className={styles.certLink}>Formula SAE Team</a></h4>
                <ul>
                  <li>Design and testing of FSAE specification race car.</li>
                  <li>Managed funding and awareness-raising events.</li>
                  <li>Attended design competition between Australian Universities.</li>
                </ul>
              </div>
            </div>
            <div className={styles.projectCard}>
              <img src={carbonFibreImg} alt="Carbon fibre 3D print" className={styles.projectImg} />
              <div className={styles.projectText}>
                <h4>3D Printing with Carbon Fibre</h4>
                <ul>
                  <li>Molecular-level analysis of reinforced and pre-impregnated carbon fibre.</li>
                  <li>Extensive research on thermoplastic compounds and manufacturing quality.</li>
                  <li>Attempted to increase 3D printing structural performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Education
