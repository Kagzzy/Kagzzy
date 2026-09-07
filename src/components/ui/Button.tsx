import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost' | 'gradient'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Framer Motion's drag/animation event signatures conflict with the plain
// DOM event types on these handlers, so they're excluded from the native
// button attributes we forward onto `motion.button`.
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
>

interface ButtonProps extends NativeButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  showArrow?: boolean
  magnetic?: boolean
  as?: 'button' | 'a'
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 hover:brightness-110 active:scale-[0.98]',
  secondary:
    'bg-white/[0.06] text-white border border-white/20 hover:bg-white/10 hover:border-white/35 active:scale-[0.98]',
  dark: 'bg-white/[0.04] text-white border border-white/10 hover:bg-white/10 active:scale-[0.98]',
  ghost: 'bg-transparent text-white border border-white/20 hover:bg-white/10 active:scale-[0.98]',
  gradient:
    'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 hover:brightness-110 active:scale-[0.98]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs font-bold gap-1.5',
  md: 'px-7 py-3 text-xs sm:text-sm font-bold gap-2',
  lg: 'px-8 py-3.5 text-sm sm:text-base font-bold gap-2.5',
}

/**
 * Shared button used across the marketing site. Supports five visual
 * variants, an optional trailing arrow that slides on hover, and a subtle
 * "magnetic" pointer-follow effect (disabled under prefers-reduced-motion).
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    icon,
    showArrow = false,
    magnetic = true,
    className,
    children,
    as = 'button',
    href,
    ...props
  },
  ref,
) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 })
  const translateX = useTransform(springX, (v) => v)
  const translateY = useTransform(springY, (v) => v)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || reducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.25)
    y.set(relY * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp = motion.button

  const content = (
    <>
      {icon}
      <span className="relative">{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  const classes = clsx(
    'group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
    'hover:-translate-y-0.5 active:translate-y-0 focus-ring',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        className={classes}
        style={magnetic && !reducedMotion ? { x: translateX, y: translateY } : undefined}
        onMouseMove={handleMouseMove as unknown as (e: React.MouseEvent<HTMLAnchorElement>) => void}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <Comp
      ref={ref}
      className={classes}
      style={magnetic && !reducedMotion ? { x: translateX, y: translateY } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(props as NativeButtonProps)}
    >
      {content}
    </Comp>
  )
})
