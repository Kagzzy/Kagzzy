import { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const consumerRates = [
  { service: 'B&W Single Sided (A4)', rate: '₹1.50 / page', desc: 'Crisp 1200 DPI laser text' },
  { service: 'B&W Duplex / Both Sides (A4)', rate: '₹1.00 / page', desc: 'Eco paper-saving mode (Save 33%)' },
  { service: 'Full Color Laser (A4)', rate: '₹5.00 / page', desc: 'Rich photo-grade color reproduction' },
  { service: 'Color Duplex (A4)', rate: '₹8.00 / sheet', desc: 'Both sides full color presentation' },
  { service: 'Corner Stapling', rate: '₹2.00 / doc', desc: 'Heavy duty corner staple' },
  { service: 'Spiral Binding (up to 100 pgs)', rate: '₹35.00 / book', desc: 'Clear sheet cover + black comb spine' },
]

const merchantPlans = [
  {
    name: 'Starter Shop',
    tagline: 'Ideal for local Xerox corners trying digital printing.',
    price: '₹0',
    duration: '/ month',
    highlighted: false,
    badge: '100% Free Forever',
    features: [
      'Official Acrylic QR Standee delivered free',
      'Windows Print Agent (1 printer connected)',
      'Up to 300 digital orders / month',
      'Direct UPI pre-payment verification',
      'Standard email & WhatsApp support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro Merchant',
    tagline: 'For busy campus shops and commercial Xerox hubs.',
    price: '₹499',
    duration: '/ month',
    highlighted: true,
    badge: 'Most Popular for High-Volume',
    features: [
      'Everything in Starter Shop',
      'Connect up to 4 parallel printers',
      'Unlimited digital orders with zero cap',
      'Automated job load-balancing',
      'Daily automated GST accounting exports',
      'Priority 1-hour merchant phone support',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Campus Network',
    tagline: 'For multi-store chains and institutional print vendors.',
    price: '₹1,499',
    duration: '/ month',
    highlighted: false,
    badge: 'Multi-Branch',
    features: [
      'Unlimited branch locations under one portal',
      'Unlimited printers across all branches',
      'Custom branding on QR standees',
      'Centralized operator permissions & logs',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Enterprise',
  },
]

export function PricingPage() {
  const [tab, setTab] = useState<'consumer' | 'merchant'>('consumer')

  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="HONEST & TRANSPARENT"
        title="Simple, Fair Pricing for"
        titleAccent="Everyone"
        description="Zero hidden convenience charges for customers. Predictable flat plans for print shops with 0% transaction commission fees."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
        accentColor="amber"
      >
        {/* Segmented Switcher */}
        <div className="inline-flex rounded-2xl bg-slate-900/90 border border-white/15 p-1.5 shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setTab('consumer')}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              tab === 'consumer'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            For Students &amp; Customers
          </button>
          <button
            type="button"
            onClick={() => setTab('merchant')}
            className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              tab === 'merchant'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            For Print Shop Owners
          </button>
        </div>
      </PageHero>

      {/* Consumer Rates Tab */}
      {tab === 'consumer' && (
        <section className="section-padding bg-[#090E24]/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="container-kagzzy max-w-4xl relative z-10">
            <div className="text-center mb-8">
              <h2 className="heading-md text-white">Standard Printing Rates</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Rates apply across all participating Kagzzy local Xerox and stationery partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {consumerRates.map((item) => (
                <div
                  key={item.service}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl hover:border-amber-500/40 transition-all shadow-md"
                >
                  <div className="flex items-baseline justify-between border-b border-white/10 pb-2">
                    <h3 className="text-sm font-bold text-white">{item.service}</h3>
                    <span className="text-base font-black text-amber-400">{item.rate}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-center text-xs text-emerald-300 shadow-md">
              <span className="font-bold">Zero Platform Markup:</span> What you see is what you pay.
              No platform convenience fees, no hidden gateway taxes on student prints.
            </div>
          </div>
        </section>
      )}

      {/* Merchant Subscription Tab */}
      {tab === 'merchant' && (
        <section className="section-padding bg-[#090E24]/70 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="container-kagzzy relative z-10">
            <div className="text-center mb-10">
              <h2 className="heading-lg text-white">Print Shop Owner Plans</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Upgrade your counter capacity. Flat monthly rates, zero percent cut from customer print jobs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {merchantPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all backdrop-blur-xl shadow-xl ${
                    plan.highlighted
                      ? 'border-amber-400/50 bg-gradient-to-b from-amber-500/[0.08] via-slate-900 to-slate-950 ring-1 ring-amber-400/30 -translate-y-2'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <div>
                    <span className="inline-block rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold text-amber-300 mb-3">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-black text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.tagline}</p>

                    <div className="mt-6 flex items-baseline gap-1 border-b border-white/10 pb-6">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-xs font-semibold text-slate-400">{plan.duration}</span>
                    </div>

                    <ul className="mt-6 space-y-3 text-xs text-slate-300">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/for-shops#standee-form"
                      className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30 hover:brightness-110'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enterprise / College Campus Inquiries */}
      <section className="section-padding bg-[#070B18] text-center border-t border-white/10">
        <div className="container-kagzzy">
          <h2 className="heading-md text-white">Need a Custom Setup for Your College or Chain?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            We offer bespoke installations with campus card integration, automated billing, and localized support.
          </p>
          <div className="mt-6">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <span>Have Questions? Read the FAQ</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
