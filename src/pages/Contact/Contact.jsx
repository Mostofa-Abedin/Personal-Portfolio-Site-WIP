import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({ Name: '', Email: '', Phone: '', Message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { Name, Email, Phone, Message } = formData
    const subject = encodeURIComponent(`Portfolio enquiry from ${Name}`)
    const body = encodeURIComponent(`Name: ${Name}\nEmail: ${Email}\nPhone: ${Phone || 'N/A'}\n\nMessage:\n${Message}`)
    window.location.href = `mailto:shekh.mostofa.abedin@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setFormData({ Name: '', Email: '', Phone: '', Message: '' })
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Mostofa Abedin</title>
        <meta name="description" content="Get in touch with Mostofa Abedin. Available for freelance work, collaborations, and full-time opportunities." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.inner}>

          <div className={styles.leftPara}>
            <h1 className={styles.heading}>Let&apos;s Talk</h1>
            <p className={styles.subtext}>
              Found my portfolio interesting? Feel free to reach out —
              this could be the beginning of something great!
            </p>

            <div className={styles.divider} />

            <h3 className={styles.findMe}>Find me on:</h3>
            <div className={styles.contactIcons}>
              <a href="mailto:shekh.mostofa.abedin@gmail.com" target="_blank" rel="noreferrer" aria-label="Email">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faEnvelope} /></span>
                shekh.mostofa.abedin@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mostofaabedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faLinkedin} /></span>
                in/mostofaabedin
              </a>
              <a href="https://github.com/Mostofa-Abedin" target="_blank" rel="noreferrer" aria-label="GitHub">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faGithub} /></span>
                github.com/Mostofa-Abedin
              </a>
              <a href="https://www.facebook.com/mostafa.abedin" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faFacebook} /></span>
                Shekh Mostofa Abedin
              </a>
              <a href="https://x.com/Abedin32505783" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faTwitter} /></span>
                @Abedin32505783
              </a>
              <a href="https://www.instagram.com/trigger_abedin/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span className={styles.iconWrap}><FontAwesomeIcon icon={faInstagram} /></span>
                @trigger_abedin
              </a>
            </div>
          </div>

          <div className={styles.rightForm}>
            <h2 className={styles.formTitle}>Send a Message</h2>

            {submitted && (
              <div className={styles.successMsg}>
                Your email client has been opened — thanks for reaching out! I&apos;ll get back to you soon.
              </div>
            )}

            <form className={styles.formStyle} onSubmit={handleSubmit}>
              <div className={styles.fieldGroup}>
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" name="Name" placeholder="Your name" value={formData.Name} onChange={handleChange} required />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" name="Email" placeholder="your@email.com" value={formData.Email} onChange={handleChange} required />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="Phone">Phone Number <span className={styles.optional}>(optional)</span></label>
                <input type="text" id="Phone" name="Phone" placeholder="Optional" value={formData.Phone} onChange={handleChange} />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="Message">Message</label>
                <textarea id="Message" name="Message" rows="5" placeholder="What's on your mind?" value={formData.Message} onChange={handleChange} required />
              </div>

              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>

        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Contact
