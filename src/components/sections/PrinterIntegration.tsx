import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  MonitorCog,
  Printer,
  ShieldCheck,
  Workflow,
  Zap,
  CheckCircle2,
  FileText,
  Cpu,
  Layers,
} from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const benefits = [
  {
    icon: Printer,
    title: 'Works with your existing printers',
    description: 'No printer replacement required.',
  },
  {
    icon: Layers,
    title: 'One or multiple printers',
    description: 'Start with one printer and add more when you need them.',
  },
  {
    icon: Workflow,
    title: 'Automatic printer selection',
    description: 'For multiple printers, Kagzzy checks compatibility and availability before assigning a print job.',
  },
  {
    icon: Zap,
    title: 'Background printing',
    description: 'Accepted orders can be sent to the Print Agent without manual file handling.',
  },
]

const printLifecycleSteps = [
  'Order Received',
  'Shop Accepts',
  'Print Agent Receives Job',
  'Printer Selected',
  'Printing',
  'Print Complete',
  'Ready for Pickup',
]

const connectedPrinters = [
  { id: 'p1', name: 'Canon imageRUNNER', model: 'iR-ADV 4545', type: 'High-Volume A4', toner: 94, tray: '88% Full', status: 'Online' },
  { id: 'p2', name: 'HP LaserJet Pro', model: 'M404dn', type: 'Monochrome Laser', toner: 86, tray: '95% Full', status: 'Online' },
  { id: 'p3', name: 'Epson EcoTank', model: 'L15150', type: 'Color InkTank', toner: 91, tray: '70% Full', status: 'Standby' },
]

