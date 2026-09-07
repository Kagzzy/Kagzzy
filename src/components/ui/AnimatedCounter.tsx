import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

/**
 * Counts up from 0 to `value` when it scrolls into view. Respects
 * prefers-reduced-motion by snapping straight to the final value.
 */
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(reducedMotion ? value : 0)

  useEffect(() => {
    if (!isInView) return
    if (reducedMotion) {
      setDisplay(value)
      return
    }

    let raf: number
    const getNow = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now())
    const start = getNow()
    const durationMs = duration * 1000

    const tick = (now: number) => {
      const currentNow = now || getNow()
      const elapsed = currentNow - start
      const progress = Math.min(1, Math.max(0, elapsed / durationMs))
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDisplay(value)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration, reducedMotion])

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  )
}
