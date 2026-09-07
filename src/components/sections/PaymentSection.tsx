import { useState } from 'react'
import { motion } from 'framer-motion'
import { QrCode, Smartphone, Loader2, CheckCircle2, Lock } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import type { PaymentStage } from '../../types'

const apps = ['Google Pay', 'PhonePe', 'Paytm', 'BHIM', 'Amazon Pay']

const methods = [
  {
    icon: Smartphone,
    title: 'UPI Intent',
    description: 'Fast mobile checkout with UPI Intent — pay directly from your installed UPI app.',
  },
  {
    icon: QrCode,
    title: 'Dynamic QR',
    description: 'Dynamic QR for desktop and fallback payments — scan and pay from any UPI app.',
  },
]

const stageCopy: Record<PaymentStage, string> = {
  idle: 'Ready to pay',
  initiated: 'Payment initiated…',
  verifying: 'Verifying payment…',
  confirmed: 'Payment confirmed — order unlocked',
}

/** UPI payment education section with a small interactive confirmation demo. */
export function PaymentSection() {
  const [stage, setStage] = useState<PaymentStage>('idle')

  const runFlow = () => {
    setStage('initiated')
    window.setTimeout(() => setStage('verifying'), 900)
    window.setTimeout(() => setStage('confirmed'), 2200)
  }

  return (
    <section id="payments" className="section-padding bg-lightbg">
      <div className="container-kagzzy flex flex-col items-center gap-8">
        <SectionHeading eyebrow="Payments" title="Pay the way you already do." />

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {apps.map((app) => (
            <span
              key={app}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-textdark shadow-card"
            >
              {app}
            </span>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            {methods.map((m) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="elevated-card flex items-start gap-3.5 p-4 sm:p-5"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl2 bg-violet-100 text-violet-600">
                  <m.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-textdark">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{m.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="flex items-center gap-2 rounded-xl2 bg-amber-50 px-4 py-3 text-xs text-amber-700">
              <Lock className="h-3.5 w-3.5 flex-shrink-0" />
              Opening your UPI app never confirms payment on its own — Kagzzy waits for verified
              confirmation before unlocking your order.
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="elevated-card flex flex-col items-center gap-5 p-8"
          >
            <div className="relative flex h-40 w-40 items-center justify-center rounded-xl3 bg-slate-900">
              <QrCode className="h-24 w-24 text-white" />
              {stage === 'verifying' && (
                <motion.div
                  className="absolute inset-0 rounded-xl3 border-2 border-cyan-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
              {stage === 'confirmed' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-mint-500 text-white shadow-glow"
                >
                  <CheckCircle2 className="h-5 w-5" />
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold">
              {stage === 'idle' && <span className="text-muted">{stageCopy.idle}</span>}
              {(stage === 'initiated' || stage === 'verifying') && (
                <span className="flex items-center gap-2 text-amber-600">
                  <Loader2 className="h-4 w-4 animate-spin" /> {stageCopy[stage]}
                </span>
              )}
              {stage === 'confirmed' && (
                <span className="flex items-center gap-2 text-mint-600">
                  <CheckCircle2 className="h-4 w-4" /> {stageCopy.confirmed}
                </span>
              )}
            </div>

            <div className="flex w-full items-center justify-between text-[11px] font-medium text-muted">
              {(['initiated', 'verifying', 'confirmed'] as const).map((s, i) => {
                const order: PaymentStage[] = ['idle', 'initiated', 'verifying', 'confirmed']
                const reached = order.indexOf(stage) >= order.indexOf(s)
                return (
                  <div key={s} className="flex flex-1 items-center">
                    <span className={`h-2 w-2 rounded-full ${reached ? 'bg-violet-500' : 'bg-slate-200'}`} />
                    {i < 2 && (
                      <span className={`mx-1 h-0.5 flex-1 rounded-full ${reached ? 'bg-violet-500' : 'bg-slate-200'}`} />
                    )}
                  </div>
                )
              })}
            </div>

            <Button
              variant="primary"
              className="w-full"
              disabled={stage !== 'idle' && stage !== 'confirmed'}
              onClick={stage === 'confirmed' ? () => setStage('idle') : runFlow}
            >
              {stage === 'confirmed' ? 'Reset demo' : 'Simulate UPI Payment'}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
