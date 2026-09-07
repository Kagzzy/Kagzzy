import { motion } from 'framer-motion'
import { Store, Users, FileText, Star } from 'lucide-react'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const stats = [
  { icon: Store, value: 500, suffix: '+', label: 'Print shops' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy users' },
  { icon: FileText, value: 1, suffix: 'M+', label: 'Documents printed' },
  { icon: Star, value: 4.9, suffix: '/5', label: 'Shop rating', decimals: 1 },
]

/** Dark glass stats panel that overlaps the bottom of the hero section. */
export function Stats() {
  return (
    <div className="relative z-20 -mt-16 px-4 sm:-mt-20 sm:px-6 lg:-mt-24">
      <div className="container-kagzzy">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-card gradient-border grid grid-cols-2 gap-6 rounded-xl4 px-6 py-8 shadow-elevated sm:px-10 sm:py-10 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-white/10 text-violet-300">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </p>
              <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
