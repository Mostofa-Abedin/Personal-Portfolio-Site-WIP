import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <p className={styles.ctaText}>Interested in working together?</p>
        <Link to="/contact" className={styles.ctaBtn}>Let&apos;s Talk</Link>
        <a
          href="https://outlook.office.com/bookwithme/user/7630af3ae24f4880a7d942afb2ae121c@magnetlab.com.au/meetingtype/tNLIdi053EebThC-_S08bg2?anonymous&ismsaljsauthenabled&ep=mlink"
          target="_blank"
          rel="noreferrer"
          className={styles.scheduleBtn}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Schedule a Call
        </a>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <FontAwesomeIcon icon={faCopyright} style={{ color: 'var(--color-red)' }} />
          <strong className={styles.fname}> Mostofa</strong>
          <strong className={styles.lname}> Abedin</strong>
        </div>
        <div className={styles.footerRight}>
          <a href="https://www.facebook.com/mostafa.abedin" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/Abedin32505783" target="_blank" rel="noreferrer" aria-label="Twitter / X">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/mostofaabedin/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Mostofa-Abedin" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/trigger_abedin/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
