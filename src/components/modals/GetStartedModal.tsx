import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Store,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Printer,
  MapPin,
  Phone,
  User,
  ShieldCheck,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface GetStartedModalProps {
  isOpen: boolean
  onClose: () => void
  initialRole?: 'customer' | 'shop'
}

export function GetStartedModal({
  isOpen,
  onClose,
  initialRole = 'shop',
}: GetStartedModalProps) {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState<'customer' | 'shop'>(initialRole)
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

  const handleCustomerContinue = () => {
    onClose()
    navigate('/for-customers')
  }

  const resetAndClose = () => {
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 p-6 sm:p-8 text-white shadow-2xl"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close dialog"
            className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-violet-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Get Started with Kagzzy</span>
              </div>
              <h3 className="mt-2 text-2xl font-black text-white">
                How would you like to use Kagzzy?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Choose your role to start printing or onboard your local print shop.
              </p>

              {/* Role Selector Tabs */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedRole('shop')}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                    selectedRole === 'shop'
                      ? 'border-violet-500 bg-violet-600/20 shadow-[0_0_25px_rgba(139,92,246,0.25)] ring-1 ring-violet-500/50'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
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
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
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

              {/* Conditional Content depending on role */}
              {selectedRole === 'customer' ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-violet-400" />
                    Printing with Kagzzy is app-free!
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    You don't need to create an account or download an app. When visiting any partner shop, simply scan their counter QR standee to upload documents and pay directly via UPI.
                  </p>

                  <div className="mt-5 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={handleCustomerContinue}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                    >
                      <span>Explore Customer Experience</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Print Shop Owner Signup / Onboarding Form */
                <form onSubmit={handleShopSubmit} className="mt-6 space-y-3.5 text-left">
                  <div className="rounded-xl border border-violet-500/25 bg-violet-500/10 px-3.5 py-2 text-[11px] text-violet-200 flex items-center gap-2">
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
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
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
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
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
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
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
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
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
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-violet-500"
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
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-2.5 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                    >
                      <span>Submit Shop Onboarding</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Submission Confirmation Screen */
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
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
