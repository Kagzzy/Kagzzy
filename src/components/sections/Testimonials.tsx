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
    <section id="testimonials" className="section-padding bg-lightbg">
      <div className="container-kagzzy flex flex-col items-center gap-8">
        <SectionHeading
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
                className="elevated-card flex flex-col items-center gap-5 p-8 text-center sm:p-10"
              >
                <Quote className="h-8 w-8 text-violet-300" />
                <p className="text-lg font-medium leading-relaxed text-textdark sm:text-xl">
                  “{current.quote}”
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < current.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-bluebrand-500 text-sm font-bold text-white">
                    {current.initials}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold text-textdark">{current.name}</p>
                    <p className="text-xs text-muted">{current.role}</p>
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
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted transition-colors hover:border-violet-300 hover:text-violet-600"
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
                    i === index ? 'w-6 bg-violet-500' : 'w-1.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-muted transition-colors hover:border-violet-300 hover:text-violet-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
