import { useState } from 'react'
import { PageHero } from '../components/ui/PageHero'
import {
  Store,
  Users,
  Smartphone,
  Lock,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const [role, setRole] = useState<'owner' | 'staff'>('owner')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOtpSent(true)
    }, 600)
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoggedIn(true)
    }, 800)
  }

  return (
    <div className="bg-[#070B18] text-white select-none">
      <PageHero
        badge="PLATFORM AUTHENTICATION"
        title="Sign in to your"
        titleAccent="Kagzzy Shop Console."
        description="Access your incoming order queue, active print jobs, rate cards, and Windows Print Agent connection."
        bgImage="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      />

      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-0 h-[30rem] w-[30rem] rounded-full bg-violet-700/15 blur-[150px]"
        />

        <div className="container-kagzzy max-w-md relative z-10">
          <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {!loggedIn ? (
              <div>
                <div className="flex gap-2 rounded-xl bg-white/[0.04] p-1 border border-white/10 mb-6">
                  <button
                    type="button"
                    onClick={() => setRole('owner')}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all ${
                      role === 'owner'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Store className="h-3.5 w-3.5" />
                    <span>Shop Owner</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('staff')}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold transition-all ${
                      role === 'staff'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Users className="h-3.5 w-3.5" />
                    <span>Counter Staff</span>
                  </button>
                </div>

                {!otpSent ? (
                  <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        {role === 'owner' ? 'Registered Mobile Number' : 'Staff Phone / Operator ID'}
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <span>Get Verification Code</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Enter 6-Digit OTP
                        </label>
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="text-[11px] text-violet-400 hover:underline"
                        >
                          Change Number
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          maxLength={6}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="e.g. 482910"
                          className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-sm font-mono tracking-widest text-white placeholder-slate-500 outline-none focus:border-violet-500 text-center"
                        />
                      </div>
                      <p className="text-[10.5px] text-slate-400 mt-1">
                        OTP sent to <span className="font-mono text-white">{phone}</span>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <span>Verify &amp; Enter Dashboard</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-400">
                    New to Kagzzy?{' '}
                    <Link
                      to="/get-started"
                      className="font-bold text-violet-300 hover:text-white hover:underline ml-1"
                    >
                      Register your print shop
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto mb-3">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-black text-white">Authenticated</h3>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  Connecting to your Kagzzy Shop Console and local Windows Print Agent…
                </p>
                <div className="mt-5">
                  <Link
                    to="/for-shops"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white hover:scale-105 transition-all"
                  >
                    <span>Return to Shop Overview</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
