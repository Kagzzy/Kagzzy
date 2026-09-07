import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Printer,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Heart,
} from 'lucide-react'

const productLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'For Customers', href: '/for-customers' },
  { label: 'For Print Shops', href: '/for-shops' },
  { label: 'Windows Print Agent', href: '/how-it-works' },
  { label: 'Pricing Plans', href: '/pricing' },
]

const resourceLinks = [
  { label: 'Help Center', href: '/faq' },
  { label: 'Shop Setup Guide', href: '/for-shops' },
  { label: 'Print Options (A4/A3/Duplex)', href: '/for-customers' },
  { label: 'UPI Payment Support', href: '/pricing' },
  { label: 'System Status: All Systems Operational', href: '/features', live: true },
]

const companyLinks = [
  { label: 'About Kagzzy', href: '/' },
  { label: 'Careers', href: '/for-shops', badge: 'Hiring' },
  { label: 'Community Stories', href: '/' },
  { label: 'Merchant Partner Program', href: '/for-shops' },
  { label: 'Contact Support', href: '/faq' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Merchant Agreement', href: '#' },
]

const socials = [
  { icon: Twitter, label: 'X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setTimeout(() => {
      setEmail('')
      setSubscribed(false)
    }, 4000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-[#050813] border-t border-white/10 text-slate-300 select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container-kagzzy relative pt-12 pb-8 sm:pt-14 sm:pb-10">
        
        {/* Top Shop Onboarding / Newsletter Card */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-[10.5px] font-bold text-violet-300 mb-3">
                <Sparkles className="h-3 w-3" />
                FOR PRINT SHOP OWNERS
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Bring Kagzzy to your Xerox &amp; print counter
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300/90 max-w-xl">
                Eliminate WhatsApp clutter, USB virus risks, and manual UPI tallying. Get your counter QR standee delivered in 48 hours.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter shop phone or email"
                  className="flex-1 rounded-xl border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-medium text-white placeholder-slate-400 outline-none focus:border-violet-400 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Registered!
                    </span>
                  ) : (
                    <>
                      <span>Partner With Us</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 pb-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                <Printer className="h-5 w-5" />
              </span>
              <span className="text-xl font-black tracking-tight text-white">Kagzzy</span>
            </div>

            <p className="mt-3.5 max-w-sm text-xs sm:text-sm text-slate-400 leading-relaxed">
              Kagzzy connects local print shops with students and professionals. Making document printing as seamless as scanning, uploading, paying, and picking up.
            </p>

            {/* Credibility & Coverage Badges */}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <MapPin className="h-3.5 w-3.5 text-violet-400" />
                <span>Live across 500+ print shops in Maharashtra &amp; NCR</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero-storage file security &bull; Instant UPI settlement</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:bg-white/10 hover:border-white/25 hover:text-white"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Product</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white hover:underline"
                  >
                    {link.live && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white hover:underline"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="rounded-md bg-violet-600/30 border border-violet-500/40 px-1.5 py-0.2 text-[9px] font-bold text-violet-300">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal, Community & Back to Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>&copy; 2026 Kagzzy Technologies. Made with</span>
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500 inline mx-0.5" />
            <span>for local shops across India.</span>
          </p>

          <div className="flex items-center gap-4 text-xs">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
