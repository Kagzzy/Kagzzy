import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { KagzzyLogo } from './KagzzyLogo'

/**
 * Potted leafy plant in a ceramic/terracotta pot behind the QR stand.
 */
export function PottedHouseplant({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={`relative select-none ${className}`}>
      <motion.div
        animate={reducedMotion ? undefined : { rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex flex-col items-center"
      >
        {/* Lush green leaves spreading upwards and outwards */}
        <div className="relative -mb-3 h-28 w-24">
          <div className="absolute left-1/2 top-0 h-16 w-7 -translate-x-1/2 rounded-full bg-gradient-to-t from-emerald-900 to-emerald-400 shadow-sm" />
          <div className="absolute left-2 top-3 h-14 w-6 -rotate-25 rounded-full bg-gradient-to-t from-emerald-900 to-emerald-500" />
          <div className="absolute right-2 top-3 h-14 w-6 rotate-25 rounded-full bg-gradient-to-t from-emerald-900 to-emerald-500" />
          <div className="absolute -left-1 top-8 h-12 w-6 -rotate-45 rounded-full bg-gradient-to-t from-emerald-800 to-teal-400 shadow-sm" />
          <div className="absolute -right-1 top-8 h-12 w-6 rotate-45 rounded-full bg-gradient-to-t from-emerald-800 to-teal-400 shadow-sm" />
          <div className="absolute left-4 top-6 h-13 w-5 -rotate-10 rounded-full bg-gradient-to-t from-emerald-700 to-emerald-300" />
          <div className="absolute right-4 top-6 h-13 w-5 rotate-10 rounded-full bg-gradient-to-t from-emerald-700 to-emerald-300" />
        </div>

        {/* Ceramic / Terracotta Pot */}
        <div className="relative z-10 w-16 overflow-hidden rounded-b-xl rounded-t-sm border border-stone-300/80 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-300 py-5 shadow-lg">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-stone-300 shadow-xs" />
          <div className="absolute inset-y-0 right-1 w-2.5 bg-stone-400/20" />
        </div>

        {/* Shadow */}
        <div className="h-2 w-16 rounded-full bg-black/60 blur-sm -mt-1" />
      </motion.div>
    </div>
  )
}

/**
 * Handwritten flow annotation with curved purple doodle arrows:
 * "Upload
 *  Configure
 *  Pay
 *  Print
 *  Pickup ✓"
 */
export function HandwrittenFlow({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()

  const words = [
    { text: 'Upload', delay: 0.8 },
    { text: 'Configure', delay: 0.95 },
    { text: 'Pay', delay: 1.1 },
    { text: 'Print', delay: 1.25 },
    { text: 'Pickup ✓', delay: 1.4, highlight: true },
  ]

  return (
    <div className={`relative select-none font-handwritten ${className}`}>
      <div className="flex flex-col items-start gap-0.5 text-left text-violet-200 drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
        {words.map((item) => (
          <motion.span
            key={item.text}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: item.delay, duration: 0.4 }}
            className={`text-xl sm:text-2xl font-semibold leading-tight tracking-wide ${
              item.highlight ? 'text-violet-300 font-bold' : ''
            }`}
          >
            {item.text}
          </motion.span>
        ))}
      </div>

      {/* Curved doodle arrow pointing down toward the phone pedestal */}
      <div className="relative mt-1 -ml-1 h-14 w-20">
        <svg
          viewBox="0 0 80 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]"
        >
          <motion.path
            d="M 65 5 C 45 7, 22 18, 18 34 C 15 45, 23 50, 33 52"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.9, ease: 'easeOut' }}
          />
          <motion.path
            d="M 25 48 L 34 52 L 31 44"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.3 }}
          />
        </svg>
      </div>
    </div>
  )
}

/**
 * Handwritten note under the left column copy:
 * "Your Print...
 *  Your Way !"
 * with purple doodle underline and curve.
 */
