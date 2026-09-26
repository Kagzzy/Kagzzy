import { motion } from 'framer-motion'
import { completeWorkflow12Steps } from '../../data/steps'
import { Badge } from '../ui/Badge'
import { ArrowRight, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

interface OperationalWorkflow12StepsProps {
  id?: string
  showCta?: boolean
}

export function OperationalWorkflow12Steps({
  id = 'operational-workflow',
  showCta = true,
}: OperationalWorkflow12StepsProps) {
  return (
    <section
      id={id}
      className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none"
    >
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
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
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge tone="dark" className="gap-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300">
            <Workflow className="h-3.5 w-3.5" />
            END-TO-END FULFILLMENT WORKFLOW
          </Badge>
          <h2 className="heading-lg text-white mt-2">The Complete Kagzzy Journey</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-xl mx-auto">
            From the initial counter QR scan to secure cloud verification, shop operator review, and physical paper pickup — step by step.
          </p>
        </div>

        {/* 12-Step Grid Layout: 1 col on mobile, 2 cols on tablet, 3 on desktop, 4 on wide screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full">
          {completeWorkflow12Steps.map((stepItem, i) => {
            const Icon = stepItem.icon
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.45 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.06] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar: Step Number & Actor Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-lg font-black text-violet-400">
                      {String(stepItem.step).padStart(2, '0')}
                    </span>
                    <span className={`rounded-full border px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider ${stepItem.actorBadge}`}>
                      {stepItem.actor}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-violet-300 border border-white/10 group-hover:bg-violet-600/30 group-hover:border-violet-500/40 transition-colors flex-shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {stepItem.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300/80 mt-2.5 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Progress indicator at card bottom */}
                <div className="mt-4 pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-white/5 font-mono">
                  <span>Phase {stepItem.step <= 6 ? '1: Ordering' : '2: Fulfillment'}</span>
                  <span>{stepItem.step} of 12</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Optional Action Bar */}
        {showCta && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 text-center">
            <Link
              to="/for-customers"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
            >
              <span>Start Printing</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/for-shops"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors text-center"
            >
              <span>For Print Shop Owners</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
