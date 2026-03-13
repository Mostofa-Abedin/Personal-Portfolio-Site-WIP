import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import TiltCard from '../../components/TiltCard/TiltCard'
import { posts } from '../../data/blogsData'
import styles from './Blogs.module.css'

const categoryColors = {
  'Project Management': '#3b82f6',
  'Human Resources': '#22c55e',
  'Communication': '#8b5cf6',
  'Risk Management': '#ef4444',
  'Skills': '#f59e0b',
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.46, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function Blogs() {
  return (
    <PageTransition>
      <Helmet>
        <title>Blogs | Mostofa Abedin</title>
        <meta name="description" content="Articles on project management, agile, communication, risk, and professional development by Mostofa Abedin." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <motion.div
          className={styles.headerBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className={styles.heading}>Blogs &amp; Articles</h1>
          <p className={styles.subheading}>
            Thoughts on project management, communication, and building things.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {posts.map(post => (
            <motion.article key={post.id} variants={item}>
              <TiltCard className={styles.card} maxTilt={7}>
                <a href={post.link} target="_blank" rel="noreferrer" className={styles.imgLink}>
                  <div className={styles.imgWrap}>
                    <img src={post.img} alt={post.title} />
                  </div>
                </a>
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span
                      className={styles.category}
                      style={{ background: categoryColors[post.category] ?? 'var(--color-grey)' }}
                    >
                      {post.category}
                    </span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <a href={post.link} target="_blank" rel="noreferrer" className={styles.title}>
                    {post.title}
                  </a>
                  <p className={styles.summary}>{post.summary}</p>
                  <a href={post.link} className={styles.readMore} target="_blank" rel="noreferrer">
                    Read More →
                  </a>
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </motion.div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Blogs
