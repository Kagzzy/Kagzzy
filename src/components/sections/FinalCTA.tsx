import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scan, UploadCloud, Wallet, Printer, PackageCheck, ArrowRight, Store } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Badge } from '../ui/Badge'

const flowSteps = [
  { icon: Scan, label: '1. Scan Standee' },
  { icon: UploadCloud, label: '2. Direct Upload' },
  { icon: Wallet, label: '3. 1-Tap UPI' },
  { icon: Printer, label: '4. Operator Prints' },
  { icon: PackageCheck, label: '5. PRINT_ID Pickup' },
]

/** High-converting closing CTA banner for the marketing homepage, styled in dark hero theme. */
export function FinalCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-purple-700/20 via-indigo-700/20 to-cyan-500/10 blur-[170px]"
      />

      <div className="container-kagzzy relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.06] via-white/[0.03] to-white/[0.01] p-8 sm:p-12 lg:p-14 backdrop-blur-2xl text-center shadow-2xl">
          <div className="mx-auto max-w-2xl flex flex-col items-center gap-4">
            <Badge tone="dark">GET STARTED TODAY</Badge>
            
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-[2.85rem] leading-[1.2]">
              Ready to make document printing simpler?
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-slate-300/90 max-w-xl">
              Whether you are a student rushing between lectures or a print shop owner looking to eliminate WhatsApp clutter, Kagzzy has you covered.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Try Printing a Document</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/for-shops"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 active:scale-[0.98]"
              >
                <Store className="h-4 w-4 text-violet-400" />
                <span>Partner Your Print Shop</span>
              </Link>
            </div>

            {/* 5-step Flow Pills */}
            <div className="mt-8 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {flowSteps.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-violet-300 border border-white/10">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  <span>{s.label}</span>
                  {i < flowSteps.length - 1 && (
                    <span className="hidden md:inline text-white/20 ml-2">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
