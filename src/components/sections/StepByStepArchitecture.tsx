import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  detailedArchitecturePhases,
  type ArchitecturePhase,
} from '../../data/architecture'
import { Badge } from '../ui/Badge'
import { ArrowRight, Sparkles, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import clsx from 'clsx'

const accentStyles: Record<
  ArchitecturePhase['accentColor'],
  {
    badge: string
    iconBg: string
    borderHover: string
    ringGlow: string
    metricText: string
  }
> = {
  violet: {
    badge: 'text-violet-300 bg-violet-500/10 border-violet-500/25',
    iconBg: 'bg-violet-600/20 text-violet-300 border-violet-500/30',
    borderHover: 'hover:border-violet-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]',
    metricText: 'text-violet-300',
  },
  cyan: {
    badge: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/25',
    iconBg: 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
    borderHover: 'hover:border-cyan-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]',
    metricText: 'text-cyan-300',
  },
  purple: {
    badge: 'text-purple-300 bg-purple-500/10 border-purple-500/25',
    iconBg: 'bg-purple-600/20 text-purple-300 border-purple-500/30',
    borderHover: 'hover:border-purple-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]',
    metricText: 'text-purple-300',
  },
  emerald: {
    badge: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
    iconBg: 'bg-emerald-600/20 text-emerald-300 border-emerald-500/30',
    borderHover: 'hover:border-emerald-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]',
    metricText: 'text-emerald-300',
  },
  blue: {
    badge: 'text-blue-300 bg-blue-500/10 border-blue-500/25',
    iconBg: 'bg-blue-600/20 text-blue-300 border-blue-500/30',
    borderHover: 'hover:border-blue-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]',
    metricText: 'text-blue-300',
  },
  amber: {
    badge: 'text-amber-300 bg-amber-500/10 border-amber-500/25',
    iconBg: 'bg-amber-600/20 text-amber-300 border-amber-500/30',
    borderHover: 'hover:border-amber-500/50',
    ringGlow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]',
    metricText: 'text-amber-300',
  },
}

interface StepByStepArchitectureProps {
  id?: string
  className?: string
  showCta?: boolean
}

export function StepByStepArchitecture({
  id = 'architecture',
  className,
  showCta = true,
}: StepByStepArchitectureProps) {
  const [selectedStep, setSelectedStep] = useState<string | null>(null)
  const reducedMotion = useReducedMotion()

  return (
    <section
      id={id}
      className={clsx(
        'section-padding relative overflow-hidden bg-[#070B18] text-white',
        className,
      )}
    >
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[32rem] w-[50rem] rounded-full bg-violet-600/10 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[110px]"
        aria-hidden
      />

      <div className="container-kagzzy relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Badge tone="dark" className="gap-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300">
              <Cpu className="h-3.5 w-3.5" />
              END-TO-END SYSTEM PIPELINE
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="heading-lg text-white mt-3"
          >
            Step-by-Step Architecture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed"
          >
            Engineered for absolute speed, bank-grade file security, and effortless counter operation.
            From instant mobile QR scan to native hardware spooling in 6 automated steps.
          </motion.p>
        </div>

        {/* Interactive Pipeline Stepper Bar (Desktop/Tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="hidden md:block mb-10 overflow-x-auto pb-2"
        >
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-md">
            {detailedArchitecturePhases.map((phase, idx) => {
              const isSelected = selectedStep === phase.step
              const Icon = phase.icon
              return (
                <button
                  key={phase.step}
                  onClick={() =>
                    setSelectedStep(isSelected ? null : phase.step)
                  }
                  className={clsx(
                    'group relative flex flex-1 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all duration-300',
                    isSelected
                      ? 'bg-violet-600/25 border border-violet-500/40 shadow-glow'
                      : 'hover:bg-white/[0.04] border border-transparent',
                  )}
                >
                  <div
                    className={clsx(
                      'flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border text-xs font-bold transition-transform group-hover:scale-105',
                      isSelected
                        ? 'bg-violet-500 border-violet-400 text-white'
                        : 'bg-white/10 border-white/15 text-slate-300',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-white group-hover:text-violet-300">
                      {phase.title.split(' ')[0]} {phase.title.split(' ')[1]}
                    </p>
                    <p className="truncate text-[10px] text-slate-400">
                      {phase.layer.split(' ')[0]}
                    </p>
                  </div>
                  {idx < detailedArchitecturePhases.length - 1 && (
                    <span className="hidden lg:block text-slate-600 text-xs pl-1 select-none">
                      →
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* 6-Card Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedArchitecturePhases.map((phase, i) => {
            const Icon = phase.icon
            const style = accentStyles[phase.accentColor]
            const isSelected = selectedStep === phase.step

            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: reducedMotion ? 0 : i * 0.08, duration: 0.5 }}
                onClick={() => setSelectedStep(isSelected ? null : phase.step)}
                className={clsx(
                  'glass-card relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-300 cursor-pointer select-none',
                  isSelected
                    ? 'border-violet-500/80 bg-white/[0.08] ring-2 ring-violet-500/40 shadow-2xl scale-[1.01]'
                    : 'border-white/10 bg-white/[0.04] hover:-translate-y-1',
                  style.borderHover,
                  style.ringGlow,
                )}
              >
                <div>
                  {/* Top Row: Step Number & Architecture Layer Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-violet-400 font-display tracking-tight">
                        {phase.step}
                      </span>
                      <span
                        className={clsx(
                          'rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider',
                          style.badge,
                        )}
                      >
                        {phase.layer}
                      </span>
                    </div>

                    <span
                      className={clsx(
                        'grid h-10 w-10 place-items-center rounded-xl border shadow-sm transition-transform hover:rotate-6',
                        style.iconBg,
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 text-lg font-bold text-white leading-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-cyan-300">
                    {phase.summary}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Bottom Section: Telemetry Metric & Tags */}
                <div className="mt-5 pt-3 border-t border-white/10 flex flex-col gap-2.5">
                  {/* Performance / Metric pill */}
                  <div className="flex items-center justify-between rounded-lg bg-black/30 px-2.5 py-1.5 border border-white/5 text-[11px]">
                    <span className="text-slate-400 font-medium">
                      {phase.metricLabel}:
                    </span>
                    <span className={clsx('font-bold font-mono', style.metricText)}>
                      {phase.metric}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
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
              </motion.div>
            )
          })}
        </div>

        {/* Optional Action Banner */}
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-lg"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex-shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Want to experience this live workflow?
                </p>
                <p className="text-xs text-slate-400">
                  Try our interactive demo below or see how shops integrate their existing printers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="#demo"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform"
              >
                <span>Try Live Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                to="/for-shops"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                For Shop Owners
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
