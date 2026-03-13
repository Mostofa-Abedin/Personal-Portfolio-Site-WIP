import styles from './Marquee.module.css'

const skills = [
  'React', 'Python', 'JavaScript', 'Node.js', 'Vite',
  'Jira', 'Confluence', 'Agile · Scrum', 'PMI-ACP',
  'Zapier', 'Make.com', 'Freshdesk', 'Git', 'PostgreSQL',
  'HubSpot', 'REST APIs', 'Automation', 'Asana',
]

export default function Marquee() {
  // Duplicate for seamless infinite loop
  const items = [...skills, ...skills]

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {items.map((skill, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.sep}>◆</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
