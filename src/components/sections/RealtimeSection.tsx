import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Smartphone, LayoutDashboard, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { RealtimeEvent } from '../../types'

const eventStream: (RealtimeEvent & { customerStatus: string; shopStatus: string })[] = [
  { id: 'e1', type: 'ORDER_CREATED', label: 'ORDER_CREATED', customerStatus: 'Order placed', shopStatus: 'New order queued' },
  { id: 'e2', type: 'PAYMENT_CAPTURED', label: 'PAYMENT_CAPTURED', customerStatus: 'Payment received', shopStatus: 'Payment verified' },
  { id: 'e3', type: 'SHOP_ACCEPTED', label: 'SHOP_ACCEPTED', customerStatus: 'Shop accepted', shopStatus: 'Order accepted' },
  { id: 'e4', type: 'PRINTING_STARTED', label: 'PRINTING_STARTED', customerStatus: 'Printing', shopStatus: 'Printer running' },
  { id: 'e5', type: 'PRINT_COMPLETED', label: 'PRINT_COMPLETED', customerStatus: 'Print completed', shopStatus: 'Preparing order' },
  { id: 'e6', type: 'ORDER_READY_FOR_PICKUP', label: 'ORDER_READY_FOR_PICKUP', customerStatus: 'Ready for pickup', shopStatus: 'Awaiting pickup' },
]

/**
 * Live-system visualization: a customer phone and shop dashboard on either
 * side of a center event stream that cycles through the order lifecycle,
 * with an animated "packet" traveling between the two interfaces.
 */
export function RealtimeSection() {
  const [index, setIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % eventStream.length)
    }, 2400)
    return () => window.clearInterval(interval)
  }, [])

  const current = eventStream[index]

  return (
    <section id="realtime" className="section-padding relative overflow-hidden bg-bgdark2">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="container-kagzzy relative flex flex-col items-center gap-8 sm:gap-10">
        <SectionHeading
          tone="dark"
          eyebrow="Real-Time Experience"
          title="Every order, live from payment to pickup."
          description="Customers and shops both see the same order move through its lifecycle, in real time."
        />

        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* Customer phone */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto flex w-full max-w-xs flex-col gap-3.5 rounded-2xl p-4 sm:p-5"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <Smartphone className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Customer</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={current.customerStatus}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-xl font-bold text-white"
              >
                {current.customerStatus}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-col gap-2">
              {['Payment received', 'Shop accepted', 'Printing', 'Ready for pickup'].map((s) => {
                const reached = eventStream.findIndex((e) => e.customerStatus === s) <= index
                return (
                  <div key={s} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className={`h-3.5 w-3.5 ${reached ? 'text-mint-400' : 'text-slate-600'}`} />
                    <span className={reached ? 'text-slate-200' : 'text-slate-500'}>{s}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Center event stream */}
          <div className="relative flex flex-col items-center gap-4 py-6 lg:w-56">
            <div className="relative h-1 w-full rounded-full bg-white/10 lg:h-40 lg:w-1">
              {!reducedMotion && (
                <motion.span
                  animate={{
                    left: ['0%', '100%'],
                    top: ['0%', '100%'],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-1.5 h-4 w-4 rounded-full bg-cyan-400 shadow-glow-cyan lg:-left-1.5 lg:top-0"
                />
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={current.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="whitespace-nowrap rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[11px] font-mono font-semibold text-violet-300"
              >
                {current.label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Shop dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card mx-auto flex w-full max-w-xs flex-col gap-3.5 rounded-2xl p-4 sm:p-5"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <LayoutDashboard className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Shop Dashboard</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={current.shopStatus}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-xl font-bold text-white"
              >
                {current.shopStatus}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-col gap-1.5">
              {eventStream.map((e, i) => (
                <div
                  key={e.id}
                  className={`rounded-lg px-2.5 py-1.5 text-[11px] font-mono transition-colors ${
                    i === index
                      ? 'bg-violet-500/20 text-violet-200'
                      : i < index
                        ? 'text-slate-500'
                        : 'text-slate-600'
                  }`}
                >
                  {e.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
