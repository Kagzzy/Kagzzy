import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Mail,
  MessageSquare,
  CheckCircle2,
  Store,
  HelpCircle,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

type ContactType = 'shop' | 'customer' | 'business'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialType?: ContactType
}

export function ContactModal({
  isOpen,
  onClose,
  initialType = 'shop',
}: ContactModalProps) {
  const [type, setType] = useState<ContactType>(initialType)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.emailOrPhone) return
    setSubmitted(true)
  }

  const resetAndClose = () => {
    setSubmitted(false)
    setFormData({ name: '', emailOrPhone: '', subject: '', message: '' })
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
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-slate-900/95 p-6 sm:p-8 text-white shadow-2xl"
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
              <div className="flex items-center gap-2 text-violet-400 font-bold text-xs uppercase tracking-wider">
                <MessageSquare className="h-4 w-4" />
                <span>Contact Kagzzy</span>
              </div>
              <h3 className="mt-2 text-2xl font-black text-white">Get in Touch</h3>
              <p className="mt-1 text-xs text-slate-300">
                Have a question or looking to bring Kagzzy to your local print shop? We're here to help.
              </p>

              {/* 3 Contact Options: Shop Onboarding | Customer Support | Business Enquiry */}
              <div className="grid grid-cols-3 gap-2 mt-5">
                {[
                  { id: 'shop', label: 'Shop Onboarding', icon: Store },
                  { id: 'customer', label: 'Customer Support', icon: HelpCircle },
                  { id: 'business', label: 'Business Enquiry', icon: Briefcase },
                ].map((opt) => {
                  const Icon = opt.icon
                  const isSelected = type === opt.id
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setType(opt.id as ContactType)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl border p-2.5 text-center transition-all ${
                        isSelected
                          ? 'border-violet-500 bg-violet-600/20 text-white shadow-sm ring-1 ring-violet-500/50'
                          : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <Icon className="h-4 w-4 text-violet-400" />
                      <span className="text-[10.5px] font-bold leading-tight">{opt.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      placeholder="e.g. rahul@gmail.com / 9876543210"
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={
                      type === 'shop'
                        ? 'Shop registration / QR standee inquiry'
                        : type === 'customer'
                          ? 'Order inquiry / payment question'
                          : 'Campus network / institutional partnership'
                    }
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about how we can help..."
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-violet-500 resize-none"
                  />
                </div>

                {/* Direct quick channels */}
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-violet-400" />
                    <a href="mailto:support@kagzzy.com" className="hover:text-white">support@kagzzy.com</a>
                  </span>
                  <span>WhatsApp: Active 7 Days</span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-6 py-2 text-xs font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-6 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto mb-3">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="text-xl font-black text-white">Message Sent!</h3>
              <p className="mt-1.5 text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our team will get back to you via {formData.emailOrPhone} promptly.
              </p>
              <div className="mt-5 flex justify-center">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white hover:scale-105 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
