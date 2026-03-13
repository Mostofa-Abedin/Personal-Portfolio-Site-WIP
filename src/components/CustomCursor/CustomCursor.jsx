import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    document.documentElement.classList.add('custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.35
      ringY += (mouseY - ringY) * 0.35
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      rafId = requestAnimationFrame(animate)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], label')) {
        ring.classList.add(styles.hover)
        dot.classList.add(styles.dotHover)
      }
    }

    const onOut = (e) => {
      if (!e.relatedTarget?.closest('a, button, [role="button"], label')) {
        ring.classList.remove(styles.hover)
        dot.classList.remove(styles.dotHover)
      }
    }

    const onLeaveWindow = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const onEnterWindow = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onEnterWindow)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', onEnterWindow)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
