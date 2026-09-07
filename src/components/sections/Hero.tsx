import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  FileText,
  Play,
  Star,
  Users,
  X,
  Zap,
  Store,
  BarChart2,
  Sparkles,
} from 'lucide-react'
import { PhoneMockup } from '../ui/PhoneMockup'
import { QrStandee } from '../ui/QrStandee'
import { UpiChevronIcon } from '../ui/UpiIcon'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { useReducedMotion } from '../../hooks/useReducedMotion'

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const trustAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    alt: 'Customer',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    alt: 'Merchant',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    alt: 'Student',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    alt: 'Professional',
  },
]

const heroStats = [
  { icon: Store, value: 500, suffix: '+', label: 'Print shops' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Happy users' },
  { icon: FileText, value: 1, suffix: 'M+', label: 'Documents printed' },
  { icon: Star, value: 4.9, suffix: '/5', label: 'Shop rating', decimals: 1, star: true },
]

/* ------------------------------------------------------------------ */
/*  Small inline sub-components                                       */
/* ------------------------------------------------------------------ */

/** "Better Printing Brighter Communities." card */
function CommunityCard() {
  return (
    <div className="w-36 sm:w-40 rounded-xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur-md shadow-lg">
      <p className="font-handwritten text-base sm:text-lg font-bold leading-snug text-white/90 drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]">
        Better<br />
        Printing<br />
        Brighter<br />
        <span className="text-violet-300">Communities.</span>
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                    */
/* ------------------------------------------------------------------ */

export function Hero() {
  const reducedMotion = useReducedMotion()
  const [demoOpen, setDemoOpen] = useState(false)

  const handleScrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/how-it-works'
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#070B18] pt-24 sm:pt-28 lg:pt-28 pb-8 sm:pb-10 text-white select-none"
    >
      {/* ---- Background: subtle grid + noise + purple glow ---- */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[40rem] w-[40rem] rounded-full bg-indigo-700/20 blur-[180px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 -top-16 h-[30rem] w-[30rem] rounded-full bg-purple-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col w-full">
        {/* ============ Two-Column Grid ============ */}
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 w-full pt-1 sm:pt-3 pb-4 sm:pb-6">

          {/* ---------- LEFT COLUMN ---------- */}
          <div className="flex flex-col items-start gap-4 sm:gap-4.5 lg:gap-5 z-20 w-full">

            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-200 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.18)] hover:border-violet-400/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              LOCAL SHOPS &times; SMARTER PRINTING
            </motion.div>

            {/* Headline with cinematic line-by-line reveal and animated gradient text */}
            <h1 className="flex flex-col gap-1 sm:gap-1.5 text-3xl font-black leading-[1.12] sm:leading-[1.15] tracking-tight sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem]">
              <motion.span
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="block text-white"
              >
                Your Documents.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="block text-white"
              >
                Our Technology.
              </motion.span>
              <span className="block drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                <motion.span
                  initial={{ opacity: 0, y: 22, filter: 'blur(8px)', scale: 0.98 }}
                  animate={
                    reducedMotion
                      ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
                      : {
                          opacity: 1,
                          y: 0,
                          filter: 'blur(0px)',
                          scale: 1,
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.35,
                    backgroundPosition: {
                      duration: 7,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                  className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 via-cyan-300 to-indigo-400 bg-[length:250%_auto] bg-clip-text text-transparent"
                >
                  A Simpler Way to Print.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55 }}
              className="max-w-xl text-sm sm:text-base lg:text-[17px] leading-relaxed sm:leading-7 lg:leading-8 text-slate-300/90"
            >
              Kagzzy connects you with local print shops, making document
              printing as simple as scanning, uploading, paying and picking up.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-slate-200"
            >
              <motion.span
                whileHover={reducedMotion ? undefined : { scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md hover:border-violet-500/40 hover:bg-white/[0.08] transition-all shadow-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-600/30 text-violet-300 border border-violet-500/30">
                  <Zap className="h-3 w-3 fill-current" />
                </span>
                Easy ordering
              </motion.span>

              <motion.span
                whileHover={reducedMotion ? undefined : { scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md hover:border-indigo-500/40 hover:bg-white/[0.08] transition-all shadow-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                  <UpiChevronIcon className="h-3 w-3" />
                </span>
                UPI payments
              </motion.span>

              <motion.span
                whileHover={reducedMotion ? undefined : { scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all shadow-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-600/30 text-cyan-300 border border-cyan-500/30">
                  <BarChart2 className="h-3 w-3" />
                </span>
                Real-time tracking
              </motion.span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={handleScrollToHowItWorks}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-sm sm:text-base font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setDemoOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/35 active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </span>
                Watch Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex items-center gap-3 pt-1.5"
            >
              <div className="flex -space-x-2 overflow-hidden">
                {trustAvatars.map((a, i) => (
                  <img
                    key={i}
                    src={a.src}
                    alt={a.alt}
                    className="h-8 w-8 rounded-full border-2 border-[#070B18] object-cover ring-1 ring-white/10"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed">
                Trusted by students, professionals<br className="hidden sm:inline" /> and local businesses.
              </p>
            </motion.div>
          </div>

          {/* ---------- RIGHT COLUMN: Clean Scene ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative flex items-start sm:items-end justify-center min-h-0 sm:min-h-[400px] lg:min-h-[440px] w-full mt-2 sm:mt-0"
          >
            {/* Visual container: natural 1:1 on mobile, scaled on tablet/desktop */}
            <div className="relative w-full flex items-start sm:items-end justify-center origin-top sm:origin-bottom scale-100 sm:scale-[0.86] lg:scale-[0.88]">
              {/* Phone on pedestal — center-left */}
              <div className="relative z-20 mx-auto mb-2">
                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="relative z-20">
                    <PhoneMockup />
                  </div>
                  <div className="relative z-10 -mt-5 w-[18rem] sm:w-[20rem] rounded-2xl border border-white/15 bg-gradient-to-b from-slate-800 via-slate-950 to-black p-3 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.9)]">
                    <div className="absolute inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                    <div className="absolute inset-x-1 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500 shadow-[0_0_18px_rgba(167,139,250,0.9),0_0_5px_rgba(236,72,153,0.8)]" />
                  </div>
                  <div className="mx-auto -mt-1 h-5 w-[19rem] rounded-full bg-violet-600/35 blur-xl pointer-events-none" aria-hidden />
                </motion.div>
              </div>

              {/* QR Standee — right of phone */}
              <div className="absolute right-4 sm:right-10 lg:right-16 bottom-8 z-15 hidden sm:block">
                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -3, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <QrStandee />
                </motion.div>
              </div>

              {/* "Better Printing Brighter Communities." card — bottom right */}
              <div className="absolute right-2 sm:right-6 bottom-2 z-20 hidden md:block">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <CommunityCard />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============ BOTTOM STATS BAR ============ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full mt-auto pt-6 sm:pt-8 pb-4 sm:pb-6"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 sm:py-5 backdrop-blur-md">
            <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''}`}
                >
                  <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-violet-300">
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none flex items-center gap-1">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                      />
                      {stat.star && (
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      )}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm font-medium text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---- Watch Demo Modal ---- */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-900/95 p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-violet-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                Product Walkthrough
              </div>

              <h3 className="mt-2 text-2xl font-black text-white">
                How Kagzzy Works in 3 Simple Steps
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Experience digital document printing without long queues, messy USB drives, or WhatsApp spam.
              </p>

              <div className="mt-5 space-y-3.5">
                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-violet-600 font-bold text-white text-xs">1</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Scan Shop QR Stand</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Walk up to any participating print shop and point your camera at their counter QR standee.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-violet-600 font-bold text-white text-xs">2</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Upload &amp; Configure Settings</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Select your PDF/DOCX, choose duplex, color or B&amp;W, and preview transparent live pricing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-violet-600 font-bold text-white text-xs">3</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Instant UPI Pay &amp; Pickup</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Pay directly via GPay, PhonePe, or Paytm. The shop operator reviews your file and taps PRINT NOW on their Windows Print Agent.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setDemoOpen(false)}
                  className="rounded-xl bg-violet-600 px-5 py-2 text-xs font-bold text-white hover:bg-violet-500 transition-colors"
                >
                  Got it, Let's Try!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
