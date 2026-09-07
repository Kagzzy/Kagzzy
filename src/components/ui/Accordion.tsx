import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import clsx from 'clsx'

export interface AccordionItemData {
  id: string
  question: string
  answer: ReactNode
}

interface AccordionProps {
  items: AccordionItemData[]
  className?: string
}

/** Accessible single-open accordion with animated expand/collapse. */
export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className={clsx(
              'overflow-hidden rounded-xl2 border transition-colors duration-300',
              isOpen ? 'border-violet-200 bg-violet-50/60' : 'border-slate-200 bg-white',
            )}
          >
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="text-base font-semibold text-textdark sm:text-lg">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className={clsx(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
                  isOpen ? 'bg-violet-500 text-white' : 'bg-slate-100 text-slate-500',
                )}
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${item.id}-panel`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
