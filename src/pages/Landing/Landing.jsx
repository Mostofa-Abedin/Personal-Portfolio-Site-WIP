import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageTransition from '../../components/PageTransition/PageTransition'
import styles from './Landing.module.css'

function Landing() {
  return (
    <PageTransition>
      <Helmet>
        <title>Mostofa Abedin | Portfolio</title>
        <meta name="description" content="Projects & Operations Lead and Web Developer based in Sydney, NSW. PMI-ACP certified with a background in engineering, software, and automation." />
      </Helmet>
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
    </PageTransition>
  )
}

export default Landing
