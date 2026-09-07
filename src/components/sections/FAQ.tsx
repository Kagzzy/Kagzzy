import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, HelpCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqItems } from '../../data/faq'
import { Badge } from '../ui/Badge'
import clsx from 'clsx'

/** Frequently asked questions section for the home page, styled in dark hero theme. */
export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-purple-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center max-w-xl">
          <Badge tone="dark">GOT QUESTIONS?</Badge>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.6rem] leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Everything you need to know about Kagzzy for students, customers, and shop owners.
          </p>
        </div>

        {/* Accordion list */}
        <div className="w-full max-w-3xl flex flex-col gap-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={clsx(
                  'overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl',
                  isOpen
                    ? 'border-violet-500/50 bg-violet-950/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]',
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white sm:text-lg flex items-center gap-3">
                    <HelpCircle className={clsx('h-5 w-5 flex-shrink-0 transition-colors', isOpen ? 'text-violet-400' : 'text-slate-400')} />
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={clsx(
                      'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors',
                      isOpen
                        ? 'bg-violet-600 text-white shadow-md shadow-violet-600/40'
                        : 'bg-white/10 text-slate-300',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-white/10 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-300/90 sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* View full FAQ knowledge base CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 text-center">
          <span className="text-xs sm:text-sm text-slate-400">Have a more specific question?</span>
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-300 hover:text-white transition-colors"
          >
            <span>Visit Full Help Center &amp; Search</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
