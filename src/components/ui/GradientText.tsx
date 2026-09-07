import type { ReactNode } from 'react'
import clsx from 'clsx'

interface GradientTextProps {
  children: ReactNode
  className?: string
  animated?: boolean
}

/** Purple-to-blue gradient text used for emphasized headline fragments. */
export function GradientText({ children, className, animated = false }: GradientTextProps) {
  return (
    <span
      className={clsx(
        'gradient-text',
        animated && 'bg-[length:200%_auto] animate-gradientshift',
        className,
      )}
    >
      {children}
    </span>
  )
}
