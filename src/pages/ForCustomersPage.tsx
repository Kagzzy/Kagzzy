import { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import {
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Briefcase,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const formats = [
  { ext: 'PDF', label: 'Adobe Acrobat Documents', color: 'from-rose-500 to-red-600' },
  { ext: 'DOCX', label: 'Microsoft Word Reports', color: 'from-blue-500 to-indigo-600' },
  { ext: 'XLSX', label: 'Excel Spreadsheets & Sheets', color: 'from-emerald-500 to-green-600' },
  { ext: 'PPTX', label: 'PowerPoint Presentations', color: 'from-amber-500 to-orange-600' },
  { ext: 'IMG', label: 'High-Res JPG, PNG & Scans', color: 'from-purple-500 to-violet-600' },
  { ext: 'CAD', label: 'Engineering Blueprints & Plans', color: 'from-cyan-500 to-blue-600' },
]

export function ForCustomersPage() {
  const [pages, setPages] = useState(15)
  const [copies, setCopies] = useState(1)
  const [color, setColor] = useState(false)
  const [duplex, setDuplex] = useState(true)

  // Rate calculation
  const perPageRate = color ? 5 : duplex ? 1.0 : 1.5
  const estimatedCost = Math.round(pages * perPageRate * copies)

  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="FOR STUDENTS & PROFESSIONALS"
        title="Print Anything in Minutes"
        titleAccent="Without Waiting in Line"
        description="No awkward WhatsApp file forwards. No virus-infected USB thumb drives. Just scan the counter QR stand, configure options, pay with UPI, and pick up your documents."
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
        accentColor="blue"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/how-it-works"
            className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#estimator"
            className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Calculate Print Price
          </a>
        </div>
      </PageHero>

      {/* Target User Roles */}
      <section className="section-padding bg-[#090E24]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Students */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">College Students &amp; Aspirants</h3>
                  <p className="text-xs text-slate-400">Assignments, Thesis, Hall Tickets &amp; Notes</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Upload hall tickets and project reports right outside the exam center.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Instant duplex toggle cuts thesis and syllabus print expenses nearly in half.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>No need to add strangers to your WhatsApp contacts just to send a PDF.</span>
                </li>
              </ul>
            </div>

            {/* Professionals */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">Professionals &amp; Advocates</h3>
                  <p className="text-xs text-slate-400">Legal Briefs, Client Proposals &amp; Invoices</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Zero-storage policy: sensitive legal and financial files are shredded after printing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Exact high-res formatting preservation for blueprints, spreadsheets, and contracts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Instant GST receipts delivered directly to your email or SMS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Price Estimator */}
      <section id="estimator" className="section-padding bg-[#070B18] relative overflow-hidden">
        <div className="container-kagzzy relative z-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="text-center mb-6">
              <Badge tone="dark">TRANSPARENT RATES</Badge>
              <h2 className="heading-md text-white mt-2">Live Price Estimator</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Calculate transparent print costs with no platform convenience markup.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Number of Pages: {pages}</label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Copies: {copies}</label>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 pb-6 border-b border-white/10">
              <button
                type="button"
                onClick={() => setColor((v) => !v)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  color ? 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {color ? 'Color Printing (₹5/page)' : 'B&W Monochrome (₹1 - ₹1.5/pg)'}
              </button>

              <button
                type="button"
                onClick={() => setDuplex((v) => !v)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                  duplex ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                {duplex ? 'Duplex (Both Sides - Save 33%)' : 'Single Sided'}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold">Estimated Total</p>
                <p className="text-3xl font-black text-white">₹{estimatedCost}</p>
              </div>
              <Link
                to="/how-it-works"
                className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/30"
              >
                Find Nearest Shop &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Supported File Formats */}
      <section className="section-padding bg-[#090E24]/60 relative overflow-hidden">
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-8">
            <h2 className="heading-md text-white">Universal File Format Support</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Upload from mobile phone or laptop. Pixel-perfect conversion guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
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
    </div>
  )
}
