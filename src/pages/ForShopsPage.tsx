import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
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
  },
  {
    icon: Layers,
    title: 'Multi-Printer Load Balancing',
    subtitle: 'High-Speed Parallel Output',
    description:
      'Connect multiple laser printers simultaneously. Large 100+ page project reports or multi-copy orders are automatically split across available machines.',
    tags: ['Multi-Tray Routing', 'Auto Fallback', 'Double Throughput'],
  },
  {
    icon: Zap,
    title: 'Explicit Operator "PRINT NOW" Control',
    subtitle: 'Zero Blind Auto-Printing',
    description:
      'You maintain total authority at the counter. Review document page counts and pricing, select printers automatically or manually, and trigger physical output only when you click "PRINT NOW". Zero wasted paper from unattended jobs.',
    tags: ['Operator "PRINT NOW" Trigger', 'Auto / Manual Printer Select', 'Anti-Waste Lock'],
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Per-Page Rate Matrix',
    subtitle: 'Full Pricing Autonomy',
    description:
      'Set your shop’s exact per-page prices for A4, A3, Legal, black & white, full color, duplex discounts, and spiral/staple binding services.',
    tags: ['Dynamic Rate Card', 'Duplex Savings Rules', 'Binding Add-ons'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dual-Tier Operations & Shop Availability',
    subtitle: 'Open, Busy & Closed Modes',
    description:
      'Toggle availability between OPEN, BUSY (queue throttling during exam rush), and CLOSED. Separate machine-level Print Agent status from high-level business analytics.',
    tags: ['Open / Busy / Closed States', 'Queue Throttling', 'Dual-Tier Dashboard'],
  },
  {
    icon: Lock,
    title: 'Zero-Storage Privacy Architecture',
    subtitle: 'Automatic Memory Shredding',
    description:
      'Protect customer confidentiality and keep your computer storage uncluttered. Documents are automatically purged from local cache once marked collected.',
    tags: ['AES-256 in Transit', 'Zero Persistent Storage', 'Customer Trust'],
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
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="FOR PRINT SHOP OWNERS"
        title="Turn Your Xerox Shop into a"
        titleAccent="Digital Print Hub"
        description="Eliminate WhatsApp clutter, USB virus risks, and manual payment verification. Discover the business benefits and powerful platform features built specifically for photocopy centers."
        bgImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop&q=80"
        accentColor="emerald"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <a
            href="#shop-benefits"
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-transform"
          >
            Explore Shop Benefits
          </a>
          <a
            href="#shop-features"
            className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Explore Features
          </a>
          <Link
            to="/pricing"
            className="w-full sm:w-auto text-center rounded-full bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>View Pricing Plans</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Section 1: Business Benefits for Print Shops */}
      <section id="shop-benefits" className="section-padding bg-[#090E24]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge tone="dark">BUSINESS BENEFITS</Badge>
            <h2 className="heading-lg text-white mt-2">Why 500+ Print Shops Switched to Kagzzy</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Designed from the ground up to solve the real operational bottlenecks of Indian photocopy and printing stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass-card flex flex-col justify-between rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 shadow-lg bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30">
                      <benefit.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                      {benefit.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Platform Features for Print Shops */}
      <section id="shop-features" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-700/15 blur-[150px]"
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
            {shopFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                      <feat.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Supported Printer Brands */}
      <section className="py-14 bg-[#090E24]/60 relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
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
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 flex items-center gap-1.5 hover:border-emerald-500/30 transition-colors"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
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
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-emerald-700/15 blur-[140px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          <h2 className="heading-md text-white">Ready to Modernize Your Print Shop?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Start with our 100% free Starter Shop plan or choose a high-capacity tier with multi-printer load balancing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-transform text-center"
            >
              <span>Explore Shop Owner Plans</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors text-center"
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
