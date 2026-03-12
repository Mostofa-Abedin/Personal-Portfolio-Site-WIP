import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

function Landing() {
  return (
    <main className={styles.container}>
      <p>
        Hi, I&apos;m&nbsp;
        <strong className={styles.fname}>Mostofa</strong>{' '}
        <strong className={styles.lname}>Abedin</strong>.
        <br />
        Projects &amp; Operations Lead · PMI-ACP Certified
        <br />
        <Link to="/about" className={styles.prtButton}>
          View my Portfolio &#9654;
        </Link>
      </p>
    </main>
  )
}

export default Landing
