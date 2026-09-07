import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'

/** Auto-advancing testimonial carousel with manual prev/next controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5500)
    return () => window.clearInterval(interval)
  }, [])

  const go = (dir: number) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-purple-700/15 blur-[160px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8">
        <SectionHeading
          tone="dark"
          eyebrow="Testimonials"
          title={
            <>
              Loved by students,
              <br />
              professionals and shop owners.
            </>
          }
        />

        <div className="relative w-full max-w-2xl">
          <div className="relative min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-5 p-8 text-center sm:p-10 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl"
              >
                <Quote className="h-8 w-8 text-violet-400" />
                <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                  “{current.quote}”
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < current.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-sm font-bold text-white shadow-md">
                    {current.initials}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">{current.name}</p>
                    <p className="text-xs text-slate-400">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:border-violet-400 hover:text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-violet-500 shadow-glow' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-300 transition-colors hover:border-violet-400 hover:text-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
