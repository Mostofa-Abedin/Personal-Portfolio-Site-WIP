import { useRef } from 'react'
import styles from './TiltCard.module.css'

/**
 * Wraps children with a 3-D perspective tilt + moving glare highlight.
 * Pass your own className to apply card-level visual styles.
 *
 * Usage:
 *   <TiltCard className={styles.card}>…content…</TiltCard>
 */
export default function TiltCard({ children, className = '', maxTilt = 10 }) {
  const ref = useRef(null)
  const glareRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width   // 0 → 1
    const y = (e.clientY - rect.top)  / rect.height  // 0 → 1

    const rotX = (y - 0.5) * -maxTilt * 2  // top edge tilts toward viewer
    const rotY = (x - 0.5) *  maxTilt * 2

    el.style.transition = 'transform 0.08s ease'
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.025, 1.025, 1.025)`

    if (glareRef.current) {
      glareRef.current.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.10) 0%, transparent 65%)`
    }
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)'
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    if (glareRef.current) {
      glareRef.current.style.background = 'transparent'
    }
  }

  return (
    <div
      ref={ref}
      className={`${styles.tiltWrap} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glareRef} className={styles.glare} />
      {children}
    </div>
  )
}
