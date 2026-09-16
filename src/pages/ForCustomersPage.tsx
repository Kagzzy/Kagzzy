import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import {
  Zap,
  ShieldCheck,
  Percent,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Layers,
  SlidersHorizontal,
  FileCheck,
  QrCode,
  Sparkles,
  Lock,
  Clock,
  Store,
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

const customerBenefits = [
  {
    icon: Smartphone,
    badge: 'DIRECT UPLOAD',
    title: 'Upload From Your Phone',
    desc: 'No need to email files or share your personal phone number on WhatsApp.',
    accent: 'blue',
  },
  {
    icon: SlidersHorizontal,
    badge: 'FLEXIBLE CONTROLS',
    title: 'Choose Your Print Settings',
    desc: 'Select black & white or color, single or double-sided, and number of copies.',
    accent: 'purple',
  },
  {
    icon: Percent,
    badge: 'TRANSPARENT PRICING',
    title: 'Know Your Price Before Paying',
    desc: 'See exact costs calculated automatically before completing payment.',
    accent: 'emerald',
  },
  {
    icon: CheckCircle2,
    badge: 'SECURE PAYMENTS',
    title: 'Pay Online',
    desc: 'Fast, verified online payment via UPI and modern payment methods.',
    accent: 'cyan',
  },
  {
    icon: Sparkles,
    badge: 'LIVE STATUS',
    title: 'Track Your Order',
    desc: 'Follow your print job through every stage so you know exactly when it is ready.',
    accent: 'violet',
  },
  {
    icon: Zap,
    badge: 'ZERO WAITING',
    title: 'Pick Up When Ready',
    desc: 'Collect your printed documents at the counter without waiting in line.',
    accent: 'amber',
  },
]

const customerFeatures = [
  {
    icon: SlidersHorizontal,
    title: 'Print Options Control',
    subtitle: 'Clear Settings',
    description: 'Choose color, orientation, copies, and duplex settings easily from any device.',
    tags: ['Color & B/W', 'Single / Double Sided', 'Copies & Sizing'],
  },
  {
    icon: FileCheck,
    title: 'File Validation',
    subtitle: 'Automated Accuracy',
    description: 'Automatic page count and format checking before you pay to eliminate surprises.',
    tags: ['Auto Page Count', 'Format Verification', 'Instant Preview'],
  },
  {
    icon: Percent,
    title: 'Upfront Pricing',
    subtitle: 'Zero Hidden Fees',
    description: 'Clear pricing calculation based on your exact file and selected print options.',
    tags: ['Real-Time Calculator', 'Exact Breakdown', 'Rate Transparency'],
  },
  {
    icon: QrCode,
    title: 'Order Identification',
    subtitle: 'Fast Counter Handshake',
    description: 'Simple pickup identifiers so the shop operator hands you the right document immediately.',
    tags: ['Pickup ID', 'Counter Verification', 'No Confusion'],
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-First Handling',
    subtitle: 'Safe & Temporary',
    description: 'Files are only accessed for printing and automatically removed after 24 hours.',
    tags: ['Private Storage', '24-Hour Cleanup', 'Restricted Access'],
  },
]

const targetRoles = [
  {
    role: 'Students',
    subtitle: 'Assignments, Notes & Admit Cards',
    icon: GraduationCap,
    desc: 'Print assignments, study material, admit cards, notes, and projects quickly between classes.',
  },
  {
    role: 'Professionals',
    subtitle: 'Reports, Proposals & Contracts',
    icon: Briefcase,
    desc: 'Print reports, contracts, presentations, and documents for meetings with total privacy.',
  },
  {
    role: 'Small Businesses',
    subtitle: 'Invoices, Flyers & Notices',
    icon: Layers,
    desc: 'Print invoices, flyers, menus, notices, and everyday business materials on demand.',
  },
  {
    role: 'Everyday Users',
    subtitle: 'Forms, Tickets & Personal Documents',
    icon: Smartphone,
    desc: 'Print boarding passes, government forms, utility bills, and personal documents without the hassle.',
  },
]

const formats = [
  { ext: 'PDF', label: 'Portable Document Format', desc: 'Standard documents, multi-page reports, assignments', color: 'from-rose-500 to-red-600' },
  { ext: 'JPG', label: 'High-Resolution Images', desc: 'Photographs, ID cards, scanned notes', color: 'from-amber-500 to-orange-600' },
  { ext: 'PNG', label: 'Crisp Graphics & Scans', desc: 'Digital drawings, forms, transparent graphics', color: 'from-purple-500 to-violet-600' },
]

export function ForCustomersPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Hero Header */}
      <PageHero
        badge="FOR STUDENTS & PROFESSIONALS"
        title="Print your documents"
        titleAccent="without the queue."
        description="Upload directly from your phone, choose your print settings, pay securely, and pick up your documents when they are ready. No WhatsApp sharing. No waiting around."
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#customer-features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors text-center"
          >
            <span>Explore Features</span>
          </a>
          <a
            href="#customer-benefits"
            className="w-full sm:w-auto text-center rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-xs sm:text-sm font-bold text-violet-200 hover:bg-violet-500/20 hover:border-violet-500/50 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>Explore Benefits</span>
            <ArrowRight className="h-3.5 w-3.5 text-violet-400" />
          </a>
        </div>
      </PageHero>

      {/* Section 1: Customer Benefits */}
      <section id="customer-benefits" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
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
            <Badge tone="dark">CUSTOMER BENEFITS</Badge>
            <h2 className="heading-lg text-white mt-2">Why Print with Kagzzy</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              A simpler, more organized way to print at your local shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerBenefits.map((benefit, i) => {
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

          {/* Section: Built for everyday printing */}
          <div className="mt-20">
            <div className="text-center mb-10 max-w-xl mx-auto">
              <Badge tone="dark">EVERYDAY USE CASES</Badge>
              <h3 className="heading-md text-white mt-2">Built for everyday printing</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Whether it's one page or an entire project, Kagzzy makes printing straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {targetRoles.map((role) => (
                <div
                  key={role.role}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-3">
                      <role.icon className="h-5 w-5" />
                    </span>
                    <h4 className="text-base font-bold text-white">{role.role}</h4>
                    <p className="text-[11px] font-medium text-violet-300 mb-2">{role.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Platform Capabilities */}
      <section id="customer-features" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
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
            <Badge tone="dark">PLATFORM CAPABILITIES</Badge>
            <h2 className="heading-lg text-white mt-2">Self-Service Features for Everyday Printing</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Simple controls that give you complete clarity over your print orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {customerFeatures.map((feat, i) => (
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
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                      <feat.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-mono text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
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
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Supported File Formats */}
      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-indigo-700/15 blur-[140px]"
        />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <Badge tone="dark">SUPPORTED FORMATS</Badge>
            <h2 className="heading-md text-white mt-2">Supported File Formats</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Upload common document and image formats directly from your phone or laptop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {formats.map((fmt) => (
              <div
                key={fmt.ext}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center hover:border-violet-500/40 hover:bg-white/[0.06] transition-all shadow-md flex flex-col items-center justify-center"
              >
                <span className={`inline-block rounded-lg bg-gradient-to-br ${fmt.color} px-4 py-1.5 text-sm font-black text-white shadow-sm mb-3`}>
                  {fmt.ext}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">{fmt.label}</h4>
                <p className="text-xs text-slate-400">{fmt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Privacy & Security Promises */}
      <section className="py-16 bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-700/15 blur-[140px]"
        />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-xl mx-auto">
            <Badge tone="dark">DATA PRIVACY</Badge>
            <h2 className="heading-md text-white mt-2">Your documents stay private.</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Files are securely transferred, accessed only for printing, and automatically removed after 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-5 border border-white/10 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-3">
                <Lock className="h-5 w-5" />
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Secure transfer in transit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Protected end-to-end data transfer from your browser directly to the print service.</p>
            </div>
            <div className="glass-card rounded-2xl p-5 border border-white/10 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-3">
                <Store className="h-5 w-5" />
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Private access for print shop only</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Only the shop you specifically order from is granted access to print your file.</p>
            </div>
            <div className="glass-card rounded-2xl p-5 border border-white/10 text-center">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-3">
                <Clock className="h-5 w-5" />
              </span>
              <h4 className="text-sm font-bold text-white mb-1">Automatic 24-hour cleanup</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Documents are automatically removed from active storage after 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Bottom Call to Action Banner */}
      <section className="py-16 bg-[#070B18] relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-purple-700/20 via-indigo-700/20 to-cyan-500/10 blur-[150px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          <Badge tone="dark">FOR SHOP OWNERS</Badge>
          <h2 className="heading-md text-white mt-2">Own a Print Shop?</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Bring digital ordering to your existing print setup with Kagzzy.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/for-shops"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
            >
              <span>Partner With Kagzzy</span>
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
