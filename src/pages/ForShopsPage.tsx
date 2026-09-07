import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import {
  Printer,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Download,
  QrCode,
  Sparkles,
  PhoneCall,
  DollarSign,
} from 'lucide-react'

const shopPerks = [
  {
    icon: TrendingUp,
    title: '+35% Daily Print Volume',
    desc: 'Students and office workers choose Kagzzy shops because they can skip waiting in line and send jobs remotely.',
  },
  {
    icon: Clock,
    title: 'Save 3+ Hours Every Day',
    desc: 'Stop typing phone numbers, downloading WhatsApp attachments, and dealing with file format errors manually.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed 100% UPI Pre-Payment',
    desc: 'Every order is paid up-front before you click print. Zero unpaid printouts or abandoned paper bundles.',
  },
  {
    icon: Printer,
    title: 'Zero New Equipment Needed',
    desc: 'Keep your existing Canon, HP, Epson, or Ricoh machines. Our Windows agent communicates over normal USB or LAN.',
  },
]

const supportedBrands = [
  'Canon imageRUNNER',
  'HP LaserJet Pro',
  'Epson EcoTank & WorkForce',
  'Ricoh Aficio',
  'Konica Minolta bizhub',
  'Brother DCP Series',
  'Kyocera TASKalfa',
  'Xerox WorkCentre',
]

export function ForShopsPage() {
  const [dailyPrints, setDailyPrints] = useState(250)
  const [standeeForm, setStandeeForm] = useState({
    shopName: '',
    ownerName: '',
    phone: '',
    city: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Calculations
  const monthlyRevenue = Math.round(dailyPrints * 2.5 * 26)
  const extraEarnings = Math.round(monthlyRevenue * 0.32)
  const hoursSavedMonthly = Math.round((dailyPrints / 50) * 26)

  const handleStandeeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!standeeForm.shopName || !standeeForm.phone) return
    setSubmitted(true)
  }

  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="FOR PRINT SHOP OWNERS"
        title="Turn Your Xerox Shop into a"
        titleAccent="Digital Print Hub"
        description="Eliminate WhatsApp clutter, USB virus risks, and manual payment verification. Connect your existing printers to Kagzzy in 10 minutes."
        bgImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop&q=80"
        accentColor="emerald"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#standee-form"
            className="rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-transform"
          >
            Get Free Counter QR Standee
          </a>
          <a
            href="#calculator"
            className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            Calculate Extra Earnings
          </a>
        </div>
      </PageHero>

      {/* 4 Core Perks */}
      <section className="section-padding bg-[#090E24]/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-white">Why 500+ Shops Switched to Kagzzy</h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl mx-auto">
              Built specifically for the everyday reality of Indian photocopy and printing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {shopPerks.map((perk) => (
              <div
                key={perk.title}
                className="glass-card flex flex-col justify-between rounded-2xl p-5 border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 shadow-lg bg-white/[0.04]"
              >
                <div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30">
                    <perk.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white leading-tight">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Revenue & Time-Saved Calculator */}
      <section id="calculator" className="section-padding bg-[#070B18] relative overflow-hidden">
        <div className="container-kagzzy relative z-10">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-emerald-950/20 to-slate-900/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="text-center mb-8">
              <Badge tone="dark">EARNINGS ESTIMATOR</Badge>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-2">
                How Much More Can Your Shop Earn?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Slide to select your average daily pages printed and see your projected gains.
              </p>
            </div>

            {/* Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs sm:text-sm font-bold text-slate-300">
                  Current Daily Pages Printed:
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400">
                  {dailyPrints} pages / day
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={1500}
                step={50}
                value={dailyPrints}
                onChange={(e) => setDailyPrints(Number(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>50 (Small corner kiosk)</span>
                <span>750 (Busy college Xerox)</span>
                <span>1500+ (High-volume commercial hub)</span>
              </div>
            </div>

            {/* Output Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="text-xs font-semibold text-slate-400">Current Monthly Revenue</p>
                <p className="text-2xl sm:text-3xl font-black text-white mt-1">
                  ₹{monthlyRevenue.toLocaleString('en-IN')}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Based on standard ₹2.5/pg blend</p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-center">
                <p className="text-xs font-semibold text-emerald-300">Projected Extra Income</p>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
                  +₹{extraEarnings.toLocaleString('en-IN')}
                </p>
                <p className="text-[10px] text-emerald-400/80 mt-1">+32% higher order intake</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="text-xs font-semibold text-slate-400">Counter Time Saved</p>
                <p className="text-2xl sm:text-3xl font-black text-cyan-400 mt-1">
                  {hoursSavedMonthly} hrs
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Every month off WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free QR Standee Request Form */}
      <section id="standee-form" className="section-padding bg-[#090E24]/60 relative overflow-hidden">
        <div className="container-kagzzy relative z-10">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                100% Free Shop Welcome Kit
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Claim Your Free Acrylic QR Standee
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Delivered straight to your print shop doorstep with pre-configured location credentials.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-8 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white mx-auto mb-3 shadow-lg shadow-emerald-500/40">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-white">Standee Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Our regional onboarding manager will call {standeeForm.phone} within 2 hours to confirm your address and schedule delivery.
                </p>
              </div>
            ) : (
              <form onSubmit={handleStandeeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Shop Name (e.g. ABC Xerox &amp; Stationery)
                  </label>
                  <input
                    type="text"
                    required
                    value={standeeForm.shopName}
                    onChange={(e) => setStandeeForm({ ...standeeForm, shopName: e.target.value })}
                    placeholder="Enter shop name"
                    className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Owner Name</label>
                    <input
                      type="text"
                      required
                      value={standeeForm.ownerName}
                      onChange={(e) => setStandeeForm({ ...standeeForm, ownerName: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={standeeForm.phone}
                      onChange={(e) => setStandeeForm({ ...standeeForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">City / College Area</label>
                  <input
                    type="text"
                    required
                    value={standeeForm.city}
                    onChange={(e) => setStandeeForm({ ...standeeForm, city: e.target.value })}
                    placeholder="e.g. Pune University Gate / Kothrud"
                    className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 hover:brightness-110 transition-all"
                >
                  Submit Request &amp; Get Free Standee
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Supported Printer Brands */}
      <section className="py-12 bg-[#070B18] border-t border-white/10 text-center">
        <div className="container-kagzzy">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Compatible with 100% of Standard Desktop &amp; Commercial Heavy-Duty Printers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {supportedBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold text-slate-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
