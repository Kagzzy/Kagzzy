import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Badge } from './Badge'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Standard section heading: small eyebrow badge, large heading, and
 * optional supporting copy. Animates in as it enters the viewport.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <Badge tone={tone}>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={clsx(
          'heading-lg max-w-2xl',
          tone === 'dark' ? 'text-white' : 'text-textdark',
          align === 'center' && 'mx-auto',
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={clsx(
            'max-w-xl text-base sm:text-lg',
            tone === 'dark' ? 'text-slate-300' : 'text-muted',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
