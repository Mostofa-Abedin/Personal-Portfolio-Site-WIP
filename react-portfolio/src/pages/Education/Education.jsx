import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import caLogo from '../../assets/CA_logo.jpg'
import usydLogo from '../../assets/usyd_logo_2.jpg'
import fsaeImg from '../../assets/fsae_image.jpg'
import carbonFibreImg from '../../assets/carbon_fibre_img.jpg'
import styles from './Education.module.css'

function Education() {
  return (
    <>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.heading}>My Education Background</div>
        <div className={styles.edContent}>

          <div className={styles.edSummary}>
            <h3>Summary:</h3>
            <p>
              I completed a Diploma of Information Technology (Web Development) at Coder Academy
              and hold a Bachelor of Engineering in Mechanical Engineering from the University of
              Sydney. In 2021, I completed a Professional Year in Engineering. I am also a
              PMI-ACP and CAPM certified project management professional.
            </p>
          </div>

          <div className={styles.edQual}>
            <h3>Qualifications:</h3>

            <div className={styles.qualSec}>
              <img src={caLogo} alt="Coder Academy Logo" className={styles.instLogo} />
              <p>
                <strong>Coder Academy</strong><br />
                Diploma of Information Technology (Web Development)<br />
                Apr 2024 – Feb 2025
              </p>
            </div>

            <div className={styles.qualSec}>
              <a href="https://www.sydney.edu.au/" target="_blank" rel="noreferrer">
                <img src={usydLogo} alt="The University of Sydney Logo" className={styles.instLogo} />
              </a>
              <p>
                <strong>University of Sydney</strong><br />
                Bachelor of Engineering: Mechanical<br />
                Class of 2020<br /><br />
                <strong>Final Year Thesis</strong><br />
                Numerical and experimental study of externally loaded bolted joints — awarded Distinction<br /><br />
                Discrepancies in member stiffness and deformation characteristics for externally
                loaded bolted joints were studied. An experimental method involving physical
                models, an analytical method using established formulae in literature were
                contrasted with numerical methods using Finite Element Analysis (FEA) in ANSYS and SolidWorks.
              </p>
            </div>
          </div>

          <div className={styles.edProjects}>
            <h3>Degree related projects:</h3>
            <div className={styles.project}>
              <h4>Society of Automotive Engineers (SAE) team member</h4>
              <img src={fsaeImg} alt="FSAE Car" className={styles.edProImg} />
              <ul className={styles.list}>
                <li>Design and testing of FSAE specification race car.</li>
                <li>Managed funding and awareness raising events.</li>
                <li>Attended design competition between Australian Universities.</li>
              </ul>
            </div>
            <div className={styles.project}>
              <h4>3D printing using Carbon Fibre</h4>
              <img src={carbonFibreImg} alt="3D printer Carbon Fibre Sample" className={styles.edProImg} />
              <ul className={styles.list}>
                <li>Extensive research conducted on 3D printing and thermoplastic compounds.</li>
                <li>Molecular level analysis of reinforced and pre-impregnated carbon fibre.</li>
                <li>Attempted to increase manufacturing quality.</li>
              </ul>
            </div>
          </div>

          <div className={styles.edCert}>
            <h3>Certifications:</h3>
            <div className={styles.certList}>
              <div className={styles.certItem}>
                <strong>PMI Agile Certified Practitioner (PMI-ACP)®</strong><br />
                Project Management Institute · Issued Nov 2025 · Expires Nov 2028
              </div>
              <div className={styles.certItem}>
                <strong>Certified Associate in Project Management (CAPM)®</strong><br />
                Project Management Institute · Issued Oct 2025 · Expires Oct 2028
              </div>
              <div className={styles.certItem}>
                <strong>Professional Year in Engineering (GradIEAust)</strong><br />
                Engineers Australia · 2021
              </div>
              <div className={styles.certItem}>
                <strong>Startup Fundamentals</strong><br />
                Incubate Program, University of Sydney · 2021
              </div>
              <div className={styles.certItem}>
                <strong>Google Cloud Generative AI Leader</strong><br />
                In progress
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Education
