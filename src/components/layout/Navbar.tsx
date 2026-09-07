import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { KagzzyLogo } from '../ui/KagzzyLogo'

const navTabs = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Features', path: '/features' },
  { label: 'For Shops', path: '/for-shops' },
  { label: 'For Customers', path: '/for-customers' },
  { label: 'Pricing', path: '/pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6">
        <nav
          className={clsx(
            'flex w-full max-w-7xl items-center justify-between rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3',
            scrolled
              ? 'border border-white/15 bg-[#070B18]/90 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl ring-1 ring-white/5'
              : 'border border-white/10 bg-[#070B18]/70 backdrop-blur-md',
          )}
        >
          {/* Left: Kagzzy Brand Logo matching reference */}
          <Link to="/" className="focus-ring group flex items-center">
            <KagzzyLogo size={32} />
          </Link>

          {/* Center: Navbar Tabs */}
          <ul className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navTabs.map((tab) => {
              const isActive =
                tab.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(tab.path)

              return (
                <li key={tab.path} className="relative">
                  <NavLink
                    to={tab.path}
                    className={clsx(
                      'relative flex flex-col items-center rounded-xl px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold transition-colors duration-200',
                      isActive ? 'text-white font-bold' : 'text-slate-300 hover:text-white',
                    )}
                  >
                    {/* Active Pill Glow matching reference image */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-glow"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/35 via-violet-600/30 to-purple-600/35 border border-blue-400/40 shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {tab.label}
                    </span>

                    {/* Active Bottom Illuminated Dot */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="relative z-10 mt-1 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"
                      />
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Right: Get Started Primary CTA (Login removed per user request) */}
          <div className="hidden items-center sm:flex">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button (Minimum 44px WCAG touch target) */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden active:bg-white/10"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#070B18]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-start gap-6 p-6 pt-24 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pages</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9.5px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  500+ Shops Live
                </span>
              </div>

              {navTabs.map((tab) => {
                const isActive =
                  tab.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(tab.path)

                return (
                  <NavLink
                    key={tab.path}
                    to={tab.path}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      'flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-bold transition-colors',
                      isActive
                        ? 'bg-violet-600/20 text-white border border-violet-500/40'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white',
                    )}
                  >
                    <span>{tab.label}</span>
                    <ArrowRight className="h-4 w-4 text-violet-400" />
                  </NavLink>
                )
              })}
            </div>

            <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
              <Link
                to="/how-it-works"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
