import { FeatureGrid } from '../components/sections/FeatureGrid'
import { RealtimeSection } from '../components/sections/RealtimeSection'
import { SecuritySection } from '../components/sections/SecuritySection'
import { PageHero } from '../components/ui/PageHero'
import {
  Zap,
  SlidersHorizontal,
  FileCheck,
  CreditCard,
  Lock,
  Cpu,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const keyCapabilities = [
  {
    icon: Zap,
    title: 'Zero-Wait Counter Pickup',
    desc: 'Skip queue completely. Upload your files while walking to the shop and pick up right as they exit the printer tray.',
  },
  {
    icon: Lock,
    title: 'Bank-Grade AES-256 Encryption',
    desc: 'Documents are encrypted in transit and shredded from shop servers automatically once marked collected.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Precise Page & Duplex Control',
    desc: 'Set custom page ranges (e.g. 1-5, 8, 12-20), dual-sided printing, and paper orientation on the fly.',
  },
  {
    icon: CreditCard,
    title: 'Instant 1-Tap UPI Settlement',
    desc: 'Support for GPay, PhonePe, Paytm, and CRED. Instant token generation with 0% gateway commission markup.',
  },
  {
    icon: Cpu,
    title: 'Multi-Printer Load Balancing',
    desc: 'High-volume shops can distribute 100+ page jobs across 3 parallel laser printers automatically.',
  },
  {
    icon: FileCheck,
    title: 'Universal Format Parsing',
    desc: 'Direct parsing for PDF, DOCX, XLSX, PPTX, and high-DPI images with layout preservation.',
  },
]

export function FeaturesPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="POWERFUL CAPABILITIES"
        title="Features Built for Fast,"
        titleAccent="Modern Printing"
        description="Engineered from the ground up to eliminate store queues, eradicate WhatsApp file sharing, and deliver bank-grade encryption with direct hardware-level printer speeds."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=80"
        accentColor="cyan"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/how-it-works"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform"
          >
            See System Workflow
          </Link>
          <a
            href="#capabilities"
            className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            View All 6 Core Features
          </a>
        </div>
      </PageHero>

      {/* 6 Capabilities Highlights */}
      <section id="capabilities" className="py-12 bg-[#090E24]/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="container-kagzzy relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyCapabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-lg"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3.5 text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid Component */}
      <FeatureGrid />

      {/* Real-time Order Telemetry Simulation */}
      <RealtimeSection />

      {/* Document Security Section */}
      <SecuritySection />
    </div>
  )
}
