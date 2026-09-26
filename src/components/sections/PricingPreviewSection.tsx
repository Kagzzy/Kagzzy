import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import { CheckCircle2, ArrowRight, Sparkles, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const previewPlans = [
  {
    name: 'Starter Shop',
    price: '₹0',
    duration: '/ month',
    badge: 'Free Forever',
    highlighted: false,
    description: 'Perfect for local stationery shops & single Xerox counters.',
    features: [
      'Official Acrylic QR Standee delivered free',
      'Windows Print Agent (1 printer connected)',
      'Up to 300 digital orders / month',
      'Direct UPI pre-payment verification',
    ],
  },
  {
    name: 'Pro Merchant',
    price: '₹499',
    duration: '/ month',
    badge: 'Most Popular',
    highlighted: true,
    description: 'For busy campus photocopy centers & multi-printer shops.',
    features: [
      'Connect up to 4 parallel laser printers',
      'Unlimited digital orders with zero monthly cap',
      'Parallel job load balancing across trays',
      'Daily revenue & order volume analytics',
      'Priority merchant phone & WhatsApp support',
    ],
  },
  {
    name: 'Campus Network',
    price: '₹1,499',
    duration: '/ month',
    badge: 'Multi-Branch',
    highlighted: false,
    description: 'For commercial print franchises & university chains.',
    features: [
      'Unlimited branch locations & printers',
      'Custom branding on counter standees',
      'Role-based operator permissions & audit logs',
      'Dedicated Account Manager with SLA',
    ],
  },
]

export function PricingPreviewSection() {
  return (
    <section
      id="pricing-preview"
      className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-[32rem] w-[32rem] rounded-full bg-violet-700/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="dark">PRINT SHOP SUBSCRIPTIONS</Badge>
          <h2 className="heading-lg text-white mt-2">Fair, Predictable Pricing for Print Shops</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Zero commission on customer prints. Every rupee goes directly to your shop UPI. Choose a plan matching your printer capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl items-stretch">
          {previewPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-2xl border p-6 flex flex-col justify-between backdrop-blur-xl transition-all shadow-xl ${
                plan.highlighted
                  ? 'border-violet-500/60 bg-gradient-to-b from-violet-500/[0.14] via-slate-900/95 to-slate-950 ring-2 ring-violet-500/30 shadow-[0_0_35px_rgba(139,92,246,0.18)] lg:-translate-y-2'
                  : 'border-white/10 bg-white/[0.03] hover:border-violet-500/30'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      plan.highlighted
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                        : 'bg-white/10 text-slate-300 border border-white/10'
                    }`}
                  >
                    {plan.highlighted && <Sparkles className="h-3 w-3 text-violet-400" />}
                    {plan.badge}
                  </span>
                  <Store className={`h-4.5 w-4.5 ${plan.highlighted ? 'text-violet-400' : 'text-slate-400'}`} />
                </div>

                <h3 className="text-xl font-bold text-white mt-4">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1.5 border-b border-white/10 pb-5">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{plan.duration}</span>
                </div>

                <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  to="/pricing"
                  className={`w-full py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>View Plan Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Need a full comparison table or bespoke college campus deployment?</span>
          <Link to="/pricing" className="text-violet-300 font-bold hover:underline inline-flex items-center gap-1">
            <span>Explore All Plans</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  )
}
