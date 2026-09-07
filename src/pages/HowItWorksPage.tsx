import { HowItWorks } from '../components/sections/HowItWorks'
import { StepByStepArchitecture } from '../components/sections/StepByStepArchitecture'
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
      <StepByStepArchitecture />

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
