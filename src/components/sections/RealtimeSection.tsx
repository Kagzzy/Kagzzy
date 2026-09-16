import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Smartphone, LayoutDashboard, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { RealtimeEvent } from '../../types'

const eventStream: (RealtimeEvent & { customerStatus: string; shopStatus: string })[] = [
  { id: 'e1', type: 'ORDER_CREATED', label: 'Order Placed', customerStatus: 'Order placed via WebApp', shopStatus: 'New order queued' },
  { id: 'e2', type: 'PAYMENT_CAPTURED', label: 'Payment Confirmed', customerStatus: 'Payment verified & recorded', shopStatus: 'Payment confirmed' },
  { id: 'e3', type: 'SHOP_ACCEPTED', label: 'Shop Accepted', customerStatus: 'Shop accepted order', shopStatus: 'Sent to print queue' },
  { id: 'e4', type: 'PRINT_JOB_ASSIGNED', label: 'Sent to Printer', customerStatus: 'Sent to Kagzzy Print Agent', shopStatus: 'Assigned to selected printer' },
  { id: 'e5', type: 'PRINTING_STARTED', label: 'Printing Started', customerStatus: 'Printing in progress', shopStatus: 'Printer active' },
  { id: 'e6', type: 'PRINT_COMPLETED', label: 'Print Complete', customerStatus: 'Printing completed', shopStatus: 'Collated and checked' },
  { id: 'e7', type: 'ORDER_READY_FOR_PICKUP', label: 'Ready for Pickup', customerStatus: 'Ready for counter pickup', shopStatus: 'Awaiting customer pickup' },
  { id: 'e8', type: 'ORDER_COLLECTED', label: 'Order Collected', customerStatus: 'Order picked up', shopStatus: 'Order marked completed' },
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
    <section id="realtime" className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none border-t border-white/10">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[35rem] w-[35rem] rounded-full bg-indigo-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-700/15 blur-[140px]"
      />
      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8 sm:gap-10">
        <SectionHeading
          tone="dark"
          eyebrow="ORDER VISIBILITY"
          title="Know what is happening with your order."
          description="Kagzzy keeps customers and shop staff updated as an order moves through its journey."
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
              {[
                { label: 'Payment Confirmed', key: 'e2' },
                { label: 'Shop Accepted', key: 'e3' },
                { label: 'Printing Started', key: 'e5' },
                { label: 'Ready for Pickup', key: 'e7' },
              ].map((s) => {
                const reached = eventStream.findIndex((e) => e.id === s.key) <= index
                return (
                  <div key={s.key} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className={`h-3.5 w-3.5 ${reached ? 'text-mint-400' : 'text-slate-600'}`} />
                    <span className={reached ? 'text-slate-200' : 'text-slate-500'}>{s.label}</span>
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
