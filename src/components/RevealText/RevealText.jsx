import { motion } from 'framer-motion'

/**
 * Wraps children in an overflow:hidden mask and slides them up into view
 * when the element enters the viewport — theatrical heading reveal.
 *
 * Usage:
 *   <RevealText delay={0.1}>
 *     <h1>Section Title</h1>
 *   </RevealText>
 */
export default function RevealText({ children, delay = 0, className }) {
  return (
    <div style={{ overflow: 'hidden', display: 'block' }} className={className}>
      <motion.div
        initial={{ y: '108%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.72,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
