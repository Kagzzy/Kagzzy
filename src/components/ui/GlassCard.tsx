import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  tone?: 'dark' | 'light'
  glow?: boolean
}

/**
 * Reusable glassmorphism card. `tone="dark"` is for use on dark sections
 * (frosted white overlay), `tone="light"` for use on light sections.
 */
export function GlassCard({ children, tone = 'dark', glow = false, className, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx(
        tone === 'dark' ? 'glass-card' : 'glass-card-light',
        glow && 'shadow-glow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
