import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] } }}
      exit={{ opacity: 0, y: -16, transition: { duration: 0.22, ease: 'easeIn' } }}
      style={{ display: 'contents' }}
    >
      {children}
    </motion.div>
  )
}
