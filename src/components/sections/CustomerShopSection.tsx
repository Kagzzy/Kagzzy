import { motion } from 'framer-motion'
import { QrCode, UploadCloud, Wallet, Radar, PackageCheck, Smartphone, LayoutDashboard, Printer } from 'lucide-react'
import { Button } from '../ui/Button'
import { TiltCard } from '../ui/TiltCard'

const customerBenefits = [
  { icon: QrCode, label: 'Scan & Start' },
  { icon: UploadCloud, label: 'Upload Easily' },
  { icon: Wallet, label: 'Pay Your Way' },
  { icon: Radar, label: 'Track Everything' },
  { icon: PackageCheck, label: 'Pick up locally' },
]

const shopBenefits = [
  'Digital customer ordering',
  'Real-time updates',
  'Print job management',
  'Works with existing printers',
  'Grow your business',
]

const recentOrders = [
  { name: 'Resume.pdf', status: 'Completed' },
  { name: 'Notes.pdf', status: 'Printing' },
  { name: 'Project.pdf', status: 'Review' },
  { name: 'Form.pdf', status: 'Pending' },
]

const statusColors: Record<string, string> = {
  Pending: 'bg-amber-100 text-amber-700',
  Review: 'bg-sky-100 text-sky-700',
  Printing: 'bg-violet-100 text-violet-700',
  Completed: 'bg-mint-100 text-mint-700',
}

/** Side-by-side customer and print-shop value proposition cards. */
export function CustomerShopSection() {
  return (
    <section id="for-customers" className="section-padding bg-lightbg">
      <div className="container-kagzzy grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        {/* Customer card */}
        <motion.div
          id="for-customers-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint-50 to-sky-50 p-5 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-mint-200/50 blur-3xl" />
          <h3 className="heading-md text-textdark">
            Your print order,
            <br />
            without the back-and-forth.
          </h3>
          <ul className="mt-6 flex flex-col gap-3">
            {customerBenefits.map((b, i) => (
              <motion.li
                key={b.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 text-sm font-medium text-textdark sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl2 bg-white text-mint-600 shadow-card">
                  <b.icon className="h-4 w-4" />
                </span>
                {b.label}
              </motion.li>
            ))}
          </ul>
          <Button variant="primary" size="md" showArrow className="mt-8">
            Start Printing
          </Button>

          <TiltCard
            tiltStrength={5}
            className="glass-card-light relative mt-8 ml-auto flex w-fit items-center gap-3 rounded-xl3 px-4 py-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-500 text-white">
              <Smartphone className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-textdark">Printing made easy! 😊</span>
          </TiltCard>
        </motion.div>

        {/* Shop card */}
        <motion.div
          id="for-shops"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 p-5 sm:p-7"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-violet-200/50 blur-3xl" />
          <h3 className="heading-md text-textdark">
            Turn your print shop
            <br />
            into a digital shop.
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {shopBenefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 text-sm font-medium text-textdark"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                {b}
              </motion.li>
            ))}
          </ul>
          <Button variant="dark" size="md" showArrow className="mt-8">
            Bring Kagzzy to Your Shop
          </Button>

          {/* Laptop dashboard mockup */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative mt-8 rounded-t-xl3 border-4 border-b-0 border-bgdark2 bg-bgdark2 p-3 shadow-elevated"
          >
            <div className="flex items-center gap-1.5 pb-2">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-mint-400" />
            </div>
            <div className="rounded-xl2 bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <LayoutDashboard className="h-3.5 w-3.5" /> Kagzzy Shop Dashboard
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-xl2 bg-violet-50 p-2.5 text-center">
                  <p className="text-[10px] text-muted">Today’s Orders</p>
                  <p className="text-base font-extrabold text-violet-600">24</p>
                </div>
                <div className="rounded-xl2 bg-mint-50 p-2.5 text-center">
                  <p className="text-[10px] text-muted">Revenue</p>
                  <p className="text-base font-extrabold text-mint-600">₹2,480</p>
                </div>
                <div className="rounded-xl2 bg-sky-50 p-2.5 text-center">
                  <p className="text-[10px] text-muted flex items-center justify-center gap-1">
                    <Printer className="h-3 w-3" /> Printers
                  </p>
                  <p className="text-base font-extrabold text-sky-600">3 / 3</p>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-1.5">
                {recentOrders.map((o) => (
                  <div key={o.name} className="flex items-center justify-between rounded-xl2 bg-slate-50 px-2.5 py-1.5">
                    <span className="text-[11px] font-medium text-textdark">{o.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${statusColors[o.status]}`}>
                      {o.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