export function PrinterIntegration() {
  const reducedMotion = useReducedMotion()
  const [selectedPrinterIndex, setSelectedPrinterIndex] = useState(0)
  const [currentFlowIndex, setCurrentFlowIndex] = useState(3)

  const activePrinter = connectedPrinters[selectedPrinterIndex]
  const printing = currentFlowIndex === 4

  return (
    <section id="printers" className="section-padding relative overflow-hidden bg-[#070B18] border-t border-white/10">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[120px]" aria-hidden />

      <div className="container-kagzzy relative flex flex-col gap-8 sm:gap-10">
        {/* Section Heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <Badge tone="dark">Existing Printer Integration</Badge>
          <h2 className="heading-lg text-white">Works with your existing printers.</h2>
          <p className="text-sm text-slate-300 sm:text-base leading-relaxed">
            No need to replace your existing printers. Kagzzy connects to your shop through the Kagzzy Print Agent and works with compatible printers already installed on your Windows PC.
          </p>
        </div>

        {/* Main 3-Column Layout: Left (Live Terminal), Center (Flow Diagram), Right (Benefits) */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-8">
          
          {/* LEFT: Live Windows Print Agent & Printer Terminal (Modern alternative to 3D) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/20 text-cyan-400">
                    <MonitorCog className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white leading-none">Windows Print Agent</p>
                    <p className="text-[10px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      v2.4 Connected &bull; 0.2ms
                    </p>
                  </div>
                </div>
                <span className="rounded-md bg-white/10 px-2 py-0.5 text-[9.5px] font-mono text-slate-300">
                  USB / LAN
                </span>
              </div>

              {/* Printer Tabs Switcher */}
              <div className="mt-3 flex gap-1.5 rounded-xl bg-black/40 p-1">
                {connectedPrinters.map((printer, idx) => (
                  <button
                    key={printer.id}
                    type="button"
                    onClick={() => setSelectedPrinterIndex(idx)}
                    className={`flex-1 rounded-lg py-1.5 text-[10.5px] font-bold transition-all ${
                      selectedPrinterIndex === idx
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {printer.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Hardware Visual Card & Animated Paper Feed */}
              <div className="relative mt-3.5 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
                {/* Active Printer Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{activePrinter.name}</h4>
                    <p className="text-[10px] text-slate-400">{activePrinter.model} &bull; {activePrinter.type}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                    {printing ? 'Printing...' : activePrinter.status}
                  </span>
                </div>

                {/* Animated Output Slot & Document Eject */}
                <div className="relative mt-4 flex flex-col items-center justify-center">
                  {/* Printer top slot */}
                  <div className="relative z-20 h-2 w-48 rounded-full bg-slate-800 ring-1 ring-white/10 shadow-inner" />

                  {/* Animated Document Paper Sheet */}
                  <motion.div
                    animate={
                      printing
                        ? { y: [16, -10, 16], opacity: [0.8, 1, 0.8] }
                        : { y: [0, -3, 0] }
                    }
                    transition={{
                      duration: printing ? 1.6 : 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative z-10 -mt-1 w-36 rounded-md border border-slate-300 bg-white p-2.5 shadow-lg text-slate-800"
                  >
                    {/* Laser scan line over paper while printing */}
                    {printing && !reducedMotion && (
                      <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                        className="pointer-events-none absolute inset-x-0 h-[2px] bg-cyan-500 shadow-[0_0_8px_cyan]"
                      />
                    )}

                    <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3 text-violet-600" />
                        <span className="text-[8.5px] font-bold">Resume.pdf</span>
                      </div>
                      <span className="text-[7.5px] font-mono font-bold text-slate-500">12 pgs</span>
                    </div>

                    {/* Paper text lines simulation */}
                    <div className="mt-1.5 space-y-1">
                      <div className="h-1 w-full rounded-full bg-slate-300" />
                      <div className="h-1 w-4/5 rounded-full bg-slate-300" />
                      <div className="h-1 w-2/3 rounded-full bg-slate-200" />
                    </div>

                    <div className="mt-2 flex items-center justify-between pt-1 border-t border-slate-100">
                      <span className="text-[7.5px] font-bold text-emerald-600 flex items-center gap-0.5">
                        <CheckCircle2 className="h-2.5 w-2.5" /> High-Res
                      </span>
                      <span className="text-[7.5px] font-semibold text-slate-400">Duplex B&amp;W</span>
                    </div>
                  </motion.div>

                  {/* Output Tray Casing */}
                  <div className="relative -mt-2 h-7 w-44 rounded-b-xl border-x border-b border-slate-700 bg-slate-800/90 shadow-md flex items-center justify-center">
                    <span className="text-[8px] font-mono text-slate-400 tracking-wider">PAPER TRAY OUTPUT</span>
                  </div>
                </div>

                {/* Hardware Telemetry Bar */}
                <div className="mt-4 grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-violet-400" />
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none">Toner Level</p>
                      <p className="font-bold text-white">{activePrinter.toner}% K-Black</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-cyan-400" />
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none">Paper Supply</p>
                      <p className="font-bold text-white">{activePrinter.tray}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CENTER: Kagzzy -> Kagzzy Print Agent -> Your Printers Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-2.5 text-center"
          >
            <FlowNode icon={Cloud} label="Kagzzy" color="#7C3AED" />
            <ConnectorLine />
            <FlowNode icon={MonitorCog} label="Kagzzy Print Agent" color="#06B6D4" />
            <ConnectorLine />
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {['Printer 1', 'Printer 2', 'Printer 3'].map((p, i) => (
                <FlowNode key={p} icon={Printer} label={i === 1 ? 'Your Printers' : p} color="#10B981" small delay={i * 0.15} />
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-400 max-w-xs leading-relaxed">
              One printer? Print directly. Multiple printers? Kagzzy selects a suitable available printer based on the order requirements.
            </p>
          </motion.div>

          {/* RIGHT: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30 mt-0.5">
                  <b.icon className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{b.title}</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{b.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Explain Single vs Multiple Printers */}
        <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl max-w-3xl mx-auto w-full text-center">
          <h3 className="text-lg font-bold text-white">One printer or many — Kagzzy handles both.</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            If your shop has one compatible printer, the job is sent directly to it. If you have multiple printers, the Kagzzy Print Agent checks each printer’s availability and supported capabilities before selecting the right one.
          </p>
        </div>

        {/* Printing Workflow Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl p-5 sm:p-6"
        >
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-300">PRINT WORKFLOW</span>
            <p className="text-xs text-slate-400 mt-0.5">
              How orders flow from customer placement to physical pickup
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {printLifecycleSteps.map((step, i) => {
              const isDone = i <= currentFlowIndex
              return (
                <div key={step} className="flex items-center gap-2 sm:gap-2.5">
                  <button
                    type="button"
                    onClick={() => setCurrentFlowIndex(i)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isDone
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                        : 'border-white/15 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isDone && <CheckCircle2 className="h-3 w-3" />}
                    {step}
                  </button>
                  {i < printLifecycleSteps.length - 1 && <span className="hidden sm:inline text-slate-600 text-xs">&rarr;</span>}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ConnectorLine() {
  return (
    <svg width="3" height="28" viewBox="0 0 3 28" fill="none" aria-hidden>
      <line x1="1.5" y1="0" x2="1.5" y2="28" stroke="#334155" strokeWidth="2" />
      <motion.line
        x1="1.5"
        y1="0"
        x2="1.5"
        y2="28"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeDasharray="6 8"
        animate={{ strokeDashoffset: [0, -28] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  )
}

function FlowNode({
  icon: Icon,
  label,
  color,
  small = false,
  delay = 0,
}: {
  icon: typeof Cloud
  label: string
  color: string
  small?: boolean
  delay?: number
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <motion.span
          animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.15, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full blur-md"
          style={{ backgroundColor: color }}
        />
        <span
          className={`relative flex items-center justify-center rounded-full border border-white/10 bg-bgdark2 text-white ${
            small ? 'h-9 w-9' : 'h-12 w-12'
          }`}
          style={{ boxShadow: `0 0 24px -6px ${color}` }}
        >
          <Icon className={small ? 'h-4 w-4' : 'h-5 w-5'} style={{ color }} />
        </span>
      </div>
      <span className={`font-medium text-slate-300 ${small ? 'text-[10px]' : 'text-xs'}`}>{label}</span>
    </div>
  )
}
