import { motion } from 'framer-motion'
import { ShieldCheck, Clock, BadgeCheck, Users, Store, Lock } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const items = [
  { icon: Lock, title: 'Secure document uploads', description: 'Files are encrypted in transit and stored with strict access controls.' },
  { icon: Clock, title: 'Short-lived access', description: 'Document access links expire automatically once an order is complete.' },
  { icon: BadgeCheck, title: 'Verified payments', description: 'Orders unlock only after payment is independently verified and confirmed.' },
  { icon: Users, title: 'Role-based access', description: 'Shop staff see only what their role permits — nothing more.' },
  { icon: Store, title: 'Shop-specific order visibility', description: 'Each shop only ever sees the orders placed with them.' },
  { icon: ShieldCheck, title: 'Protected print workflow', description: 'Every print job requires explicit shop confirmation before printing.' },
]

/** Trust and security section presented as glowing glass cards on a dark gradient. */
export function SecuritySection() {
  return (
    <section
      id="security"
      className="section-padding relative overflow-hidden bg-bgdark bg-[radial-gradient(circle_at_20%_0%,#1a1042,transparent_55%),radial-gradient(circle_at_80%_100%,#0b1a3a,transparent_55%)]"
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="container-kagzzy relative flex flex-col items-center gap-8">
        <SectionHeading tone="dark" eyebrow="Security & Trust" title="Built to protect every document and every order." />

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-4 sm:p-5"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl2 bg-white/10 text-violet-300 shadow-glow">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-4 text-base font-bold text-white">{item.title}</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
