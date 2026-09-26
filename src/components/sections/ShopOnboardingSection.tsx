import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import {
  Store,
  SlidersHorizontal,
  MonitorCog,
  QrCode,
  ArrowRight,
} from 'lucide-react'

interface ShopOnboardingSectionProps {
  onGetStarted?: () => void
}

const onboardingSteps = [
  {
    step: '01',
    icon: Store,
    title: 'Register Your Shop',
    badge: 'Step 1 &bull; 2 Mins',
    description: 'Provide your shop name, contact number, and city. Access your Shop Console instantly.',
  },
  {
    step: '02',
    icon: SlidersHorizontal,
    title: 'Set Rates & Paper Options',
    badge: 'Step 2 &bull; Rate Card',
    description: 'Configure your per-page prices for single-sided B&W, duplex B&W, color, and paper sizes (A4, A3, Legal).',
  },
  {
    step: '03',
    icon: MonitorCog,
    title: 'Install Windows Print Agent',
    badge: 'Step 3 &bull; Windows 10/11',
    description: 'Download our lightweight desktop agent on your counter PC. It auto-discovers your connected printers.',
  },
  {
    step: '04',
    icon: QrCode,
    title: 'Receive Counter Standee',
    badge: 'Step 4 &bull; Start Orders',
    description: 'We ship an official acrylic QR standee to your address. Display it on your counter and start receiving pre-paid digital prints.',
  },
]

export function ShopOnboardingSection({ onGetStarted }: ShopOnboardingSectionProps) {
  return (
    <section id="shop-onboarding" className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-violet-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="dark">SIMPLE 4-STEP ONBOARDING</Badge>
          <h2 className="heading-lg text-white mt-2">How to Get Started as a Print Shop</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Get your counter digital in under 10 minutes with zero upfront machine investments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
          {onboardingSteps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xl font-black text-violet-400">
                      {s.step}
                    </span>
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-[9.5px] font-mono text-violet-300">
                      {s.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mt-4">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 flex-shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300/80 mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Strong Shop Owner CTA */}
        <div className="rounded-3xl border border-violet-500/40 bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl text-center max-w-3xl mx-auto w-full shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Ready to upgrade your print shop?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto leading-relaxed">
            Eliminate counter queue chaos, stop downloading random WhatsApp documents, and accept verified UPI orders.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onGetStarted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 active:scale-[0.98] transition-all"
            >
              <span>Get Started as a Print Shop</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
