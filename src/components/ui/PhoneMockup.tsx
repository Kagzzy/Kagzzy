import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import {
  ChevronDown,
  FileText,
  SlidersHorizontal,
  UploadCloud,
  Wallet,
  Radar,
  X,
  CheckCircle2,
} from 'lucide-react'
import { QrGlyph } from './QrGlyph'
import { KagzzyLogo } from './KagzzyLogo'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface PhoneMockupProps {
  className?: string
}

const navItems = [
  { icon: UploadCloud, label: 'Upload' },
  { icon: SlidersHorizontal, label: 'Configure' },
  { icon: Wallet, label: 'Pay', active: true },
  { icon: Radar, label: 'Track' },
]

export function PhoneMockup({ className }: PhoneMockupProps) {
  const reducedMotion = useReducedMotion()

  // Interactive UI State inside phone
  const [duplex, setDuplex] = useState(true)
  const [stapling, setStapling] = useState(false)
  const [colorMode, setColorMode] = useState<'bw' | 'color'>('bw')
  const [pageSize, setPageSize] = useState<'A4' | 'A3'>('A4')
  const [copies, setCopies] = useState(2)
  const [showQrCode, setShowQrCode] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  // Calculate dynamic price based on options
  const baseRate = colorMode === 'bw' ? 1.0 : 3.0
  const staplingCost = stapling ? 4 : 0
  const total = Math.round(12 * baseRate * (duplex ? 1 : 1.1) + staplingCost)

  const handlePay = () => {
    if (paymentStatus !== 'idle') return
    setPaymentStatus('loading')
    setTimeout(() => {
      setPaymentStatus('success')
      setTimeout(() => {
        setPaymentStatus('idle')
      }, 3500)
    }, 800)
  }

  return (
    <div className={clsx('relative w-[18.5rem] sm:w-[19.8rem] select-none', className)}>
      {/* 3D Phone Shell / Metallic Edge Frame */}
      <div className="relative rounded-[3rem] bg-gradient-to-b from-slate-600 via-slate-900 to-black p-[3.5px] shadow-[0_40px_90px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(124,58,237,0.3)] ring-1 ring-white/25">
        {/* Inner bezel */}
        <div className="rounded-[2.8rem] bg-black p-[7px]">
          {/* Phone Screen Container (White app background matching photo) */}
          <div className="relative overflow-hidden rounded-[2.35rem] bg-white font-sans text-slate-900 shadow-inner">
            
            {/* Dynamic Island Pill */}
            <div className="absolute left-1/2 top-[8px] z-30 h-[20px] w-[80px] -translate-x-1/2 rounded-full bg-black shadow-sm flex items-center justify-end px-2.5">
              <span className="h-2 w-2 rounded-full bg-indigo-950 ring-1 ring-slate-800" />
            </div>

            {/* Status Bar */}
            <div className="relative z-20 flex items-center justify-between px-6 pb-1 pt-2.5 text-[10.5px] font-bold text-slate-900">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                {/* Signal bars */}
                <div className="flex items-end gap-[1.5px]">
                  <span className="h-[4px] w-[2.5px] rounded-[0.5px] bg-slate-900" />
                  <span className="h-[6px] w-[2.5px] rounded-[0.5px] bg-slate-900" />
                  <span className="h-[8px] w-[2.5px] rounded-[0.5px] bg-slate-900" />
                  <span className="h-[10px] w-[2.5px] rounded-[0.5px] bg-slate-900" />
                </div>
                {/* Wifi icon */}
                <svg className="h-3 w-3 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21L24 8.98C20.93 5.9 16.69 4 12 4ZM12 8C14.76 8 17.29 9.07 19.17 10.82L12 18L4.83 10.82C6.71 9.07 9.24 8 12 8Z" />
                </svg>
                {/* Battery icon */}
                <div className="flex items-center">
                  <div className="h-[10px] w-[20px] rounded-[3.5px] border border-slate-900 p-[1.5px]">
                    <div className="h-full w-4/5 rounded-[1.5px] bg-slate-900" />
                  </div>
                </div>
              </div>
            </div>

            {/* App Top Bar: Kagzzy Logo + Slider Controls */}
            <div className="flex items-center justify-between px-5 pb-2 pt-1 bg-white">
              <KagzzyLogo size={22} textColor="text-slate-900" />
              <button
                type="button"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                title="Settings"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>

            {/* App Content Body */}
            <div className="space-y-2.5 px-4 pb-3 pt-1">
              
              {/* Shop Info Card */}
              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-2.5 shadow-xs transition-colors hover:bg-slate-100/70">
                {/* Shop Owner Avatar */}
                <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl border border-white bg-indigo-100 shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Shop Partner"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-black text-slate-900 leading-tight">
                    ABC Xerox, Pune
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-[9.5px] font-bold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open &bull; 4.8 (100+)
                  </p>
                </div>
                <button
                  type="button"
                  title="Close"
                  className="grid h-6 w-6 place-items-center rounded-full text-slate-400 hover:bg-slate-200/60 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Document Info Card */}
              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-rose-50 border border-rose-100 text-rose-500">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-black text-slate-900">
                    Resume.pdf
                  </p>
                  <p className="text-[9.5px] font-medium text-slate-400">
                    2.4 MB &bull; 12 pages
                  </p>
                </div>
                <button
                  type="button"
                  title="Remove file"
                  className="grid h-6 w-6 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Print Options Chips */}
              <div>
                <p className="mb-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Print Options
                </p>
                <div className="flex items-center gap-1.5">
                  {/* Page Size Chip */}
                  <button
                    type="button"
                    onClick={() => setPageSize((v) => (v === 'A4' ? 'A3' : 'A4'))}
                    className={clsx(
                      'rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all',
                      pageSize === 'A4'
                        ? 'border-2 border-violet-500 bg-violet-50 text-violet-700 shadow-xs'
                        : 'border border-slate-200 bg-white text-slate-600',
                    )}
                  >
                    {pageSize}
                  </button>

                  {/* Color / BW Chip */}
                  <button
                    type="button"
                    onClick={() => setColorMode((v) => (v === 'bw' ? 'color' : 'bw'))}
                    className={clsx(
                      'rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all',
                      colorMode === 'bw'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-gradient-to-r from-pink-500 to-indigo-500 text-white shadow-xs',
                    )}
                  >
                    {colorMode === 'bw' ? 'B&W' : 'Color'}
                  </button>

                  {/* Copies Chip */}
                  <button
                    type="button"
                    onClick={() => setCopies((v) => (v % 4) + 1)}
                    className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <span>{copies} Copies</span>
                    <ChevronDown className="h-3 w-3 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Toggles: Duplex and Stapling */}
              <div className="space-y-1.5 pt-0.5">
                {/* Duplex Toggle */}
                <button
                  type="button"
                  onClick={() => setDuplex((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-1.5 transition-colors hover:bg-slate-100/80"
                >
                  <span className="text-[11px] font-bold text-slate-800">
                    Duplex (Both sides)
                  </span>
                  <div
                    className={clsx(
                      'relative h-5 w-9 rounded-full transition-colors duration-200',
                      duplex ? 'bg-violet-600' : 'bg-slate-300',
                    )}
                  >
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={clsx(
                        'absolute top-[2px] h-4 w-4 rounded-full bg-white shadow-sm',
                        duplex ? 'right-[2px]' : 'left-[2px]',
                      )}
                    />
                  </div>
                </button>

                {/* Stapling Toggle */}
                <button
                  type="button"
                  onClick={() => setStapling((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-3 py-1.5 transition-colors hover:bg-slate-100/80"
                >
                  <span className="text-[11px] font-bold text-slate-800">
                    Stapling (+₹4)
                  </span>
                  <div
                    className={clsx(
                      'relative h-5 w-9 rounded-full transition-colors duration-200',
                      stapling ? 'bg-violet-600' : 'bg-slate-300',
                    )}
                  >
                    <motion.div
                      layout
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className={clsx(
                        'absolute top-[2px] h-4 w-4 rounded-full bg-white shadow-sm',
                        stapling ? 'right-[2px]' : 'left-[2px]',
                      )}
                    />
                  </div>
                </button>
              </div>

              {/* Total Price Bar */}
              <div className="flex items-baseline justify-between border-t border-dashed border-slate-200 pt-2">
                <span className="text-[11px] font-bold text-slate-500">Total</span>
                <span className="text-[25px] font-black text-slate-900 tracking-tight">
                  ₹24
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-1.5 pt-0.5">
                {/* Pay with UPI Primary Button */}
                <motion.button
                  type="button"
                  onClick={handlePay}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                  className={clsx(
                    'relative w-full overflow-hidden rounded-xl py-2.5 text-[12px] font-bold transition-all shadow-md',
                    paymentStatus === 'success'
                      ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                      : 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/30',
                  )}
                >
                  <AnimatePresence mode="wait">
                    {paymentStatus === 'loading' ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing UPI...
                      </motion.span>
                    ) : paymentStatus === 'success' ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                        Paid ₹24! Pickup Code: #782
                      </motion.span>
                    ) : (
                      <span key="idle">Pay with UPI</span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Show QR Code Secondary Button */}
                <button
                  type="button"
                  onClick={() => setShowQrCode((v) => !v)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2 text-[11px] font-bold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <QrGlyph className="h-3.5 w-3.5 text-slate-900" />
                  {showQrCode ? 'Hide QR Code' : 'Show QR Code'}
                </button>
              </div>

              {/* QR Code Drawer Modal inside phone */}
              <AnimatePresence>
                {showQrCode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden rounded-xl border border-violet-200 bg-violet-50/70 p-2 text-center"
                  >
                    <div className="mx-auto aspect-square w-20 bg-white p-1 rounded-lg border border-slate-200">
                      <QrGlyph className="h-full w-full text-slate-900" />
                    </div>
                    <p className="mt-1 text-[9px] font-bold text-violet-700">
                      Show to ABC Xerox counter
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Tab Bar Navigation */}
            <div className="flex items-center justify-around border-t border-slate-100 bg-white px-2 py-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={clsx(
                    'flex flex-col items-center gap-0.5',
                    item.active ? 'text-violet-600 font-bold' : 'text-slate-400 font-medium',
                  )}
                >
                  <div
                    className={clsx(
                      'grid h-6 w-6 place-items-center rounded-full transition-colors',
                      item.active ? 'bg-violet-100 text-violet-700' : '',
                    )}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[8.5px]">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Home Bar Indicator */}
            <div className="flex justify-center pb-2 pt-0.5">
              <span className="h-1 w-24 rounded-full bg-slate-900/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Realistic surface drop shadow beneath phone */}
      <div
        aria-hidden
        className="mx-auto -mt-3 h-5 w-4/5 rounded-full bg-black/80 blur-lg"
      />
    </div>
  )
}
