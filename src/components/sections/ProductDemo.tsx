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
  { label: 'Payment received', done: true },
  { label: 'Shop accepted', done: true },
  { label: 'Printing', done: false },
  { label: 'Ready for pickup', done: false },
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
    <section className="section-padding bg-lightbg">
      <div className="container-kagzzy grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Live Demo"
            align="left"
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

        <div className="elevated-card overflow-hidden rounded-xl4">
          <div className="flex flex-col sm:flex-row">
            {/* Sidebar */}
            <div className="flex gap-2 overflow-x-auto border-b border-slate-100 bg-slate-50/70 p-3 sm:w-48 sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-r sm:p-4">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={clsx(
                      'focus-ring relative flex flex-shrink-0 items-center gap-2.5 rounded-xl2 px-3.5 py-2.5 text-sm font-semibold transition-colors',
                      isActive ? 'bg-white text-violet-600 shadow-card' : 'text-muted hover:bg-white/60',
                    )}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Main panel */}
            <div className="min-h-[420px] flex-1 p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'upload' && (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-textdark">Upload Your Document</h3>
                    <div className="mt-5 flex flex-col items-center justify-center gap-3 rounded-xl3 border-2 border-dashed border-violet-200 bg-violet-50/50 px-6 py-10 text-center">
                      <UploadCloud className="h-9 w-9 text-violet-400" />
                      <p className="text-sm font-medium text-textdark">Drag & drop your file here</p>
                      <p className="text-xs text-muted">or click to browse (PDF, DOCX, JPG)</p>
                    </div>
                    <div className="mt-4 flex items-center gap-3 rounded-xl2 border border-slate-200 bg-white p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-rose-100 text-rose-600">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-textdark">Resume.pdf</p>
                        <p className="text-xs text-muted">2.4 MB • 12 pages</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-mint-500" />
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
                    <h3 className="text-lg font-bold text-textdark">Configure Your Print</h3>
                    <div className="mt-5 space-y-5">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Paper size</p>
                        <div className="flex gap-2">
                          {(['A4', 'A3', 'Letter'] as const).map((size) => (
                            <button
                              key={size}
                              onClick={() => setPaperSize(size)}
                              className={clsx(
                                'focus-ring rounded-xl2 border px-4 py-2 text-sm font-medium transition-colors',
                                paperSize === size
                                  ? 'border-violet-500 bg-violet-500 text-white'
                                  : 'border-slate-200 text-muted hover:border-violet-300',
                              )}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Color</p>
                        <div className="flex gap-2">
                          {(['B&W', 'Color'] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setColorMode(mode)}
                              className={clsx(
                                'focus-ring rounded-xl2 border px-4 py-2 text-sm font-medium transition-colors',
                                colorMode === mode
                                  ? 'border-violet-500 bg-violet-500 text-white'
                                  : 'border-slate-200 text-muted hover:border-violet-300',
                              )}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl2 border border-slate-200 px-4 py-3">
                        <span className="text-sm font-medium text-textdark">Copies</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setCopies((c) => Math.max(1, c - 1))}
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-textdark hover:bg-slate-200"
                          >
                            −
                          </button>
                          <span className="w-4 text-center text-sm font-bold">{copies}</span>
                          <button
                            onClick={() => setCopies((c) => Math.min(20, c + 1))}
                            className="focus-ring flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-textdark hover:bg-slate-200"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl2 border border-slate-200 px-4 py-3">
                        <span className="text-sm font-medium text-textdark">Duplex printing</span>
                        <button
                          onClick={() => setDuplex((d) => !d)}
                          aria-pressed={duplex}
                          className={clsx(
                            'focus-ring relative h-6 w-11 rounded-full transition-colors',
                            duplex ? 'bg-violet-500' : 'bg-slate-300',
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
                    <div className="mt-6 flex items-center justify-between rounded-xl2 bg-slate-50 px-4 py-3">
                      <span className="text-sm font-semibold text-textdark">Total</span>
                      <span className="text-lg font-extrabold text-violet-600">₹{total}</span>
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
                    <h3 className="text-lg font-bold text-textdark">Pay with UPI</h3>
                    <div className="mt-5 flex flex-col items-center gap-4 rounded-xl3 border border-slate-200 bg-white p-6">
                      <div className="flex h-32 w-32 items-center justify-center rounded-xl2 bg-slate-900">
                        <QrCode className="h-20 w-20 text-white" />
                      </div>
                      <p className="text-sm text-muted">Scan with any UPI app</p>
                      <p className="text-2xl font-extrabold text-textdark">₹{total}</p>

                      <div className="flex min-h-[2rem] items-center gap-2 text-sm font-medium">
                        {paymentStage === 'idle' && <span className="text-muted">Waiting to start payment…</span>}
                        {paymentStage === 'initiated' && (
                          <span className="flex items-center gap-2 text-amber-600">
                            <Loader2 className="h-4 w-4 animate-spin" /> Payment initiated…
                          </span>
                        )}
                        {paymentStage === 'verifying' && (
                          <span className="flex items-center gap-2 text-amber-600">
                            <Loader2 className="h-4 w-4 animate-spin" /> Verifying payment…
                          </span>
                        )}
                        {paymentStage === 'confirmed' && (
                          <span className="flex items-center gap-2 text-mint-600">
                            <CheckCircle2 className="h-4 w-4" /> Payment confirmed — order unlocked
                          </span>
                        )}
                      </div>

                      {paymentStage !== 'confirmed' ? (
                        <Button
                          variant="primary"
                          onClick={runPaymentFlow}
                          disabled={paymentStage !== 'idle'}
                        >
                          Pay with UPI
                        </Button>
                      ) : (
                        <Button variant="primary" showArrow onClick={() => setActiveTab('tracking')}>
                          View Order Tracking
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
                    <h3 className="text-lg font-bold text-textdark">Track Your Order</h3>
                    <div className="mt-6 flex flex-col gap-5">
                      {trackingSteps.map((step, i) => (
                        <div key={step.label} className="flex items-center gap-4">
                          <div
                            className={clsx(
                              'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold',
                              step.done ? 'bg-mint-500 text-white' : 'bg-slate-200 text-slate-500',
                            )}
                          >
                            {step.done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                          </div>
                          <span
                            className={clsx(
                              'text-sm font-medium',
                              step.done ? 'text-textdark' : 'text-muted',
                            )}
                          >
                            {step.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 rounded-xl2 bg-violet-50 px-4 py-3 text-sm text-violet-700">
                      <ArrowRight className="h-4 w-4" />
                      Shop will tap PRINT NOW once your job is queued on the right printer.
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
