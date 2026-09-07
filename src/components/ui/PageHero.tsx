import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export interface PageHeroProps {
  badge: string
  title: string
  titleAccent?: string
  description: string
  bgImage: string
  accentColor?: 'purple' | 'cyan' | 'blue' | 'emerald' | 'amber'
  children?: ReactNode
}

export function PageHero({
  badge,
  title,
  titleAccent,
  description,
  bgImage,
  accentColor = 'purple',
  children,
}: PageHeroProps) {
  // Theme-specific glow gradients
  const glowStyles = {
    purple: {
      primary: 'bg-purple-600/25',
      secondary: 'bg-indigo-600/20',
      badgeBorder: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/15',
      badgeText: 'text-purple-200',
      badgeDot: 'bg-violet-400',
      accentGradient: 'from-purple-400 via-fuchsia-400 to-indigo-400',
      lineGlow: 'via-purple-500/40',
    },
    cyan: {
      primary: 'bg-cyan-600/25',
      secondary: 'bg-blue-600/20',
      badgeBorder: 'border-cyan-500/30',
      badgeBg: 'bg-cyan-500/15',
      badgeText: 'text-cyan-200',
      badgeDot: 'bg-cyan-400',
      accentGradient: 'from-cyan-400 via-sky-300 to-indigo-300',
      lineGlow: 'via-cyan-500/40',
    },
    blue: {
      primary: 'bg-blue-600/25',
      secondary: 'bg-violet-600/20',
      badgeBorder: 'border-blue-500/30',
      badgeBg: 'bg-blue-500/15',
      badgeText: 'text-blue-200',
      badgeDot: 'bg-blue-400',
      accentGradient: 'from-blue-400 via-indigo-300 to-cyan-300',
      lineGlow: 'via-blue-500/40',
    },
    emerald: {
      primary: 'bg-emerald-600/25',
      secondary: 'bg-teal-600/20',
      badgeBorder: 'border-emerald-500/30',
      badgeBg: 'bg-emerald-500/15',
      badgeText: 'text-emerald-200',
      badgeDot: 'bg-emerald-400',
      accentGradient: 'from-emerald-400 via-teal-300 to-cyan-300',
      lineGlow: 'via-emerald-500/40',
    },
    amber: {
      primary: 'bg-amber-600/20',
      secondary: 'bg-orange-600/18',
      badgeBorder: 'border-amber-500/30',
      badgeBg: 'bg-amber-500/15',
      badgeText: 'text-amber-200',
      badgeDot: 'bg-amber-400',
      accentGradient: 'from-amber-400 via-orange-300 to-yellow-200',
      lineGlow: 'via-amber-500/40',
    },
  }[accentColor]

  return (
    <div className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20 text-center select-none border-b border-white/[0.06]">
      {/* 1. PHOTOGRAPHIC BACKGROUND IMAGE WITH BLEND OVERLAY */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        {/* Multilayer gradient masks so text is 100% crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B18]/70 via-[#070B18]/85 to-[#070B18]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070B18]/50 to-[#070B18]" />
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="noise-bg absolute inset-0 opacity-25" />
      </div>

      {/* 2. ATMOSPHERIC AMBIENT GLOW ORBS */}
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 -top-24 h-[28rem] w-[36rem] -translate-x-1/2 rounded-full ${glowStyles.primary} blur-[140px] -z-10`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute right-1/4 top-1/4 h-[22rem] w-[26rem] rounded-full ${glowStyles.secondary} blur-[130px] -z-10`}
      />

      {/* 3. DECORATIVE LASER LIGHT CURVE / PARTICLES */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M -100 200 C 300 50, 700 320, 1300 120"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="text-white/20"
          />
          <path
            d="M -50 250 C 400 120, 800 280, 1250 80"
            stroke="currentColor"
            strokeWidth="1"
            className="text-violet-400/30"
          />
        </svg>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="container-kagzzy relative z-10">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 rounded-full border ${glowStyles.badgeBorder} ${glowStyles.badgeBg} px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider ${glowStyles.badgeText} backdrop-blur-md shadow-xs`}
        >
          <span className={`h-2 w-2 rounded-full ${glowStyles.badgeDot} animate-pulse`} />
          <span>{badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem] text-white max-w-4xl mx-auto"
        >
          <span>{title}</span>
          {titleAccent && (
            <>
              {' '}
              <span
                className={`bg-gradient-to-r ${glowStyles.accentGradient} bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]`}
              >
                {titleAccent}
              </span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-300/90 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Optional Extra Elements (Buttons, Search, Calculator, Switchers) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-7"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* 5. BOTTOM LIGHT BEAM DIVIDER */}
      <div
        className={`absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent ${glowStyles.lineGlow} to-transparent`}
      />
    </div>
  )
}
