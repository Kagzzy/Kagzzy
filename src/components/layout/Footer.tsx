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
  CheckCircle2,
  Sparkles,
  Heart,
} from 'lucide-react'

const productLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'For Shops', href: '/for-shops' },
  { label: 'Pricing', href: '/pricing' },
]

const customerLinks = [
  { label: 'How to Print', href: '/how-it-works' },
  { label: 'Customer Experience', href: '/for-customers' },
  { label: 'Order Tracking', href: '/features' },
  { label: 'FAQs', href: '/faq' },
]

const shopOwnerLinks = [
  { label: 'Partner With Us', href: '/for-shops' },
  { label: 'Shop Login', href: '/login' },
  { label: 'Print Agent', href: '/for-shops#printer-integration' },
  { label: 'Shop Pricing', href: '/pricing' },
]

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Contact Us', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
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
    <footer className="relative overflow-hidden bg-[#070B18] border-t border-white/10 text-slate-300 select-none">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[130px]" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container-kagzzy relative pt-12 pb-8 sm:pt-14 sm:pb-10">
        
        {/* Top Shop Onboarding / Newsletter Card */}
        {/* Top Shop Onboarding / Newsletter Card */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-indigo-950/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-[10.5px] font-bold text-violet-300 mb-3">
                <Sparkles className="h-3 w-3" />
                FOR PRINT SHOP OWNERS
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Bring Kagzzy to your print shop.
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300/90 max-w-xl">
                Receive digital print orders, manage them from your shop dashboard, and print through your existing printers with the Kagzzy Print Agent.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your shop phone or email"
                  className="flex-1 rounded-xl border border-white/20 bg-black/40 px-4 py-2.5 text-xs font-medium text-white placeholder-slate-400 outline-none focus:border-violet-400 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 hover:brightness-110 active:scale-[0.98] transition-all flex-shrink-0"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" /> Registered!
                    </span>
                  ) : (
                    <>
                      <span>Partner With Us</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid — 2 columns on mobile, 6 on desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6 pb-10">
          
          {/* Brand Info Column (spans 2 columns on desktop) */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                <Printer className="h-5 w-5" />
              </span>
              <span className="text-xl font-black tracking-tight text-white">Kagzzy</span>
            </div>

            <p className="mt-2 text-xs sm:text-sm font-bold text-violet-300">
              Your Print, Your Way.
            </p>
            <p className="mt-1 max-w-sm text-xs sm:text-sm text-slate-400 leading-relaxed">
              Kagzzy connects customers with local print shops, making it easier to upload, configure, pay, track, and collect printed documents.
            </p>

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
          <div className="col-span-1">
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

          {/* Customers Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Customers</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {customerLinks.map((link) => (
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

          {/* Shop Owners Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Shop Owners</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {shopOwnerLinks.map((link) => (
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

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {companyLinks.map((link) => (
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

          {/* Legal Column on Mobile / Desktop */}
          <div className="col-span-1 lg:hidden">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal &amp; Terms</h4>
            <ul className="mt-3.5 flex flex-col gap-2.5 text-xs">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
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
