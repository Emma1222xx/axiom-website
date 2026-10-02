import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Props {
  children: ReactNode; className?: string; strength?: number; onClick?: () => void;
  href?: string; target?: string; rel?: string; type?: 'button' | 'submit';
  disabled?: boolean; 'aria-label'?: string;
}

export default function MagneticButton({ children, className = '', strength = 0.3, onClick, href, target, rel, type = 'button', disabled, 'aria-label': ariaLabel }: Props) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0); const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  function handleMove(e: MouseEvent) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength); y.set((e.clientY - cy) * strength)
  }
  function handleLeave() { x.set(0); y.set(0) }
  const motionProps = { style: { x: springX, y: springY }, onMouseMove: handleMove, onMouseLeave: handleLeave }

  if (href) return <motion.a ref={ref as any} href={href} target={target} rel={rel} className={className} aria-label={ariaLabel} {...motionProps}>{children}</motion.a>
  return <motion.button ref={ref as any} type={type} onClick={onClick} disabled={disabled} className={className} aria-label={ariaLabel} {...motionProps}>{children}</motion.button>
}
