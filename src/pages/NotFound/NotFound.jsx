import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition/PageTransition'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>404 – Page Not Found | Mostofa Abedin</title>
      </Helmet>
      <main className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.code}>404</div>
          <h1 className={styles.title}>Lost in the void.</h1>
          <p className={styles.message}>
            The page you&apos;re looking for doesn&apos;t exist, or it moved somewhere better.
          </p>
          <Link to="/" className={styles.homeBtn}>← Back to Home</Link>
        </motion.div>
      </main>
    </PageTransition>
  )
}

export default NotFound
