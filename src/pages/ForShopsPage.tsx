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
  Lock,
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
    icon: TrendingUp,
    badge: '+35% REVENUE',
    title: 'Higher Daily Order Volume',
    desc: 'Students and office workers prefer Kagzzy shops because they can send print orders remotely and skip long waiting lines.',
    accent: 'emerald',
  },
  {
    icon: Clock,
    badge: 'SAVE 3+ HOURS / DAY',
    title: 'Zero WhatsApp File Chaos',
    desc: 'Stop typing phone numbers, downloading attachments, dealing with corrupted files, or renaming customer PDFs manually.',
    accent: 'cyan',
  },
  {
    icon: ShieldCheck,
    badge: '100% PRE-PAID',
    title: 'Guaranteed Upfront UPI Settlement',
    desc: 'Every order is fully paid via UPI before you hit print. Say goodbye to abandoned paper bundles and uncollected printouts.',
    accent: 'violet',
  },
  {
    icon: Printer,
    badge: 'ZERO HARDWARE COST',
    title: 'Use Your Existing Printers',
    desc: 'No expensive new equipment needed. Kagzzy works seamlessly with your current Canon, HP, Epson, Ricoh, or Xerox machines.',
    accent: 'amber',
  },
  {
    icon: Users,
    badge: 'ZERO QUEUES',
    title: 'Eliminate Counter Crowding',
    desc: 'Rush-hour exam crowds order digitally from outside your shop. Your counter stays calm, organized, and stress-free.',
    accent: 'blue',
  },
  {
    icon: FileSpreadsheet,
    badge: 'AUTO RECONCILIATION',
    title: 'Automated Daily Accounts & GST',
    desc: 'Instant financial logs with daily revenue summaries, total pages printed, and exportable GST reconciliation reports.',
    accent: 'purple',
  },
]

const shopFeatures = [
  {
    icon: Cpu,
    title: 'Lightweight Windows Print Agent',
    subtitle: 'Plug & Play Win32 Service',
    description:
      'Installs in 2 minutes on your existing Windows PC. Runs silently in the background with negligible CPU load and routes jobs directly to local printer drivers.',
    tags: ['Windows 10/11 Compatible', '< 25MB RAM Usage', 'USB & LAN Support'],
    accent: 'violet',
  },
  {
    icon: Layers,
    title: 'Multi-Printer Load Balancing',
    subtitle: 'High-Speed Parallel Output',
    description:
      'Connect multiple laser printers simultaneously. Large 100+ page project reports or multi-copy orders are automatically split across available machines.',
    tags: ['Multi-Tray Routing', 'Auto Fallback', 'Double Throughput'],
    accent: 'cyan',
  },
  {
    icon: Zap,
    title: 'Explicit Operator "PRINT NOW" Control',
    subtitle: 'Zero Blind Auto-Printing',
    description:
      'You maintain total authority at the counter. Review document page counts and pricing, select printers automatically or manually, and trigger physical output only when you click "PRINT NOW". Zero wasted paper from unattended jobs.',
    tags: ['Operator "PRINT NOW" Trigger', 'Auto / Manual Printer Select', 'Anti-Waste Lock'],
    accent: 'amber',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Per-Page Rate Matrix',
    subtitle: 'Full Pricing Autonomy',
    description:
      'Set your shop’s exact per-page prices for A4, A3, Legal, black & white, full color, duplex discounts, and spiral/staple binding services.',
    tags: ['Dynamic Rate Card', 'Duplex Savings Rules', 'Binding Add-ons'],
    accent: 'emerald',
  },
  {
    icon: LayoutDashboard,
    title: 'Dual-Tier Operations & Shop Availability',
    subtitle: 'Open, Busy & Closed Modes',
    description:
      'Toggle availability between OPEN, BUSY (queue throttling during exam rush), and CLOSED. Separate machine-level Print Agent status from high-level business analytics.',
    tags: ['Open / Busy / Closed States', 'Queue Throttling', 'Dual-Tier Dashboard'],
    accent: 'blue',
  },
  {
    icon: Lock,
    title: 'Zero-Storage Privacy Architecture',
    subtitle: 'Automatic Memory Shredding',
    description:
      'Protect customer confidentiality and keep your computer storage uncluttered. Documents are automatically purged from local cache once marked collected.',
    tags: ['AES-256 in Transit', 'Zero Persistent Storage', 'Customer Trust'],
    accent: 'purple',
  },
]

const supportedBrands = [
  'Canon imageRUNNER',
  'HP LaserJet Pro',
  'Epson EcoTank & WorkForce',
  'Ricoh Aficio',
  'Konica Minolta bizhub',
  'Brother DCP Series',
  'Kyocera TASKalfa',
  'Xerox WorkCentre',
  'Lexmark MultiFunction',
  'Sharp MX Series',
]

export function ForShopsPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header — Unified Purple/Violet Brand Theme */}
      <PageHero
        badge="FOR PRINT SHOP OWNERS"
        title="Turn Your Xerox Shop into a"
        titleAccent="Digital Print Hub"
        description="Eliminate WhatsApp clutter, USB virus risks, and manual payment verification. Discover the business benefits and powerful platform features built specifically for photocopy centers."
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
          <a
            href="#shop-features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors text-center"
          >
            <span>Explore Features</span>
          </a>
          <Link
            to="/pricing"
            className="w-full sm:w-auto text-center rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-xs sm:text-sm font-bold text-violet-200 hover:bg-violet-500/20 hover:border-violet-500/50 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>View Pricing Plans</span>
            <ArrowRight className="h-3.5 w-3.5 text-violet-400" />
          </Link>
        </div>
      </PageHero>

      {/* Section 1: Business Benefits for Print Shops */}
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
            <h2 className="heading-lg text-white mt-2">Why 500+ Print Shops Switched to Kagzzy</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Designed from the ground up to solve the real operational bottlenecks of Indian photocopy and printing stores.
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
            <h2 className="heading-lg text-white mt-2">Powerful Features Built for Shop Efficiency</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Everything your staff needs to manage print queues, parallelize printer output, and track daily revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopFeatures.map((feat, i) => {
              const colors = accentMap[feat.accent] || accentMap.cyan
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className={`grid h-10 w-10 place-items-center rounded-xl ${colors.iconBg} ${colors.iconText} border ${colors.iconBorder}`}>
                        <feat.icon className="h-5 w-5" />
                      </span>
                      <span className={`text-[10px] font-mono ${colors.badgeText} ${colors.badgeBg} px-2.5 py-0.5 rounded-full border ${colors.badgeBorder}`}>
                        {feat.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mt-4">{feat.title}</h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{feat.description}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                    {feat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9.5px] font-medium text-slate-400"
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
          <Badge tone="dark">ZERO HARDWARE UPGRADE</Badge>
          <h2 className="heading-sm text-white mt-2 mb-2">Compatible with 100% of Existing Printers</h2>
          <p className="text-xs text-slate-400 mb-8 max-w-lg mx-auto">
            Whether connected via high-speed USB cable or office LAN network, Kagzzy communicates directly through native Windows drivers.
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

      {/* Section 4: Call to Action to Pricing Plans */}
      <section className="py-14 bg-[#070B18] relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-purple-700/20 via-indigo-700/20 to-cyan-500/10 blur-[150px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          <Badge tone="dark">START TODAY</Badge>
          <h2 className="heading-md text-white mt-2">Ready to Modernize Your Print Shop?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Start with our 100% free Starter Shop plan or choose a high-capacity tier with multi-printer load balancing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
            >
              <span>Explore Shop Owner Plans</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-all text-center"
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
