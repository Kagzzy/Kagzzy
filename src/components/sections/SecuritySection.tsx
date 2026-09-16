import { motion } from 'framer-motion'
import { ShieldCheck, Clock, BadgeCheck, Users, Store, Lock } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const items = [
  { icon: Lock, title: 'Secure Document Uploads', description: 'Files are securely transferred and stored with protected access.' },
  { icon: Clock, title: 'Automatic Document Cleanup', description: 'Documents are automatically removed from active storage after 24 hours.' },
  { icon: BadgeCheck, title: 'Verified Payments', description: 'Orders proceed only after payment confirmation.' },
  { icon: Users, title: 'Private File Access', description: 'Only the authorized shop receives access to print your order.' },
  { icon: Store, title: 'Shop-Specific Order Isolation', description: 'Shops only access orders directed to their location.' },
  { icon: ShieldCheck, title: 'Protected Print Workflow', description: 'Jobs are sent to printers only after shop acceptance.' },
]

/** Trust and security section presented as glowing glass cards on a dark gradient. */
export function SecuritySection() {
  return (
    <section
      id="security"
      className="section-padding relative overflow-hidden bg-[#070B18] border-t border-white/10"
    >
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
      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8">
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
