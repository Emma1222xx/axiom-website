import { useScroll, useSpring, motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function ScrollProgress() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  if (reduced) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left bg-gradient-to-r from-brand-glow via-silver-400 to-brand-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
