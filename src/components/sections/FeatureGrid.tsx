import { motion } from 'framer-motion'
import { features } from '../../data/features'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * Eight-card feature grid: 4 columns on desktop, 2 on tablet, and a
 * horizontally scrollable single row on mobile.
 */
export function FeatureGrid() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-kagzzy flex flex-col items-center gap-8">
        <SectionHeading eyebrow="Features" title="Everything you need for modern printing." />

        <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group elevated-card gradient-border relative min-w-[240px] flex-shrink-0 snap-start p-4 sm:p-5 transition-shadow duration-300 hover:shadow-glow sm:min-w-0"
            >
              <motion.div
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl2 text-white"
                style={{
                  background: `linear-gradient(135deg, ${feature.colorFrom}, ${feature.colorTo})`,
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-4 text-base font-bold text-textdark">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
