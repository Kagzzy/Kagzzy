import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import {
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Hash,
} from 'lucide-react'
import { UpiChevronIcon } from '../ui/UpiIcon'

const paymentFeatures = [
  {
    icon: Smartphone,
    title: '1-Tap UPI Intent on Mobile',
    description: 'When ordering from a smartphone, Kagzzy invokes your preferred UPI app directly (Google Pay, PhonePe, Paytm, BHIM, CRED, or mobile banking) without manual VPA typing.',
    tag: 'Mobile Optimized',
  },
  {
    icon: QrCode,
    title: 'Dynamic Order QR on Desktop',
    description: 'Ordering from a laptop or desktop? A unique Dynamic QR is generated on screen containing the exact calculated amount and order reference, ready to scan from any phone.',
    tag: 'Desktop Screen',
  },
  {
    icon: ShieldCheck,
    title: 'Authoritative Webhook Verification',
    description: 'Orders are not queued on guesswork. The Kagzzy platform waits for an authoritative payment gateway webhook before confirming the transaction and notifying the shop.',
    tag: 'Automated Audit',
  },
  {
    icon: Hash,
    title: 'Unique Order & Payment Reference',
    description: 'Every verified payment receives a dedicated Kagzzy order reference (e.g. #KAG-82X91). This reference ties your payment to your document and serves as your pickup token.',
    tag: 'Reconciliation',
  },
]

export function PaymentSection() {
  return (
    <section
      id="payments"
      className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none"
    >
      {/* Background lights */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-[32rem] w-[32rem] rounded-full bg-emerald-700/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge tone="dark" className="gap-1.5 border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
            <UpiChevronIcon className="h-3.5 w-3.5" />
            TRANSPARENT &amp; VERIFIED CHECKOUT
          </Badge>
          <h2 className="heading-lg text-white mt-2">Safe, Instant UPI Payments</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-xl mx-auto">
            Pay seamlessly online before printing starts. Upfront payment confirmation eliminates paper waste for print shops and guarantees your job is ready when you arrive.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-5xl">
          {paymentFeatures.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-emerald-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mt-4">{feat.title}</h3>
                  <p className="text-xs text-slate-300/80 mt-2 leading-relaxed">{feat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Secure Payment Flow Banner */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-cyan-950/30 p-5 sm:p-6 backdrop-blur-xl max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Direct-to-Shop UPI Settlement</p>
              <p className="text-xs text-slate-300/80 mt-0.5">
                Zero commission on print orders. 100% of the customer print fee goes directly to the shop’s registered UPI ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
