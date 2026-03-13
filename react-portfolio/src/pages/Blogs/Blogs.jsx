import { Helmet } from 'react-helmet-async'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTransition from '../../components/PageTransition/PageTransition'
import { posts } from '../../data/blogsData'
import styles from './Blogs.module.css'

function Blogs() {
  return (
    <PageTransition>
      <Helmet>
        <title>Blogs | Mostofa Abedin</title>
        <meta name="description" content="Articles on project management, agile, communication, risk, and professional development by Mostofa Abedin." />
      </Helmet>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.heading}>
          <h1>Welcome to my Blogs</h1>
        </div>
        <div className={styles.container}>
          {posts.map((post) => (
            <div key={post.id} className={styles.box}>
              <div className={styles.imgWrap}>
                <img src={post.img} alt={post.title} />
              </div>
              <div className={styles.text}>
                <span className={styles.meta}>{post.date} / {post.category}</span>
                <a href={post.link} className={styles.title} target="_blank" rel="noreferrer">
                  {post.title}
                </a>
                <p className={styles.summary}>{post.summary}</p>
                <a href={post.link} className={styles.readMore} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

export default Blogs
