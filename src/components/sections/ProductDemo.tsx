import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  UploadCloud,
  SlidersHorizontal,
  CreditCard,
  Radar,
  FileText,
  CheckCircle2,
  Loader2,
  QrCode,
  ArrowRight,
} from 'lucide-react'
import clsx from 'clsx'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'
import type { DemoTab, PaymentStage } from '../../types'

const tabs: { id: DemoTab; label: string; icon: typeof UploadCloud }[] = [
  { id: 'upload', label: 'Upload', icon: UploadCloud },
  { id: 'print-options', label: 'Print Options', icon: SlidersHorizontal },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'tracking', label: 'Order Tracking', icon: Radar },
]

const trackingSteps = [
  { label: 'Payment captured (Webhook verified)', done: true },
  { label: 'Shop accepted order', done: true },
  { label: 'Printer selected & operator approved', done: true },
  { label: 'Printing in progress', done: true },
  { label: 'Shop preparing & collation', done: false },
  { label: 'Ready for pickup (PRINT_ID: KAG-82X91)', done: false },
]

/**
 * A frontend-only, fully interactive product demo: switching sidebar tabs
 * swaps the main panel between upload, print-configuration, a simulated
 * UPI payment flow, and a live-style order tracking view.
 */
export function ProductDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>('upload')
  const [paperSize, setPaperSize] = useState<'A4' | 'A3' | 'Letter'>('A4')
  const [colorMode, setColorMode] = useState<'B&W' | 'Color'>('B&W')
  const [copies, setCopies] = useState(2)
  const [duplex, setDuplex] = useState(true)
  const [paymentStage, setPaymentStage] = useState<PaymentStage>('idle')

  const total = (colorMode === 'Color' ? 8 : 3) * copies + (duplex ? 0 : 2)

  const runPaymentFlow = () => {
    setPaymentStage('initiated')
    window.setTimeout(() => setPaymentStage('verifying'), 900)
    window.setTimeout(() => setPaymentStage('confirmed'), 2100)
  }

  return (
    <section id="demo" className="section-padding relative overflow-hidden bg-[#070B18] text-white select-none border-t border-white/10">
      {/* Background: subtle grid + noise + ambient purple/indigo glow matching Hero */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-[35rem] w-[35rem] rounded-full bg-purple-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-10 h-[30rem] w-[30rem] rounded-full bg-indigo-700/15 blur-[150px]"
      />

      <div className="container-kagzzy relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Live Demo"
            align="left"
            tone="dark"
            title="See Kagzzy in action."
            description="This is a real, interactive walkthrough of the customer experience — click through the tabs to try uploading, configuring, paying and tracking a print order."
          />
          <Button
            variant="primary"
            size="lg"
            showArrow
            onClick={() => setActiveTab('upload')}
          >
            Try Live Demo
          </Button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row">
            {/* Sidebar */}
            <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-white/[0.02] p-3 sm:w-48 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-r sm:p-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={clsx(
                      'focus-ring relative flex flex-shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white',
                    )}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Main panel */}
            <div className="min-h-[420px] flex-1 p-6 sm:p-8 bg-white/[0.01]">
              <AnimatePresence mode="wait">
                {activeTab === 'upload' && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-white">Upload Your Document</h3>
                    <div className="mt-5 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-violet-500/30 bg-violet-950/20 px-6 py-10 text-center hover:border-violet-400/50 transition-colors">
                      <UploadCloud className="h-9 w-9 text-violet-400" />
                      <p className="text-sm font-medium text-white">Drag & drop your file here</p>
                      <p className="text-xs text-slate-400">or click to browse (PDF, DOCX, JPG)</p>
                    </div>
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">Resume.pdf</p>
                        <p className="text-xs text-slate-400">2.4 MB • 12 pages</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </div>
                    <Button
                      className="mt-6"
                      variant="primary"
                      showArrow
                      onClick={() => setActiveTab('print-options')}
                    >
                      Continue
                    </Button>
                  </motion.div>
                )}

                {activeTab === 'print-options' && (
                  <motion.div
                    key="print-options"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-white">Configure Your Print</h3>
                    <div className="mt-5 space-y-5">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Paper size</p>
                        <div className="flex gap-2">
                          {(['A4', 'A3', 'Letter'] as const).map((size) => (
                            <button
                              key={size}
                              onClick={() => setPaperSize(size)}
                              className={clsx(
                                'focus-ring rounded-xl border px-4 py-2 text-sm font-medium transition-colors',
                                paperSize === size
                                  ? 'border-violet-500 bg-violet-600 text-white'
                                  : 'border-white/10 text-slate-300 hover:border-violet-400 bg-white/[0.03]',
                              )}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Color</p>
                        <div className="flex gap-2">
                          {(['B&W', 'Color'] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setColorMode(mode)}
                              className={clsx(
                                'focus-ring rounded-xl border px-4 py-2 text-sm font-medium transition-colors',
                                colorMode === mode
                                  ? 'border-violet-500 bg-violet-600 text-white'
                                  : 'border-white/10 text-slate-300 hover:border-violet-400 bg-white/[0.03]',
                              )}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="text-sm font-medium text-white">Copies</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setCopies((c) => Math.max(1, c - 1))}
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                          >
                            −
                          </button>
                          <span className="w-4 text-center text-sm font-bold text-white">{copies}</span>
                          <button
                            onClick={() => setCopies((c) => Math.min(20, c + 1))}
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                        <span className="text-sm font-medium text-white">Duplex printing</span>
                        <button
                          onClick={() => setDuplex((d) => !d)}
                          aria-pressed={duplex}
                          className={clsx(
                            'focus-ring relative h-6 w-11 rounded-full transition-colors',
                            duplex ? 'bg-violet-600' : 'bg-white/20',
                          )}
                        >
                          <motion.span
                            layout
                            className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow"
                            style={{ left: duplex ? '22px' : '2px' }}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span className="text-sm font-semibold text-white">Total</span>
                      <span className="text-lg font-extrabold text-violet-400">₹{total}</span>
                    </div>
                    <Button className="mt-6" variant="primary" showArrow onClick={() => setActiveTab('payment')}>
                      Continue to Payment
                    </Button>
                  </motion.div>
                )}

                {activeTab === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">Choose Payment Method</h3>
                      <span className="rounded-full bg-violet-500/10 border border-violet-500/30 px-2.5 py-0.5 text-[11px] font-mono text-violet-300">
                        Ref: KAG-82X91
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                      {/* Dynamic QR for Desktop/Fallback */}
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-slate-900 border border-white/15 shadow-inner">
                        <QrCode className="h-20 w-20 text-white" />
                        <span className="absolute bottom-1 text-[9px] font-mono text-violet-300 uppercase tracking-widest">
                          Dynamic QR
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">Dynamic QR generated for order <span className="font-mono text-white">#KAG-82X91</span></p>
                      <p className="text-2xl font-extrabold text-white">₹{total}</p>

                      <div className="flex min-h-[2rem] items-center gap-2 text-xs sm:text-sm font-medium">
                        {paymentStage === 'idle' && <span className="text-slate-400">Authoritative webhook awaiting verification…</span>}
                        {paymentStage === 'initiated' && (
                          <span className="flex items-center gap-2 text-amber-400">
                            <Loader2 className="h-4 w-4 animate-spin" /> UPI Intent launching app / scanning…
                          </span>
                        )}
                        {paymentStage === 'verifying' && (
                          <span className="flex items-center gap-2 text-amber-400">
                            <Loader2 className="h-4 w-4 animate-spin" /> Verifying gateway signature &amp; amount…
                          </span>
                        )}
                        {paymentStage === 'confirmed' && (
                          <span className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle2 className="h-4 w-4" /> Webhook verified — Order PAID (KAG-82X91)
                          </span>
                        )}
                      </div>

                      {paymentStage !== 'confirmed' ? (
                        <div className="flex flex-col sm:flex-row gap-2.5 w-full justify-center">
                          <Button
                            variant="primary"
                            showArrow
                            onClick={runPaymentFlow}
                            disabled={paymentStage !== 'idle'}
                          >
                            Pay via UPI Intent (Mobile)
                          </Button>
                          <button
                            type="button"
                            onClick={runPaymentFlow}
                            disabled={paymentStage !== 'idle'}
                            className="rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                          >
                            Scan Dynamic QR (Desktop)
                          </button>
                        </div>
                      ) : (
                        <Button variant="primary" showArrow onClick={() => setActiveTab('tracking')}>
                          View Order Tracking (PRINT_ID: KAG-82X91)
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'tracking' && (
                  <motion.div
                    key="tracking"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-white">Track Your Order</h3>
                    <div className="mt-6 flex flex-col gap-5">
                      {trackingSteps.map((step, i) => (
                        <div key={step.label} className="flex items-start gap-4">
                          <div
                            className={clsx(
                              'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5',
                              step.done ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-400',
                            )}
                          >
                            {step.done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                          </div>
                          <span
                            className={clsx(
                              'text-sm font-medium pt-1',
                              step.done ? 'text-white' : 'text-slate-400',
                            )}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
                      <ArrowRight className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span>Shop will tap PRINT NOW once your job is queued on the right printer.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
