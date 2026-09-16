import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import { PrinterIntegration } from '../components/sections/PrinterIntegration'
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  Printer,
  Users,
  FileSpreadsheet,
  Cpu,
  Layers,
  SlidersHorizontal,
  LayoutDashboard,
  Zap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const accentMap: Record<
  string,
  { iconBg: string; iconText: string; iconBorder: string; badgeBg: string; badgeBorder: string; badgeText: string }
> = {
  emerald: {
    iconBg: 'bg-emerald-600/20',
    iconText: 'text-emerald-300',
    iconBorder: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-300',
  },
  cyan: {
    iconBg: 'bg-cyan-600/20',
    iconText: 'text-cyan-300',
    iconBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/15',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-300',
  },
  violet: {
    iconBg: 'bg-violet-600/20',
    iconText: 'text-violet-300',
    iconBorder: 'border-violet-500/30',
    badgeBg: 'bg-violet-500/15',
    badgeBorder: 'border-violet-500/30',
    badgeText: 'text-violet-300',
  },
  amber: {
    iconBg: 'bg-amber-600/20',
    iconText: 'text-amber-300',
    iconBorder: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-300',
  },
  blue: {
    iconBg: 'bg-blue-600/20',
    iconText: 'text-blue-300',
    iconBorder: 'border-blue-500/30',
    badgeBg: 'bg-blue-500/15',
    badgeBorder: 'border-blue-500/30',
    badgeText: 'text-blue-300',
  },
  purple: {
    iconBg: 'bg-purple-600/20',
    iconText: 'text-purple-300',
    iconBorder: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/15',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-300',
  },
}

const shopBenefits = [
  {
    icon: Users,
    badge: 'ORGANIZED COUNTER',
    title: 'Less Counter Chaos',
    desc: 'Customers order digitally instead of crowding the counter to send files.',
    accent: 'blue',
  },
  {
    icon: Clock,
    badge: 'ZERO MESSAGING CHAOS',
    title: 'No WhatsApp Clutter',
    desc: 'Stop downloading files manually from messaging apps, shared drives, and chats.',
    accent: 'cyan',
  },
  {
    icon: ShieldCheck,
    badge: 'CONFIRMED PAYMENTS',
    title: 'Upfront Payment Confirmation',
    desc: 'Orders proceed after payment is confirmed, reducing wasted prints and abandoned jobs.',
    accent: 'emerald',
  },
  {
    icon: Printer,
    badge: 'EXISTING EQUIPMENT',
    title: 'Use Your Existing Printers',
    desc: 'Connect your current desktop or commercial printers through the Kagzzy Print Agent on Windows.',
    accent: 'amber',
  },
  {
    icon: Zap,
    badge: 'FASTER PICKUPS',
    title: 'Faster Turnaround',
    desc: 'Prepare prints in advance so customers can quickly pick them up without waiting in line.',
    accent: 'violet',
  },
  {
    icon: TrendingUp,
    badge: 'LIVE TRACKING',
    title: 'Better Order Visibility',
    desc: 'Track orders through every stage—from placement to print completion and pickup.',
    accent: 'purple',
  },
]

const shopFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Shop Dashboard',
    subtitle: 'Central Hub',
    description: 'View incoming, active, and completed orders in one clean, unified interface.',
    tags: ['Real-Time Queue', 'Daily Volume', 'Order Statuses'],
    accent: 'violet',
  },
  {
    icon: Layers,
    title: 'Order Management',
    subtitle: 'Full Details',
    description: 'Inspect file details, page counts, color choices, paper formats, and customer instructions.',
    tags: ['Page Counts', 'Color / B&W', 'Copies & Sizing'],
    accent: 'cyan',
  },
  {
    icon: Zap,
    title: 'Accept or Reject Orders',
    subtitle: 'Operator Control',
    description: 'Maintain full control over which jobs your shop accepts before any printing begins.',
    tags: ['Explicit Approval', 'Anti-Waste Lock', 'Queue Management'],
    accent: 'amber',
  },
  {
    icon: SlidersHorizontal,
    title: 'Pricing Management',
    subtitle: 'Custom Rate Cards',
    description: 'Set your shop’s per-page rates for black & white, color, duplex, and page formats.',
    tags: ['Per-Page Rates', 'Duplex Rules', 'Paper Sizes'],
    accent: 'emerald',
  },
  {
    icon: Cpu,
    title: 'Print Queue',
    subtitle: 'Organized Workflow',
    description: 'Keep orders organized and move them smoothly from initial review to completion.',
    tags: ['Order Sequencing', 'Prioritized Output', 'Status Progression'],
    accent: 'blue',
  },
  {
    icon: Clock,
    title: 'Pickup Management',
    subtitle: 'Counter Ready',
    description: 'Clearly mark orders as ready so customer counter pickups are fast, simple, and organized.',
    tags: ['Ready Alerts', 'Short Pickup Code', 'Zero Lineups'],
    accent: 'purple',
  },
  {
    icon: FileSpreadsheet,
    title: 'Order History',
    subtitle: 'Historical Records',
    description: 'Keep track of completed prints, daily volume trends, and past customer orders.',
    tags: ['Daily Summaries', 'Archived Jobs', 'Exportable Logs'],
    accent: 'emerald',
  },
  {
    icon: Users,
    title: 'Shop Staff Access',
    subtitle: 'Team Friendly',
    description: 'Allow counter operators and floor staff to manage incoming jobs efficiently.',
    tags: ['Counter Roles', 'Simple Operator UI', 'Secure Access'],
    accent: 'cyan',
  },
]

