import { useState, useEffect } from 'react'
import styles from './TypeWriter.module.css'

const TITLES = [
  'Projects & Operations Lead',
  'PMI-ACP Certified PM',
  'Full-Stack Developer',
  'Automation & AI Builder',
]

export default function TypeWriter() {
  const [displayed, setDisplayed] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout

    if (phase === 'typing') {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 55)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 2200)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 28)
      } else {
        setTitleIndex(i => (i + 1) % TITLES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, charIndex, titleIndex])

  return (
    <span className={styles.wrap}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  )
}
