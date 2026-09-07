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
  Receipt,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const customerBenefits = [
  {
    icon: Zap,
    badge: 'ZERO WAITING',
    title: 'Instant Zero-Wait Pickup',
    desc: 'Skip crowded photocopy queues. Send your document while walking to the shop and collect it right as it exits the printer tray.',
    accent: 'blue',
  },
  {
    icon: ShieldCheck,
    badge: '100% CONFIDENTIAL',
    title: 'Bank-Grade Privacy & Auto-Shred',
    desc: 'No sharing files over WhatsApp or giving USB sticks to strangers. Files are encrypted with AES-256 and permanently deleted after pickup.',
    accent: 'emerald',
  },
  {
    icon: Percent,
    badge: 'SAVE UP TO 40%',
    title: 'Duplex Paper Cost Savings',
    desc: 'Easily toggle two-sided printing to cut thesis, syllabus, and document printing costs nearly in half. Zero hidden platform surcharges.',
    accent: 'purple',
  },
  {
    icon: Smartphone,
    badge: 'NO APP DOWNLOAD',
    title: 'Zero-Install Mobile Browser WebApp',
    desc: 'Simply point your standard phone camera at the shop standee QR code. The digital print portal opens in under 2 seconds.',
    accent: 'amber',
  },
  {
    icon: CheckCircle2,
    badge: '1-TAP UPI & QR',
    title: 'UPI Intent & Dynamic QR',
    desc: 'Pay in 1 tap with UPI Intent (Google Pay, PhonePe, Paytm, CRED) on mobile or scan the order-specific Dynamic QR on desktop. Zero manual screenshot verification.',
    accent: 'cyan',
  },
  {
    icon: Sparkles,
    badge: 'REAL-TIME STATUS',
    title: 'Live Order Tracking',
    desc: 'Watch your order move smoothly from "Payment Verified" to "Shop Accepted", "Printing", "Collation" and "Ready for Counter Pickup" in real time.',
    accent: 'violet',
  },
]

const customerFeatures = [
  {
    icon: SlidersHorizontal,
    title: 'Granular Print Customization',
    subtitle: 'Full Control in Seconds',
    description:
      'Customize page ranges (e.g. 1-5, 8, 12-20), single vs. double-sided (duplex), black & white laser vs. high-DPI color, copies, and spiral binding.',
    tags: ['Duplex Toggle', 'Custom Page Subsets', 'Paper Orientation'],
  },
  {
    icon: FileCheck,
    title: 'Pre-Flight File Inspection Engine',
    subtitle: 'Automated Accuracy',
    description:
      'Our client-side parser automatically calculates exact page counts, verifies dimensions (A4, A3, Legal), and inspects DPI to prevent printing errors.',
    tags: ['Auto Page Count', 'Resolution Validation', 'Zero Misprints'],
  },
  {
    icon: QrCode,
    title: 'PRINT_ID & Pickup QR Handshake',
    subtitle: 'Orderly Counter Collection',
    description:
      'Receive an official PRINT_ID (e.g. KAG-82X91) and secure pickup QR token upon payment. Walk up to the counter, flash your token or pickup QR code, and collect your organized pages. Supports optional OTP for sensitive prints.',
    tags: ['PRINT_ID (e.g. KAG-82X91)', 'Pickup QR Token', 'Optional OTP Security'],
  },
  {
    icon: Receipt,
    title: 'Instant GST Receipts & Billing',
    subtitle: 'Expense Filing Made Easy',
    description:
      'Instant digital payment receipts with GST breakdown delivered right to your screen or email for seamless corporate expense reimbursement.',
    tags: ['GST Breakdown', 'Digital Invoices', 'Instant Download'],
  },
  {
    icon: Layers,
    title: 'Universal Document Preservation',
    subtitle: 'Pixel-Perfect Layouts',
    description:
      'Advanced serverless rendering guarantees that font styles, tables, engineering schematics, and complex math equations render identically to your screen.',
    tags: ['Font Embedding', 'Vector Preservation', 'High-DPI Output'],
  },
  {
    icon: Briefcase,
    title: 'Multi-Role Optimization',
    subtitle: 'Tailored for You',
    description:
      'Optimized presets for university exam admit cards, academic thesis bundles, legal court briefs, and corporate pitch decks.',
    tags: ['Student Hall Tickets', 'Legal Briefs', 'Thesis Binding'],
  },
]