export function LeftDeskDoodle({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none font-handwritten ${className}`}>
      <div className="text-violet-200 text-xl sm:text-2xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(124,58,237,0.5)]">
        <p>Your Print...</p>
        <p className="ml-6">Your Way !</p>
      </div>
      <svg
        viewBox="0 0 120 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-0.5 h-6 w-32 text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.7)]"
      >
        <path
          d="M 10 8 C 45 4, 85 18, 115 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

/**
 * Modern Black Pedestal / Plinth Block on which the smartphone rests.
 * Features:
 * - Glowing Kagzzy document icon on front
 * - "Documents today. Brighter tomorrows."
 * - Vibrant purple/violet neon underglow strip casting light on the wood countertop.
 */
export function PhonePedestal({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Top mounted content (Smartphone) */}
      <div className="relative z-20">{children}</div>

      {/* Sleek Black Box / Plinth */}
      <div className="relative z-10 -mt-6 w-[20rem] sm:w-[22rem] rounded-2xl border border-white/15 bg-gradient-to-b from-slate-800 via-slate-950 to-black p-3.5 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.95)]">
        {/* Top glossy beveled edge */}
        <div className="absolute inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Front Panel Content */}
        <div className="flex items-center gap-3 px-2 py-1">
          {/* Glowing Kagzzy Logo Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-xl bg-violet-600/40 blur-sm" />
            <KagzzyLogo size={28} showText={false} />
          </div>

          {/* Slogan Text */}
          <div className="leading-tight">
            <p className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
              Documents today.
            </p>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-400">
              Brighter tomorrows.
            </p>
          </div>
        </div>

        {/* Vibrant Purple Neon Underglow LED Strip along bottom edge */}
        <div className="absolute inset-x-1 bottom-0 h-[3.5px] rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 shadow-[0_0_20px_rgba(167,139,250,1),0_0_6px_rgba(236,72,153,0.9)]" />
      </div>

      {/* Surface ambient purple reflection on the wood countertop */}
      <div
        aria-hidden
        className="mx-auto -mt-1 h-6 w-[22rem] rounded-full bg-violet-600/40 blur-xl pointer-events-none"
      />
    </div>
  )
}

/**
 * Floating Document Badges (PDF, Word W, Excel XLS)
 * plus the floating printed paper sheet with text lines.
 */
export function FloatingFileBadges({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={`pointer-events-none absolute inset-0 z-30 ${className}`}>
      {/* 1. PDF Card (Top Left) */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 -left-6 sm:-left-12 flex items-center justify-center rounded-2xl border border-white/80 bg-white/95 px-3 py-2 shadow-[0_12px_25px_-5px_rgba(239,68,68,0.4)] backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5">
          <span className="rounded-lg bg-red-500 px-2 py-1 text-[11px] font-black text-white shadow-xs">
            PDF
          </span>
        </div>
      </motion.div>

      {/* 2. Word Card (Mid Left) */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 8, 0], rotate: [-4, -2, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-36 -left-8 sm:-left-16 flex items-center justify-center rounded-2xl border border-white/80 bg-white/95 p-2 shadow-[0_12px_25px_-5px_rgba(59,130,246,0.4)] backdrop-blur-md"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black text-base shadow-xs">
          W
        </div>
      </motion.div>

      {/* 3. Excel Card (Lower Left) */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -7, 0], rotate: [-8, -6, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-64 -left-6 sm:-left-12 flex items-center justify-center rounded-2xl border border-white/80 bg-white/95 p-2 shadow-[0_12px_25px_-5px_rgba(16,185,129,0.4)] backdrop-blur-md"
      >
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white font-black text-xs shadow-xs">
          XLS
        </div>
      </motion.div>

      {/* 4. Floating Printed Paper Sheet (Mid-Right behind phone) */}
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, 8, 0], rotate: [8, 10, 8] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
        className="absolute top-28 -right-6 sm:-right-12 w-28 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] backdrop-blur-md"
      >
        <div className="space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-slate-300" />
          <div className="h-1.5 w-full rounded-full bg-slate-200" />
          <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-violet-400" />
        </div>
      </motion.div>
    </div>
  )
}

/**
 * Curved Glowing Energy Arcs swirling around the phone.
 */
export function OrbitalEnergyArcs() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 -inset-x-8 -inset-y-6 z-10 overflow-visible">
      <svg
        viewBox="0 0 360 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="orbitCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitPurple" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.ellipse
          cx="180"
          cy="220"
          rx="165"
          ry="200"
          stroke="url(#orbitCyan)"
          strokeWidth="3"
          strokeDasharray="160 300"
          transform="rotate(-15 180 220)"
          animate={
            reducedMotion
              ? undefined
              : {
                  strokeDashoffset: [0, -460],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        <motion.ellipse
          cx="180"
          cy="220"
          rx="150"
          ry="185"
          stroke="url(#orbitPurple)"
          strokeWidth="2.5"
          strokeDasharray="130 270"
          transform="rotate(20 180 220)"
          animate={
            reducedMotion
              ? undefined
              : {
                  strokeDashoffset: [0, 400],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}

/**
 * Takeaway Paper Coffee Cup:
 * White cup with black plastic lid and handwritten script:
 * "Good Ideas Get Printed."
 */
export function CoffeeCup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Black Plastic Lid */}
      <div className="relative z-20 mx-auto h-3 w-14 rounded-t-md bg-stone-900 border-b border-stone-800 shadow-md">
        <div className="mx-auto h-1 w-6 rounded-t-sm bg-stone-800" />
      </div>

      {/* White Paper Cup Body with Slight Taper */}
      <div
        style={{
          clipPath: 'polygon(5% 0%, 95% 0%, 85% 100%, 15% 100%)',
        }}
        className="relative z-10 h-16 w-16 bg-gradient-to-r from-stone-100 via-white to-stone-200 border-x border-stone-200 shadow-lg flex flex-col items-center justify-center p-1"
      >
        <p className="font-handwritten text-[10.5px] font-bold text-stone-800 leading-tight text-center">
          Good<br />Ideas<br />Get<br />Printed.
        </p>
      </div>

      {/* Cup Base Shadow */}
      <div className="mx-auto -mt-1 h-2 w-12 rounded-full bg-black/60 blur-xs" />
    </div>
  )
}

/**
 * Stack of 4 Thick Books with colored spines:
 * - STUDY (White spine)
 * - WORK (Yellow spine)
 * - BUSINESS (Teal/Cyan spine)
 * - LIFE (Green spine)
 */
export function BookStack({ className = '' }: { className?: string }) {
  const books = [
    { title: 'STUDY', bg: 'bg-stone-100 text-stone-900 border-stone-300' },
    { title: 'WORK', bg: 'bg-amber-400 text-stone-950 border-amber-500' },
    { title: 'BUSINESS', bg: 'bg-cyan-500 text-stone-950 border-cyan-600' },
    { title: 'LIFE', bg: 'bg-emerald-500 text-stone-950 border-emerald-600' },
  ]

  return (
    <div className={`relative select-none ${className}`}>
      <div className="flex flex-col gap-[3px] w-24 sm:w-28">
        {books.map((b) => (
          <div
            key={b.title}
            className={`h-5 sm:h-6 rounded-sm border ${b.bg} px-2 flex items-center justify-center shadow-md`}
          >
            <span className="text-[9.5px] sm:text-[10.5px] font-black tracking-widest">
              {b.title}
            </span>
          </div>
        ))}
      </div>
      {/* Drop shadow on wooden counter */}
      <div className="mx-auto -mt-1 h-3 w-4/5 rounded-full bg-black/70 blur-sm" />
    </div>
  )
}

/**
 * Background Storefront & Service Board:
 * Service list: PRINT, SCAN, PHOTOCOPY, BINDING, LAMINATION, AND MORE...
 * Plus neon Kagzzy sign and warm shop ambiance.
 */
export function StorefrontBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/85 via-[#080d22]/90 to-[#04060f] backdrop-blur-md -z-10 overflow-hidden shadow-2xl"
    >
      {/* Glass Window Mullions */}
      <div className="absolute inset-0 grid grid-cols-3 divide-x divide-white/[0.08]">
        <div className="h-full border-r border-black/40" />
        <div className="h-full border-r border-black/40" />
        <div className="h-full" />
      </div>

      {/* Warm Golden Interior Ambient Lamp Glow */}
      <div className="absolute right-12 top-4 h-64 w-64 rounded-full bg-amber-500/15 blur-[90px]" />
      <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

      {/* Service Menu Sign on Background Wall (Center-Right) */}
      <div className="absolute top-8 right-32 hidden xl:block rounded-xl border border-stone-300/20 bg-stone-100/10 p-3 backdrop-blur-sm text-left">
        <div className="space-y-1 text-[11px] font-black tracking-wider text-stone-200/80">
          <p>PRINT</p>
          <p>SCAN</p>
          <p>PHOTOCOPY</p>
          <p>BINDING</p>
          <p>LAMINATION</p>
          <p className="text-[9.5px] text-stone-400">AND MORE...</p>
        </div>
      </div>

      {/* Glowing Neon Kagzzy Sign on Far Right Glass Wall */}
      <div className="absolute top-12 right-6 hidden 2xl:flex flex-col items-center rounded-2xl border border-blue-500/40 bg-blue-950/40 px-4 py-3 shadow-[0_0_35px_rgba(59,130,246,0.5)] backdrop-blur-md">
        <KagzzyLogo size={28} showText={false} />
        <span className="mt-1 text-base font-black tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
          Kagzzy
        </span>
      </div>
    </div>
  )
}

/**
 * Animated Mouse "Scroll to explore" indicator at the bottom center of Hero.
 */
export function ScrollToExplore({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className={`flex flex-col items-center gap-1.5 text-slate-400 select-none ${className}`}>
      <div className="h-7 w-4.5 rounded-full border-2 border-slate-400/80 p-0.5 flex justify-center">
        {!reducedMotion && (
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-slate-300"
          />
        )}
      </div>
      <span className="text-[10px] font-medium tracking-wider text-slate-400">
        Scroll to explore
      </span>
      <ChevronDown className="h-3 w-3 -mt-1 text-slate-500 animate-bounce" />
    </div>
  )
}
