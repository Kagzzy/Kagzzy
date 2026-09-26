import { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import {
  Store,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Printer,
  MapPin,
  Phone,
  User,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function GetStartedPage() {
  const [selectedRole, setSelectedRole] = useState<'customer' | 'shop'>('shop')
  const [submitted, setSubmitted] = useState(false)
  const [shopFormData, setShopFormData] = useState({
    shopName: '',
    ownerName: '',
    phone: '',
    city: '',
    printerCount: '1-2',
    printerBrands: 'Canon, HP',
  })

  const handleShopSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!shopFormData.shopName || !shopFormData.phone) return
    setSubmitted(true)
  }

  return (
    <div className="bg-[#070B18] text-white select-none">
      <PageHero
        badge="GET STARTED WITH KAGZZY"
        title="Modern Printing for"
        titleAccent="Customers &amp; Print Shops."
        description="Choose your path below to begin digital printing without queues or onboard your local shop setup."
        bgImage="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      />

      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-0 h-[35rem] w-[35rem] rounded-full bg-violet-700/15 blur-[160px]"
        />

        <div className="container-kagzzy max-w-2xl relative z-10">
          <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {!submitted ? (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white">Select Your Account Type</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Are you looking to print documents or partner your local print counter?
                  </p>
                </div>

                {/* Role Selector Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('shop')}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      selectedRole === 'shop'
                        ? 'border-violet-500 bg-violet-600/20 shadow-[0_0_25px_rgba(139,92,246,0.25)] ring-1 ring-violet-500/50'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border ${
                        selectedRole === 'shop'
                          ? 'bg-violet-600 text-white border-violet-400'
                          : 'bg-white/10 text-slate-300 border-white/10'
                      }`}
                    >
                      <Store className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">I'm a Print Shop</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        Digitize orders, eliminate WhatsApp clutter &amp; connect your printers.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedRole('customer')}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      selectedRole === 'customer'
                        ? 'border-violet-500 bg-violet-600/20 shadow-[0_0_25px_rgba(139,92,246,0.25)] ring-1 ring-violet-500/50'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border ${
                        selectedRole === 'customer'
                          ? 'bg-violet-600 text-white border-violet-400'
                          : 'bg-white/10 text-slate-300 border-white/10'
                      }`}
                    >
                      <Smartphone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">I'm a Customer</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        Upload documents, choose print settings, pay &amp; pick up easily.
                      </p>
                    </div>
                  </button>
                </div>

                {selectedRole === 'customer' ? (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mx-auto mb-3">
                      <Smartphone className="h-6 w-6" />
                    </span>
                    <h4 className="text-base font-bold text-white">Zero App Installation Required!</h4>
                    <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Customers don't need to register beforehand. Simply scan any partner shop's counter standee QR code with your smartphone camera to upload documents, pay via UPI, and pick up your prints.
                    </p>
                    <div className="mt-6 flex justify-center gap-3">
                      <Link
                        to="/for-customers"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                      >
                        <span>Explore Customer Experience</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleShopSubmit} className="space-y-4">
                    <div className="rounded-xl border border-violet-500/25 bg-violet-500/10 px-3.5 py-2 text-xs text-violet-200 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-violet-400 flex-shrink-0" />
                      <span>Free Official Acrylic Counter QR Standee included with onboarding.</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Print Shop Name *
                        </label>
                        <div className="relative">
                          <Store className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={shopFormData.shopName}
                            onChange={(e) =>
                              setShopFormData({ ...shopFormData, shopName: e.target.value })
                            }
                            placeholder="e.g. Sai Xerox & Printers"
                            className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Owner Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={shopFormData.ownerName}
                            onChange={(e) =>
                              setShopFormData({ ...shopFormData, ownerName: e.target.value })
                            }
                            placeholder="e.g. Ramesh Patel"
                            className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          WhatsApp / Contact Phone *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="tel"
                            required
                            value={shopFormData.phone}
                            onChange={(e) =>
                              setShopFormData({ ...shopFormData, phone: e.target.value })
                            }
                            placeholder="e.g. 9876543210"
                            className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          City / College Area
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={shopFormData.city}
                            onChange={(e) =>
                              setShopFormData({ ...shopFormData, city: e.target.value })
                            }
                            placeholder="e.g. Pune, Kothrud"
                            className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Number of Printers
                        </label>
                        <select
                          value={shopFormData.printerCount}
                          onChange={(e) =>
                            setShopFormData({ ...shopFormData, printerCount: e.target.value })
                          }
                          className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs sm:text-sm text-white outline-none focus:border-violet-500"
                        >
                          <option value="1">1 Printer</option>
                          <option value="2-3">2 - 3 Printers</option>
                          <option value="4+">4+ Commercial Machines</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                          Printer Brands / Models
                        </label>
                        <div className="relative">
                          <Printer className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            value={shopFormData.printerBrands}
                            onChange={(e) =>
                              setShopFormData({ ...shopFormData, printerBrands: e.target.value })
                            }
                            placeholder="e.g. Canon, HP, Epson"
                            className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                      >
                        <span>Submit Shop Onboarding</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="py-6 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-black text-white">
                  Shop Registration Received!
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{shopFormData.ownerName || shopFormData.shopName}</strong>! Our onboarding team will connect with your shop on WhatsApp ({shopFormData.phone}) to verify your details, generate your unique shop portal, and dispatch your acrylic QR standee.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                  <p className="font-bold text-white">Next Onboarding Steps:</p>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>1. Merchant portal access credentials sent via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>2. Install lightweight Kagzzy Print Agent on your counter Windows PC</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>3. Receive and display your official acrylic counter QR standee</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    to="/for-shops"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                  >
                    Return to For Shops
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
