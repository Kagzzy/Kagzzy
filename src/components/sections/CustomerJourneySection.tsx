import { motion } from 'framer-motion'
import {
  QrCode,
  UploadCloud,
  SlidersHorizontal,
  CreditCard,
  Radar,
  PackageCheck,
} from 'lucide-react'
import { Badge } from '../ui/Badge'

const customerJourneySteps = [
  {
    step: '01',
    icon: QrCode,
    title: 'Scan Shop QR',
    subtitle: 'Zero App Download',
    description: 'Scan the counter standee at any participating Kagzzy print shop using your phone camera to open that shop’s web portal instantly.',
  },
  {
    step: '02',
    icon: UploadCloud,
    title: 'Upload Document',
    subtitle: 'Multi-File Support',
    description: 'Upload your PDF, JPG, or PNG files directly from your phone, laptop, or cloud storage with automatic page count detection.',
  },
  {
    step: '03',
    icon: SlidersHorizontal,
    title: 'Configure Printing',
    subtitle: 'Full Customization',
    description: 'Choose Black & White or Color, Single or Duplex double-sided pages, number of copies, and specific page ranges.',
  },
  {
    step: '04',
    icon: CreditCard,
    title: 'Pay Seamlessly',
    subtitle: 'Instant UPI Checkout',
    description: 'Review your calculated upfront price with zero surprises, then complete payment in 1 tap via Google Pay, PhonePe, Paytm, or BHIM.',
  },
  {
    step: '05',
    icon: Radar,
    title: 'Track in Realtime',
    subtitle: 'Live Queue Updates',
    description: 'Watch your order move smoothly from payment verification and shop acceptance to active printing and ready for pickup.',
  },
  {
    step: '06',
    icon: PackageCheck,
    title: 'Counter Pickup',
    subtitle: 'No Line Waiting',
    description: 'Walk to the counter when notified, show your order identifier code, and pick up your neatly organized documents right away.',
  },
]

export function CustomerJourneySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-violet-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="dark">THE CUSTOMER EXPERIENCE</Badge>
          <h2 className="heading-lg text-white mt-2">Print in 6 Simple Steps</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Scan &bull; Upload &bull; Configure &bull; Pay &bull; Track &bull; Pickup. Simple and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          {customerJourneySteps.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xl font-black text-violet-400">
                      {item.step}
                    </span>
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-mono text-violet-300">
                      {item.subtitle}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300/80 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
