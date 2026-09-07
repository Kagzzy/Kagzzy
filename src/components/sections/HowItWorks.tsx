import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { workflowSteps } from '../../data/steps'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Six-step "how it works" timeline. Desktop shows a horizontal connected
 * line whose fill is driven by GSAP ScrollTrigger as the section scrolls
 * into view; mobile falls back to a simpler vertical timeline.
 */
export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-[35rem] w-[35rem] rounded-full bg-purple-700/15 blur-[160px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8 sm:gap-10">
        <SectionHeading
          tone="dark"
          eyebrow="How Kagzzy Works"
          title="From scan to pickup — just a few simple steps."
          description="Six simple steps take you from a shop’s QR code to a finished, ready-to-collect print."
        />

        {/* Desktop horizontal timeline */}
        <div className="relative hidden w-full lg:block">
          <div className="absolute left-0 right-0 top-8 h-[3px] rounded-full bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-8 h-[3px] origin-left rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500"
          />
          <div className="relative grid grid-cols-6 gap-4">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]"
                >
                  {step.icon}
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-violet-900 shadow">
                    {step.id}
                  </span>
                </motion.div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="relative flex w-full flex-col gap-8 lg:hidden">
          <div className="absolute bottom-0 left-8 top-0 w-[3px] rounded-full bg-white/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-0 left-8 top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-purple-500 via-violet-500 to-cyan-500"
          />
          {workflowSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative flex items-start gap-5 pl-1"
            >
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-violet-900 shadow">
                  {step.id}
                </span>
              </div>
              <div className="pt-3">
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-handwritten text-2xl text-violet-400"
        >
          Simple steps. A big difference.
        </motion.p>
      </div>
    </section>
  )
}
