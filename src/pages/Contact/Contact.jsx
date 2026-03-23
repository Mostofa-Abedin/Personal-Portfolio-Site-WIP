import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faCircleCheck, faCircleXmark, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import styles from './Contact.module.css'

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ Name: '', Email: '', Phone: '', Message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // If EmailJS is configured, use it; otherwise fall back to mailto
    if (EMAILJS_SERVICE && EMAILJS_TEMPLATE && EMAILJS_KEY) {
      setStatus('sending')
      try {
        await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
        setStatus('success')
        setFormData({ Name: '', Email: '', Phone: '', Message: '' })
      } catch {
        setStatus('error')
      }
    } else {
      // Fallback: open email client
      const { Name, Email, Phone, Message } = formData
      const subject = encodeURIComponent(`Portfolio enquiry from ${Name}`)
      const body = encodeURIComponent(`Name: ${Name}\nEmail: ${Email}\nPhone: ${Phone || 'N/A'}\n\nMessage:\n${Message}`)
      window.location.href = `mailto:shekh.mostofa.abedin@gmail.com?subject=${subject}&body=${body}`
      setStatus('success')
      setFormData({ Name: '', Email: '', Phone: '', Message: '' })
    }
  }

  const socials = [
    { icon: faEnvelope, label: 'Email', href: 'mailto:shekh.mostofa.abedin@gmail.com', text: 'shekh.mostofa.abedin@gmail.com' },
    { icon: faLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mostofaabedin/', text: 'in/mostofaabedin' },
    { icon: faGithub, label: 'GitHub', href: 'https://github.com/Mostofa-Abedin', text: 'github.com/Mostofa-Abedin' },
    { icon: faFacebook, label: 'Facebook', href: 'https://www.facebook.com/mostafa.abedin', text: 'Shekh Mostofa Abedin' },
    { icon: faTwitter, label: 'X / Twitter', href: 'https://x.com/Abedin32505783', text: '@Abedin32505783' },
    { icon: faInstagram, label: 'Instagram', href: 'https://www.instagram.com/trigger_abedin/', text: '@trigger_abedin' },
  ]

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Mostofa Abedin</title>
        <meta name="description" content="Get in touch with Mostofa Abedin. Available for freelance work, collaborations, and full-time opportunities." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.inner}>
          {/* Left */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className={styles.heading}>Let&apos;s Talk</h1>
            <p className={styles.subtext}>
              Found my portfolio interesting? Feel free to reach out.
              This could be the beginning of something great!
            </p>
            <a
              href="https://outlook.office.com/bookwithme/user/7630af3ae24f4880a7d942afb2ae121c@magnetlab.com.au/meetingtype/tNLIdi053EebThC-_S08bg2?anonymous&ismsaljsauthenabled&ep=mlink"
              target="_blank"
              rel="noreferrer"
              className={styles.bookingBtn}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Schedule a Call
            </a>
            <div className={styles.divider} />
            <h3 className={styles.findMe}>Find me on:</h3>
            <div className={styles.contactIcons}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={styles.socialLink}>
                  <span className={styles.iconWrap}>
                    <FontAwesomeIcon icon={s.icon} />
                  </span>
                  {s.text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className={styles.formTitle}>Send a Message</h2>
            <p className={styles.replyNote}>I typically reply within 24 hours.</p>

            {status === 'success' && (
              <div className={styles.successMsg}>
                <FontAwesomeIcon icon={faCircleCheck} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>
                <FontAwesomeIcon icon={faCircleXmark} />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldGroup}>
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" name="Name" placeholder="Your name" value={formData.Name} onChange={handleChange} required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" name="Email" placeholder="your@email.com" value={formData.Email} onChange={handleChange} required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="Phone">Phone <span className={styles.optional}>(optional)</span></label>
                <input type="text" id="Phone" name="Phone" placeholder="Optional" value={formData.Phone} onChange={handleChange} />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="Message">Message</label>
                <textarea id="Message" name="Message" rows="5" placeholder="What's on your mind?" value={formData.Message} onChange={handleChange} required />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Contact
