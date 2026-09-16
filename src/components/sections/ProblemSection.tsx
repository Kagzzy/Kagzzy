import { motion } from 'framer-motion'
import { MessageCircleWarning, EyeOff, ClipboardList } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { TiltCard } from '../ui/TiltCard'

const problems = [
  {
    icon: MessageCircleWarning,
    title: '01 — WhatsApp Chaos',
    description: 'Files, messages, print instructions, and payment details get mixed together.',
    glow: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-400',
    iconBg: 'bg-rose-500/15 text-rose-400 border border-rose-500/30',
  },
  {
    icon: EyeOff,
    title: '02 — No Visibility',
    description: 'Customers don’t always know whether their order was received, accepted, or ready.',
    glow: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
    iconBg: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  },
  {
    icon: ClipboardList,
    title: '03 — Manual Workflow',
    description: 'Shop staff spend time managing files and orders instead of serving customers.',
    glow: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    iconBg: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
  },
]

/** "The Problem" section: label + heading on the left, three tilting cards on the right. */
export function ProblemSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none border-t border-white/10">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-indigo-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          <Badge tone="dark">THE PROBLEM</Badge>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.6rem] leading-[1.2]">
            Printing shouldn’t feel complicated.
          </h2>
          <p className="text-base leading-relaxed text-slate-300/90 sm:text-lg max-w-md">
            Printing is still often a back-and-forth process — send files on WhatsApp, explain your requirements, wait for confirmation, and wonder when your prints will be ready.
          </p>
          <p className="text-sm leading-relaxed text-violet-300 font-semibold max-w-md">
            Kagzzy brings the process into one simple workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3.5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="animate-floatslow"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <TiltCard
                tiltStrength={6}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl hover:border-violet-500/40 transition-all shadow-xl hover:bg-white/[0.06] lg:col-span-1"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl2 ${p.iconBg}`}
                >
                  <p.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300/80">{p.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
