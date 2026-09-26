import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import {
  Smartphone,
  SlidersHorizontal,
  CheckCircle2,
  Radar,
  Zap,
  Users,
  Clock,
  Printer,
  TrendingUp,
  ShieldCheck,
  Percent,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const customerBenefits = [
  {
    icon: Smartphone,
    title: 'Upload Directly From Phone',
    desc: 'No WhatsApp messaging, emailing files, or sharing personal contact numbers at the counter.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Print Settings',
    desc: 'Choose B&W or color, single or double-sided duplex, copies, and page ranges.',
  },
  {
    icon: Percent,
    title: 'Transparent Upfront Pricing',
    desc: 'See the exact total calculated automatically before paying. Zero surprises at pickup.',
  },
  {
    icon: CheckCircle2,
    title: '1-Tap UPI Online Payments',
    desc: 'Pay via Google Pay, PhonePe, Paytm, or BHIM with instant webhook verification.',
  },
  {
    icon: Radar,
    title: 'Live Order Tracking',
    desc: 'Know the moment your order is accepted, printing, and ready for pickup.',
  },
  {
    icon: Zap,
    title: 'Fast Counter Pickup',
    desc: 'Show your pickup identifier at the counter and receive your printed bundle without waiting.',
  },
]

const shopBenefits = [
  {
    icon: Users,
    title: 'Organized Counter Flow',
    desc: 'Customers order digitally from the standee QR instead of crowding the counter.',
  },
  {
    icon: Clock,
    title: 'Zero WhatsApp Clutter',
    desc: 'Stop downloading random files, photos, and messages into shared shop folders.',
  },
  {
    icon: ShieldCheck,
    title: 'Upfront Payment Guarantee',
    desc: 'Orders only enter the print queue once payment is confirmed, eliminating abandoned prints.',
  },
  {
    icon: Printer,
    title: 'Existing Printer Support',
    desc: 'Connect your current Canon, HP, Epson, Brother, Ricoh, or Xerox machines via Windows.',
  },
  {
    icon: Zap,
    title: 'Operator "PRINT NOW" Action',
    desc: 'You retain complete physical authorization. Browser never prints blindly without your check.',
  },
  {
    icon: TrendingUp,
    title: 'Order Visibility & Analytics',
    desc: 'Unified dashboard with live order queues, daily volume reports, and exportable logs.',
  },
]

export function BenefitsSection() {
  const [tab, setTab] = useState<'customer' | 'shop'>('customer')

  const items = tab === 'customer' ? customerBenefits : shopBenefits

  return (
    <section
      id="benefits"
      className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-[32rem] w-[32rem] rounded-full bg-violet-700/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="dark">BUILT FOR BOTH SIDES OF THE COUNTER</Badge>
          <h2 className="heading-lg text-white mt-2">Benefits Designed for Customers &amp; Print Shops</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Kagzzy solves the frustrating delays customers face and the manual operational chaos shop owners deal with every day.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setTab('customer')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
              tab === 'customer'
                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Smartphone className="h-4 w-4" />
            <span>Customer Benefits</span>
          </button>
          <button
            type="button"
            onClick={() => setTab('shop')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
              tab === 'shop'
                ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Printer className="h-4 w-4" />
            <span>Print Shop Benefits</span>
          </button>
        </div>

        {/* Cards Grid */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl"
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-4">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300/80 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Dynamic Link */}
        <div className="flex justify-center">
          {tab === 'customer' ? (
            <Link
              to="/for-customers"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-300 hover:text-white transition-colors"
            >
              <span>Explore complete customer features &amp; formats</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to="/for-shops"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-violet-300 hover:text-white transition-colors"
            >
              <span>Explore complete print shop tools &amp; printer integration</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
