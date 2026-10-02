import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteConfig } from '../../siteConfig'

export default function PageIntro() {
  const [visible, setVisible] = useState(true)
  const reduced = useReducedMotion()
  useEffect(() => {
    const id = setTimeout(() => setVisible(false), reduced ? 100 : 1400)
    return () => clearTimeout(id)
  }, [reduced])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          aria-hidden="true"
        >
          <motion.img src="logo.png" alt={siteConfig.name} className="w-24 h-24 object-contain mb-6" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
          <motion.p className="font-display text-silver-400 tracking-[0.3em] text-xs uppercase" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>{siteConfig.tagline}</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
