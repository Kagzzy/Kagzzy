import { useRef, type HTMLAttributes, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  tiltStrength?: number
  glare?: boolean
}

/**
 * Wraps its children in a card that tilts in 3D based on pointer position,
 * with an optional glare highlight. Disabled under reduced-motion.
 */
export function TiltCard({ children, tiltStrength = 10, glare = true, className, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.25), transparent 60%)`,
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * tiltStrength * 2)
    rotateX.set(-(py - 0.5) * tiltStrength * 2)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: reducedMotion ? 0 : springRotateX,
        rotateY: reducedMotion ? 0 : springRotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        WebkitBackfaceVisibility: 'hidden',
      }}
      className={clsx('relative will-change-transform', className)}
      {...(props as Record<string, unknown>)}
    >
      {children}
      {glare && !reducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  )
}
