import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Props { value: number; suffix?: string; isYear?: boolean; duration?: number; }

export default function AnimatedCounter({ value, suffix = '', isYear = false, duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const [count, setCount] = useState(isYear ? value - 1 : 0)

  useEffect(() => {
    if (!inView) return
    if (reduced) { setCount(value); return }
    const start = isYear ? value - 1 : 0
    const steps = 60
    const increment = (value - start) / steps
    let current = start; let step = 0
    const id = setInterval(() => {
      step++; current += increment
      if (step >= steps) { setCount(value); clearInterval(id) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(id)
  }, [inView, value, isYear, duration, reduced])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}
