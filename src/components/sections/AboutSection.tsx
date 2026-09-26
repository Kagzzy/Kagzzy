import { motion } from 'framer-motion'
import { Badge } from '../ui/Badge'
import {
  Store,
  Smartphone,
  Printer,
  Compass,
} from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 top-0 h-[35rem] w-[35rem] rounded-full bg-violet-700/15 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-700/15 blur-[140px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge tone="dark" className="gap-1.5 border-violet-500/30 bg-violet-500/10 text-violet-300">
            <Compass className="h-3.5 w-3.5" />
            ABOUT KAGZZY
          </Badge>
          <h2 className="heading-lg text-white mt-2">Our Vision &amp; Purpose</h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Simplifying everyday printing by connecting customers with the local print shops that keep neighbourhoods running.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Pillar 1: Simplifying Local Printing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 mb-4">
                <Smartphone className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">Simplifying Local Printing</h3>
              <p className="text-xs sm:text-sm text-slate-300/80 mt-2 leading-relaxed">
                Printing shouldn’t require waiting in counter queues, passing unverified files over messaging apps, or struggling with manual file transfers. Kagzzy streamlines the experience into a clean self-service flow: scan, upload, configure, pay, and pick up.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-violet-300">
              Zero-install &bull; 100% WebApp
            </div>
          </motion.div>

          {/* Pillar 2: Connecting Customers & Print Shops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 mb-4">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">Connecting Customers &amp; Print Shops</h3>
              <p className="text-xs sm:text-sm text-slate-300/80 mt-2 leading-relaxed">
                Local photocopy and Xerox centres are essential hubs in every educational and business ecosystem. Kagzzy acts as the digital bridge between students, working professionals, and local shop owners — fostering direct, transparent counter commerce.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-cyan-300">
              Community Centered &bull; Zero Commission
            </div>
          </motion.div>

          {/* Pillar 3: Digitizing Existing Print Shops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 mb-4">
                <Printer className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-white">Digitizing Existing Print Shops</h3>
              <p className="text-xs sm:text-sm text-slate-300/80 mt-2 leading-relaxed">
                We believe digital modernization should empower existing businesses without requiring expensive new machinery. The Kagzzy Print Agent connects directly to the Windows PCs and printers shops already use — turning existing setups into automated digital print hubs.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-300">
              Windows Agent &bull; Existing Hardware
            </div>
          </motion.div>
        </div>

        {/* Vision Statement Banner */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-indigo-950/30 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl">
          <p className="font-handwritten text-xl sm:text-2xl text-violet-300 mb-1">
            "Your Print... Your Way!"
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our mission is straightforward: give every customer complete clarity over their print requirements, upfront pricing, and peace of mind, while giving every local print shop the modern digital tools they need to thrive.
          </p>
        </div>
      </div>
    </section>
  )
}
