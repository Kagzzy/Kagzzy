import { motion } from 'framer-motion'
import { features } from '../../data/features'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Eight-card feature grid: 4 columns on desktop, 2 on tablet, and a
 * horizontally scrollable single row on mobile.
 */
export function FeatureGrid() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none border-t border-white/10">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[35rem] w-[35rem] rounded-full bg-indigo-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-700/15 blur-[150px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8">
        <SectionHeading tone="dark" eyebrow="Features" title="Everything you need for modern printing." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/[0.06] shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${feature.colorFrom}, ${feature.colorTo})`,
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-4 text-base font-bold text-white">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
