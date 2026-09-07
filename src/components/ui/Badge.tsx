import type { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}

/** Small pill-shaped label used for eyebrows and feature tags. */
export function Badge({ children, tone = 'dark', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider',
        tone === 'dark'
          ? 'border-white/15 bg-white/[0.06] text-slate-200 backdrop-blur-sm'
          : 'border-violet-200 bg-violet-50 text-violet-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
