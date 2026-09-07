import { HowItWorks } from '../components/sections/HowItWorks'
import { PrinterIntegration } from '../components/sections/PrinterIntegration'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <Link
            to="/for-customers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
          >
            <span>Try Printing a Document</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#printers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors text-center"
          >
            <span>Explore Windows Agent</span>
          </a>
        </div>
      </PageHero>

      {/* Main 6-Step Visual Timeline */}
      <HowItWorks />

      {/* Printer Integration Terminal Component */}
      <PrinterIntegration />

      {/* Comparison: Traditional Xerox vs Kagzzy */}
      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
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
          <div className="text-center mb-10">
            <Badge tone="dark">THE TRANSFORMATION</Badge>
            <h2 className="heading-lg text-white mt-2">Traditional Xerox vs. Kagzzy</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl mx-auto">
              See why thousands of students and shopkeepers are retiring outdated WhatsApp printing.
            </p>
          </div>

          {/* Mobile Card-based Comparison (Responsive, no horizontal scroll, no thick scrollbar) */}
          <div className="flex flex-col gap-3.5 sm:hidden">
            {comparisonData.map((row) => (
              <div
                key={row.factor}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-white pb-2.5 mb-2.5 border-b border-white/10">
                  {row.factor}
                </h3>
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-start gap-2 rounded-xl bg-rose-500/[0.08] border border-rose-500/20 p-2.5 text-slate-300">
                    <XCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300 block mb-0.5">Traditional Xerox</span>
                      <span>{row.traditional}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 p-2.5 text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">Kagzzy Smart Printing</span>
                      <span>{row.kagzzy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Table View */}
          <div className="hidden sm:block overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl">
            <table className="w-full min-w-[540px] text-left text-xs sm:text-sm">
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
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-200 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all"
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