const supportedBrands = [
  'Canon',
  'HP',
  'Epson',
  'Brother',
  'Xerox',
  'Ricoh',
  'Konica Minolta',
]

export function ForShopsPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Hero Header */}
      <PageHero
        badge="FOR PRINT SHOP OWNERS"
        title="Turn Your Print Shop into a"
        titleAccent="Digital Print Hub."
        description="Eliminate WhatsApp clutter, unverified payments, and long counter queues. Kagzzy helps local print shops manage orders, pricing, and printing with simple digital workflows."
        bgImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <a
            href="#shop-benefits"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
          >
            <span>Explore Shop Benefits</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors text-center"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/pricing"
            className="w-full sm:w-auto text-center rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-xs sm:text-sm font-bold text-violet-200 hover:bg-violet-500/20 hover:border-violet-500/50 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>View Pricing</span>
            <ArrowRight className="h-3.5 w-3.5 text-violet-400" />
          </Link>
        </div>
      </PageHero>

      {/* Section 1: Why Print Shops Choose Kagzzy */}
      <section id="shop-benefits" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
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
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge tone="dark">BUSINESS BENEFITS</Badge>
            <h2 className="heading-lg text-white mt-2">Why Print Shops Choose Kagzzy</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Designed to solve everyday operational challenges in local print shops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopBenefits.map((benefit, i) => {
              const colors = accentMap[benefit.accent] || accentMap.violet
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card flex flex-col justify-between rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 transition-all shadow-lg bg-white/[0.04] hover:bg-white/[0.06]"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className={`grid h-10 w-10 place-items-center rounded-xl ${colors.iconBg} ${colors.iconText} border ${colors.iconBorder}`}>
                        <benefit.icon className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full ${colors.badgeBg} border ${colors.badgeBorder} px-2.5 py-0.5 text-[10px] font-bold ${colors.badgeText}`}>
                        {benefit.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Platform Features for Print Shops */}
      <section id="shop-features" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-indigo-700/15 blur-[150px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[140px]"
        />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge tone="dark">PLATFORM FEATURES</Badge>
            <h2 className="heading-lg text-white mt-2">Built for Simple, Reliable Shop Operations</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Everything your shop needs to receive, manage, and complete print jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {shopFeatures.map((feat, i) => {
              const colors = accentMap[feat.accent] || accentMap.cyan
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className={`grid h-9 w-9 place-items-center rounded-xl ${colors.iconBg} ${colors.iconText} border ${colors.iconBorder}`}>
                        <feat.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className={`text-[10px] font-mono ${colors.badgeText} ${colors.badgeBg} px-2 py-0.5 rounded-full border ${colors.badgeBorder}`}>
                        {feat.subtitle}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mt-3.5">{feat.title}</h3>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{feat.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1">
                    {feat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 border border-white/10 px-1.5 py-0.5 text-[9px] font-medium text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Windows Print Agent & Printer Integration */}
      <div id="printer-integration" className="border-t border-white/10">
        <PrinterIntegration />
      </div>

      {/* Section 3: Supported Printer Brands */}
      <section className="py-14 bg-[#070B18] relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-indigo-700/15 blur-[140px]"
        />
        <div className="container-kagzzy relative z-10">
          <Badge tone="dark">PRINTER COMPATIBILITY</Badge>
          <h2 className="heading-sm text-white mt-2 mb-2">Works with Your Existing Printers</h2>
          <p className="text-xs text-slate-400 mb-8 max-w-lg mx-auto">
            Connect the printers you already rely on. Kagzzy connects through the Kagzzy Print Agent on Windows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {supportedBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 flex items-center gap-1.5 hover:border-violet-500/40 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action & Shop Owner Portal Anchor */}
      <section id="login" className="py-16 bg-[#070B18] relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-purple-700/20 via-indigo-700/20 to-cyan-500/10 blur-[150px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          <Badge tone="dark">SHOP OWNER PORTAL</Badge>
          <h2 className="heading-md text-white mt-2">Ready to make your print shop more efficient?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Join Kagzzy and bring simple digital ordering to your counter. Sign in to your shop dashboard or explore our pricing plans to get started.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-all text-center"
            >
              <span>See How It Works</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
