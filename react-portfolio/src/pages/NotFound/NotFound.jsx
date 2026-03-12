import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Oops — page not found.</p>
        <NavLink to="/" className={styles.homeBtn}>Back to Home</NavLink>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
