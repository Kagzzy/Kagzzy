import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { pricingPlans } from '../../data/pricing'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { TiltCard } from '../ui/TiltCard'

/** Two-plan pricing section with a subtly highlighted recommended plan. */
export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-kagzzy flex flex-col items-center gap-8">
        <SectionHeading eyebrow="Pricing" title="Simple plans for growing print shops." />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <TiltCard
                tiltStrength={4}
                className={`relative flex h-full flex-col gap-5 rounded-2xl p-6 sm:p-7 ${
                  plan.highlighted
                    ? 'gradient-border bg-bgdark text-white shadow-elevated'
                    : 'elevated-card'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-8 flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-bluebrand-500 px-3 py-1 text-[11px] font-bold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" /> Recommended
                  </span>
                )}
                <div>
                  <h3 className={`text-xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-textdark'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-muted'}`}>{plan.tagline}</p>
                </div>

                {plan.priceNote && (
                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      plan.highlighted ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-muted'
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                )}

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2.5 text-sm ${
                        plan.highlighted ? 'text-slate-200' : 'text-textdark'
                      }`}
                    >
                      <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlighted ? 'text-mint-400' : 'text-mint-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'gradient' : 'secondary'}
                  className="w-full"
                  showArrow
                >
                  {plan.cta}
                </Button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
