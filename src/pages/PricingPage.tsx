import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import { CheckCircle2, ArrowRight, Sparkles, Store, ShieldCheck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const shopPlans = [
  {
    name: 'Starter Shop',
    tagline: 'Ideal for local Xerox corners and stationery shops stepping into digital printing.',
    price: '₹0',
    duration: '/ month',
    highlighted: false,
    badge: '100% Free Forever',
    description: 'Everything you need to eliminate WhatsApp file clutter and accept automated digital print orders.',
    features: [
      'Official Acrylic QR Standee delivered free',
      'Windows Print Agent (1 printer connected)',
      'Up to 300 digital orders / month',
      'Direct UPI pre-payment verification',
      'Instant counter notification chime',
      'Standard email & WhatsApp support',
    ],
    cta: 'Start Free Forever',
  },
  {
    name: 'Pro Merchant',
    tagline: 'For busy campus print shops and high-volume commercial photocopy centers.',
    price: '₹499',
    duration: '/ month',
    highlighted: true,
    badge: 'Most Popular for High Volume',
    description: 'Unlock multi-printer parallel dispatch, unlimited orders, and automated GST reporting.',
    features: [
      'Everything in Starter Shop',
      'Connect up to 4 parallel laser printers',
      'Unlimited digital orders with zero monthly cap',
      'Automated job load-balancing across trays',
      'Daily automated GST accounting exports',
      'Priority 1-hour merchant phone support',
      'Custom per-page rate overrides by document type',
    ],
    cta: 'Upgrade to Pro Merchant',
  },
  {
    name: 'Campus Network',
    tagline: 'For multi-store chains, franchise operators, and university print networks.',
    price: '₹1,499',
    duration: '/ month',
    highlighted: false,
    badge: 'Multi-Branch Enterprise',
    description: 'Centralized multi-store management with enterprise-grade operator roles and audit logs.',
    features: [
      'Unlimited branch locations under one portal',
      'Unlimited printers across all branches',
      'Custom shop branding on all QR standees',
      'Centralized operator permissions & audit logs',
      'API access for campus card & ERP billing',
      'Dedicated Account Manager with SLA',
    ],
    cta: 'Contact Enterprise Team',
  },
]

const comparisonRows = [
  { feature: 'Monthly Digital Orders', starter: 'Up to 300 orders', pro: 'Unlimited orders', enterprise: 'Unlimited orders' },
  { feature: 'Connected Printers', starter: '1 Machine', pro: 'Up to 4 Machines', enterprise: 'Unlimited Machines' },
  { feature: 'Platform Commission on Orders', starter: '0% (Keep 100%)', pro: '0% (Keep 100%)', enterprise: '0% (Keep 100%)' },
  { feature: 'Official Counter QR Standee', starter: 'Free Included', pro: 'Free Included', enterprise: 'Custom Branded' },
  { feature: 'Parallel Job Load Balancing', starter: '—', pro: 'Included', enterprise: 'Advanced Multi-Queue' },
  { feature: 'Daily GST Accounting Export', starter: '—', pro: 'Included', enterprise: 'Automated ERP Sync' },
  { feature: 'Merchant Support Tier', starter: 'Standard (WhatsApp)', pro: 'Priority (1-Hour SLA)', enterprise: 'Dedicated Account Manager' },
]

export function PricingPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header — Matching Purple/Violet Brand Palette */}
      <PageHero
        badge="PRINT SHOP OWNER PLANS"
        title="Simple, Transparent Plans for"
        titleAccent="Print Shop Owners"
        description="Supercharge your counter capacity with 0% commission on orders. Choose a predictable monthly plan that scales with your daily print volume."
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-sm sm:max-w-none mx-auto px-4">
          <a
            href="#plans"
            className="w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform text-center"
          >
            Explore Plans
          </a>
          <Link
            to="/for-shops"
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors text-center"
          >
            See Shop Benefits &amp; Features
          </Link>
        </div>
      </PageHero>

      {/* Main 3 Shop Owner Plans */}
      <section id="plans" className="section-padding bg-[#090E24]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto px-2">
            <Badge tone="dark" className="border-violet-500/30 bg-violet-500/15 text-violet-200">
              ZERO COMMISSIONS
            </Badge>
            <h2 className="heading-lg text-white mt-2">Pick the Right Plan for Your Counter</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Every plan includes 100% pre-paid UPI verification, our lightweight Windows print agent, and free counter standee delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {shopPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-all backdrop-blur-xl shadow-xl ${
                  plan.highlighted
                    ? 'border-violet-500/60 bg-gradient-to-b from-violet-500/[0.14] via-slate-900/95 to-slate-950 ring-2 ring-violet-500/30 shadow-[0_0_35px_rgba(139,92,246,0.18)] lg:-translate-y-2'
                    : 'border-white/10 bg-white/[0.04] hover:border-violet-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold ${
                        plan.highlighted
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'bg-white/10 text-slate-300 border border-white/10'
                      }`}
                    >
                      {plan.highlighted && <Sparkles className="h-3 w-3 text-violet-400" />}
                      {plan.badge}
                    </span>
                    <Store className={`h-5 w-5 ${plan.highlighted ? 'text-violet-400' : 'text-slate-400'}`} />
                  </div>

                  <h3 className="text-2xl font-black text-white mt-4">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{plan.tagline}</p>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-white/10 pb-6">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-display">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{plan.duration}</span>
                  </div>

                  <p className="text-xs text-slate-300 mt-4 font-medium leading-relaxed">{plan.description}</p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3 text-xs text-slate-300">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <Link
                    to="/for-shops"
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:brightness-110'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Value Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <ShieldCheck className="h-5 w-5 text-emerald-400 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-white">0% Transaction Fee</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Every rupee paid by customer goes straight to your UPI ID.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <Store className="h-5 w-5 text-violet-400 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-white">Existing Printers Work</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Compatible with all Canon, HP, Epson, Ricoh &amp; Xerox machines.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <Zap className="h-5 w-5 text-cyan-400 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-white">Cancel Anytime</p>
              <p className="text-[11px] text-slate-400 mt-0.5">No long-term contracts. Pause or switch plans whenever you want.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table — Mobile Horizontal Scroll Optimized */}
      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-700/15 blur-[150px]"
        />
        <div className="container-kagzzy max-w-5xl relative z-10">
          <div className="text-center mb-8 sm:mb-10 px-2">
            <h2 className="heading-md text-white">Detailed Plan Comparison</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Find the exact plan capacity tailored to your daily print volume.
            </p>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400 mb-3 bg-white/[0.04] py-1.5 px-3 rounded-lg border border-white/10 w-fit mx-auto">
            <span className="text-violet-400">↔</span> Swipe horizontally to compare all features
          </div>

          {/* Table Container with safe horizontal overflow */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl -mx-2 sm:mx-0">
            <table className="w-full min-w-[620px] text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/[0.04] text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5 w-2/5">Feature</th>
                  <th className="p-4 sm:p-5 text-slate-200">Starter Shop</th>
                  <th className="p-4 sm:p-5 text-violet-300 font-extrabold">Pro Merchant</th>
                  <th className="p-4 sm:p-5 text-cyan-300 font-bold">Campus Network</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-300">{row.starter}</td>
                    <td className="p-4 sm:p-5 text-violet-300 font-semibold">{row.pro}</td>
                    <td className="p-4 sm:p-5 text-cyan-300 font-medium">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise / College Campus Inquiries */}
      <section className="section-padding bg-[#090E24]/60 relative overflow-hidden text-center border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-purple-700/15 blur-[140px]"
        />
        <div className="container-kagzzy max-w-3xl px-4 relative z-10">
          <h2 className="heading-md text-white">Need a Custom Setup for Your College or Chain?</h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto leading-relaxed">
            We offer bespoke installations with campus card integration, automated billing, and localized support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/for-shops"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform"
            >
              <span>Explore Shop Benefits &amp; Features</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/faq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <span>Have Questions? Read the FAQ</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
