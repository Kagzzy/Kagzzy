import { HowItWorks } from '../components/sections/HowItWorks'
import { PrinterIntegration } from '../components/sections/PrinterIntegration'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import {
  Scan,
  UploadCloud,
  Sliders,
  Wallet,
  Printer,
  PackageCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const detailedPhases = [
  {
    step: '01',
    icon: Scan,
    title: 'Scan Shop QR Code Standee',
    summary: 'No app download needed. Works directly in your mobile browser.',
    description:
      'Every Kagzzy partner shop displays an official counter standee with a unique QR code. Pointing your standard camera opens the shop’s live digital portal in under 2 seconds. The shop name, pricing, and active printer queues are loaded automatically.',
    tags: ['Zero Installation', 'Instant Browser WebApp', 'Location-Locked'],
  },
  {
    step: '02',
    icon: UploadCloud,
    title: 'Select & Upload Documents',
    summary: 'Supports PDF, Word (DOCX), Excel, PowerPoint, and High-Res Images.',
    description:
      'Upload your project reports, college notes, resumes, or government forms. Kagzzy’s serverless parser calculates exact page count, dimensions (A4, A3, Legal), and inspects image resolutions in real time to prevent printing errors.',
    tags: ['PDF, DOCX, XLSX, PPTX', 'Auto Page Count', 'Up to 100MB'],
  },
  {
    step: '03',
    icon: Sliders,
    title: 'Configure Smart Print Options',
    summary: 'Duplex (2-sided), B&W vs. Color, Copies, and Spiral Binding.',
    description:
      'Customize exactly how you want your document printed. Toggle duplex printing to save up to 40% on paper costs. Choose between fast monochrome laser and vibrant high-res color. Pricing updates dynamically with zero surprises.',
    tags: ['Dynamic Price Calc', 'Duplex Savings', 'Binding & Stapling'],
  },
  {
    step: '04',
    icon: Wallet,
    title: 'Instant 1-Click UPI Payment',
    summary: 'GPay, PhonePe, Paytm, BHIM, or any UPI app with instant verification.',
    description:
      'Say goodbye to waiting for the shopkeeper to verify ₹10 or ₹20 screenshots. Payment is securely processed through bank-grade UPI gateways with instant token generation. Both customer and merchant dashboards sync simultaneously.',
    tags: ['No Cash Required', 'Instant Receipt', 'Token Generated'],
  },
  {
    step: '05',
    icon: Printer,
    title: 'Windows Print Agent Auto-Dispatch',
    summary: 'High-speed local network transmission to the shop’s existing printers.',
    description:
      'Our proprietary Windows Print Agent runs in the background on the shop’s PC. Once the operator hits "PRINT NOW", the raw print stream is sent directly to the local printer over USB or LAN at hardware speed.',
    tags: ['Windows Agent v2.4', 'Local LAN Speed', 'Zero Cloud Stash'],
  },
  {
    step: '06',
    icon: PackageCheck,
    title: 'Quick Order Pickup',
    summary: 'Walk up, flash your order code, and collect your fresh prints.',
    description:
      'Your order comes out fresh and organized. Flash your 4-digit token or QR code at the counter, collect your prints, and you are done. No crowded queues, no WhatsApp file sharing.',
    tags: ['Zero-Wait Pickup', 'Organized Bundles', 'Privacy Protected'],
  },
]

const comparisonData = [
  {
    factor: 'File Sharing Method',
    traditional: 'WhatsApp forward / USB drive virus risk',
    kagzzy: 'Direct encrypted browser upload via QR scan',
  },
  {
    factor: 'Time Spent at Counter',
    traditional: '10 to 25 minutes standing in queue',
    kagzzy: 'Under 2 minutes for immediate pickup',
  },
  {
    factor: 'Pricing Transparency',
    traditional: 'Manual verbal quotes, unexpected surge',
    kagzzy: 'Real-time per-page calculator with exact total',
  },
  {
    factor: 'Payment Experience',
    traditional: 'Cash change trouble or screenshot verification',
    kagzzy: 'Automated 1-click UPI verification with token',
  },
  {
    factor: 'Privacy & Security',
    traditional: 'Files stay in shopkeeper WhatsApp & PC gallery',
    kagzzy: 'Auto-shredded immediately upon print completion',
  },
]

export function HowItWorksPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="THE COMPLETE PROCESS"
        title="How Kagzzy Works"
        titleAccent="End-to-End"
        description="From the moment you scan the counter QR standee to picking up your neatly printed pages, discover how our smart technology bridges local shops with digital convenience."
        bgImage="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/for-customers"
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform"
          >
            Try Printing a Document
          </Link>
          <a
            href="#architecture"
            className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Explore Tech Architecture
          </a>
        </div>
      </PageHero>

      {/* Main 6-Step Visual Timeline */}
      <HowItWorks />

      {/* Deep-Dive Phase Breakdown */}
      <section id="architecture" className="section-padding bg-[#090E24]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="heading-lg text-white">Step-by-Step Architecture</h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Engineered for absolute speed, bank-grade file security, and effortless counter operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedPhases.map((phase) => (
              <div
                key={phase.step}
                className="glass-card relative flex flex-col justify-between rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 transition-all hover:-translate-y-1 shadow-lg bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-2xl font-black text-violet-400">{phase.step}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                      <phase.icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-cyan-300">{phase.summary}</p>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">{phase.description}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9.5px] font-medium text-slate-300"
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

      {/* Printer Integration Terminal Component */}
      <PrinterIntegration />

      {/* Comparison: Traditional Xerox vs Kagzzy */}
      <section className="section-padding bg-[#070B18] relative overflow-hidden">
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-10">
            <Badge tone="dark">THE TRANSFORMATION</Badge>
            <h2 className="heading-lg text-white mt-2">Traditional Xerox vs. Kagzzy</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl mx-auto">
              See why thousands of students and shopkeepers are retiring outdated WhatsApp printing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/[0.04] text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5">Feature / Experience</th>
                  <th className="p-4 sm:p-5 text-rose-300">Traditional Xerox Counter</th>
                  <th className="p-4 sm:p-5 text-emerald-300">Kagzzy Smart Printing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonData.map((row) => (
                  <tr key={row.factor} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">{row.factor}</td>
                    <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-200 font-medium">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.kagzzy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/for-customers"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform"
            >
              <span>Explore Customer Experience</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
