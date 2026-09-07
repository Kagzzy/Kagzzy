import { motion } from 'framer-motion'
import { CreditCard, Smartphone, Wallet } from 'lucide-react'
import { QrGlyph } from './QrGlyph'
import { KagzzyLogo } from './KagzzyLogo'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface QrStandeeProps {
  className?: string
}

export function QrStandee({ className = '' }: QrStandeeProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={`relative select-none ${className}`}>
      {/* Acrylic Standee Container */}
      <div className="relative w-[12.5rem] sm:w-[13.5rem] rounded-[20px] border border-white/90 bg-gradient-to-b from-white via-white to-slate-50 p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),0_0_30px_rgba(124,58,237,0.12)] ring-1 ring-black/5 backdrop-blur-md">
        {/* Gloss / Sheen overlay across the acrylic surface */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
        >
          <div className="absolute -left-12 -top-12 h-40 w-52 -rotate-45 bg-gradient-to-b from-white/60 via-white/10 to-transparent blur-[1px]" />
          {!reducedMotion && (
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
              className="absolute inset-y-0 w-24 -rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          )}
        </div>

        {/* Standee Header: Kagzzy Brand Logo */}
        <div className="flex items-center justify-center pb-2.5 pt-1">
          <KagzzyLogo size={22} textColor="text-slate-900" />
        </div>

        {/* QR Code Container */}
        <div className="relative mx-auto overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-inner">
          <div className="relative aspect-square w-full">
            <QrGlyph className="h-full w-full text-slate-900" />

            {/* Small center logo badge inside QR code */}
            <div className="absolute left-1/2 top-1/2 grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-md border border-white bg-violet-600 shadow-sm">
              <span className="text-[9px] font-black text-white">K</span>
            </div>

            {/* Subtle Animated Laser Scanner Line */}
            {!reducedMotion && (
              <motion.div
                animate={{
                  top: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute inset-x-0 z-10 flex flex-col items-center -translate-y-1/2"
              >
                <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Standee Label */}
        <div className="pt-2.5 text-center">
          <p className="text-xs sm:text-sm font-black tracking-tight text-slate-900">
            Scan to Print
          </p>
        </div>

        {/* Standee Footer Payment Badges: UPI | Card | Wallet matching reference */}
        <div className="mt-2.5 flex items-center justify-center gap-2 border-t border-slate-100 pt-2 text-[9px] font-bold text-slate-500">
          <span className="flex items-center gap-1">
            <Smartphone className="h-2.5 w-2.5 text-indigo-600" />
            UPI
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="flex items-center gap-1">
            <CreditCard className="h-2.5 w-2.5 text-emerald-600" />
            Card
          </span>
          <span className="text-slate-300">&bull;</span>
          <span className="flex items-center gap-1">
            <Wallet className="h-2.5 w-2.5 text-amber-600" />
            Wallet
          </span>
        </div>
      </div>

      {/* Wooden Base Block Underneath */}
      <div className="relative z-0 -mt-2 mx-auto h-3 w-11/12 rounded-md border border-amber-950/40 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 shadow-md">
        <div className="absolute inset-x-1 top-0.5 h-[1px] bg-amber-400/30" />
      </div>

      {/* Stand Base Shadow on Desk Plane */}
      <div
        aria-hidden
        className="mx-auto -mt-1 h-3.5 w-4/5 rounded-full bg-black/70 blur-md"
      />
    </div>
  )
}
