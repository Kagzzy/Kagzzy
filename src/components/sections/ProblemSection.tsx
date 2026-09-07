import { motion } from 'framer-motion'
import { MessageCircleWarning, EyeOff, ClipboardList } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { TiltCard } from '../ui/TiltCard'

const problems = [
  {
    icon: MessageCircleWarning,
    title: 'WhatsApp chaos',
    description: 'Send files, make calls, repeat instructions, still not sure.',
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    icon: EyeOff,
    title: 'No visibility',
    description: 'Customers don’t know what’s happening with their orders.',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    icon: ClipboardList,
    title: 'Manual workflow',
    description: 'Shops manage everything manually, wasting valuable time.',
    bg: 'bg-sky-50',
    iconBg: 'bg-sky-100 text-sky-600',
  },
]

/** "The Problem" section: label + heading on the left, three tilting cards on the right. */
export function ProblemSection() {
  return (
    <section className="section-padding bg-lightbg">
      <div className="container-kagzzy grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          <Badge>The Problem</Badge>
          <h2 className="heading-lg text-textdark">Printing shouldn’t feel complicated.</h2>
          <p className="body-lg max-w-md">
            Too many steps. Too much back-and-forth. Kagzzy brings the entire workflow together.
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
                className={`elevated-card ${p.bg} flex items-start gap-3.5 rounded-2xl p-4 sm:p-5 lg:col-span-1`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl2 ${p.iconBg}`}
                >
                  <p.icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-textdark">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
