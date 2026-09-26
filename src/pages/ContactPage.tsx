import { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import {
  Mail,
  Store,
  HelpCircle,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from 'lucide-react'

type ContactType = 'shop' | 'customer' | 'business'

export function ContactPage() {
  const [type, setType] = useState<ContactType>('shop')
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

  return (
    <div className="bg-[#070B18] text-white select-none">
      <PageHero
        badge="GET IN TOUCH"
        title="We're Here to Help"
        titleAccent="Every Counter."
        description="Whether you want to partner your local print shop with Kagzzy, need support with a recent print order, or want to discuss a campus deployment, reach out to our team."
        bgImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      />

      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-indigo-700/15 blur-[160px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[140px]"
        />

        <div className="container-kagzzy max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              { id: 'shop', label: 'Shop Onboarding', desc: 'Register your counter & request acrylic standee', icon: Store },
              { id: 'customer', label: 'Customer Support', desc: 'Order tracking, refunds & print questions', icon: HelpCircle },
              { id: 'business', label: 'Business Enquiry', desc: 'Colleges, campuses & enterprise printer setups', icon: Briefcase },
            ].map((opt) => {
              const Icon = opt.icon
              const isSelected = type === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setType(opt.id as ContactType)}
                  className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'border-violet-500 bg-violet-600/20 shadow-[0_0_25px_rgba(139,92,246,0.25)] ring-1 ring-violet-500/50'
                      : 'border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-2">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-bold text-white">{opt.label}</span>
                  <span className="text-[11px] text-slate-400 mt-1 leading-snug">{opt.desc}</span>
                </button>
              )
            })}
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Send a Message to the Kagzzy Team</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Deshmukh"
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Email or Mobile Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      placeholder="e.g. anand@gmail.com / 9876543210"
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={
                      type === 'shop'
                        ? 'Shop Onboarding & Standee Request'
                        : type === 'customer'
                          ? 'Customer Print Support'
                          : 'Campus Franchise & Business Inquiry'
                    }
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you?"
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Mail className="h-4 w-4 text-violet-400" />
                    <span>Direct: <a href="mailto:support@kagzzy.com" className="text-white hover:underline">support@kagzzy.com</a></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-black text-white">Thank You for Reaching Out!</h3>
                <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received. Our team will contact you at <strong>{formData.emailOrPhone}</strong> within 1 business day.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', emailOrPhone: '', subject: '', message: '' })
                    }}
                    className="rounded-full border border-white/20 px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