const targetRoles = [
  {
    role: 'College & University Students',
    subtitle: 'Assignments, Thesis, Notes & Hall Tickets',
    icon: GraduationCap,
    points: [
      'Upload hall tickets and laboratory manuals right outside the exam center in seconds.',
      'Instant duplex toggle cuts thick semester syllabus and project expenses nearly in half.',
      'Keep your personal phone number private — never add stranger shopkeepers on WhatsApp.',
    ],
  },
  {
    role: 'Professionals & Advocates',
    subtitle: 'Legal Briefs, Client Proposals & Contracts',
    icon: Briefcase,
    points: [
      'Zero-storage guarantee: confidential legal petitions and financial records are auto-shredded after printing.',
      'Exact vector and high-DPI preservation for contracts, spreadsheets, and architectural blueprints.',
      'Automated GST digital invoice generated on every transaction for corporate expense reporting.',
    ],
  },
]

const formats = [
  { ext: 'PDF', label: 'Adobe Acrobat Documents', color: 'from-rose-500 to-red-600' },
  { ext: 'DOCX', label: 'Microsoft Word Reports', color: 'from-blue-500 to-indigo-600' },
  { ext: 'XLSX', label: 'Excel Spreadsheets & Sheets', color: 'from-emerald-500 to-green-600' },
  { ext: 'PPTX', label: 'PowerPoint Presentations', color: 'from-amber-500 to-orange-600' },
  { ext: 'IMG', label: 'High-Res JPG, PNG & Scans', color: 'from-purple-500 to-violet-600' },
  { ext: 'CAD', label: 'Engineering Blueprints & Plans', color: 'from-cyan-500 to-blue-600' },
]

export function ForCustomersPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="FOR STUDENTS & PROFESSIONALS"
        title="Print Anything in Minutes"
        titleAccent="Without Waiting in Line"
        description="No awkward WhatsApp file forwards. No virus-infected USB thumb drives. Discover how Kagzzy gives you instant, private, and customizable printing at any local shop."
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
        accentColor="blue"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <a
            href="#customer-benefits"
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform"
          >
            Explore Benefits
          </a>
          <a
            href="#customer-features"
            className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Explore Features
          </a>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto text-center rounded-full bg-white/10 px-6 py-3 text-xs sm:text-sm font-bold text-slate-200 hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>See Step-by-Step Flow</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </PageHero>

      {/* Section 1: Customer Benefits */}
      <section id="customer-benefits" className="section-padding bg-[#090E24]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge tone="dark">CUSTOMER BENEFITS</Badge>
            <h2 className="heading-lg text-white mt-2">Why Customers Love Printing with Kagzzy</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Faster counter pickup, rock-solid file privacy, transparent low rates, and 1-tap UPI convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass-card flex flex-col justify-between rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all hover:-translate-y-1 shadow-lg bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30">
                      <benefit.icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 text-[10px] font-bold text-blue-300">
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

          {/* Persona Benefits: Students vs Professionals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
            {targetRoles.map((role) => (
              <div
                key={role.role}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                    <role.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{role.role}</h3>
                    <p className="text-xs text-slate-400">{role.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  {role.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Customer Features */}
      <section id="customer-features" className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-700/15 blur-[150px]"
        />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge tone="dark">PLATFORM CAPABILITIES</Badge>
            <h2 className="heading-lg text-white mt-2">Self-Serve Features at Your Fingertips</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Intuitive controls that let you customize, preview, pay, and collect without relying on counter staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerFeatures.map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                      <feat.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
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

      {/* Section 3: Universal File Formats */}
      <section className="section-padding bg-[#090E24]/60 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-8 max-w-xl mx-auto">
            <Badge tone="dark">UNIVERSAL COMPATIBILITY</Badge>
            <h2 className="heading-md text-white mt-2">Compatible with All Standard File Formats</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Upload seamlessly from Android, iPhone, Mac, or Windows. Pixel-perfect layout preservation guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 max-w-5xl mx-auto">
            {formats.map((fmt) => (
              <div
                key={fmt.ext}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center hover:border-white/25 transition-all shadow-md"
              >
                <span className={`inline-block rounded-lg bg-gradient-to-br ${fmt.color} px-3 py-1 text-xs font-black text-white shadow-sm mb-2`}>
                  {fmt.ext}
                </span>
                <p className="text-[11px] font-medium text-slate-300">{fmt.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="py-14 bg-[#070B18] relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[26rem] w-[26rem] rounded-full bg-purple-700/15 blur-[140px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          <h2 className="heading-md text-white">Experience Seamless Digital Printing Today</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Walk into any Kagzzy partner shop, scan the counter standee QR, and print with total ease.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform text-center"
            >
              <span>See How It Works</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors text-center"
            >
              <span>Explore Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
