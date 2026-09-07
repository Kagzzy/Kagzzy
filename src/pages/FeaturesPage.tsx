import { FeatureGrid } from '../components/sections/FeatureGrid'
import { RealtimeSection } from '../components/sections/RealtimeSection'
import { SecuritySection } from '../components/sections/SecuritySection'
import { FinalCTA } from '../components/sections/FinalCTA'
import { PageHero } from '../components/ui/PageHero'
import { Link } from 'react-router-dom'

export function FeaturesPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Hero Header — Unified Purple Brand Theme */}
      <PageHero
        badge="POWERFUL CAPABILITIES"
        title="Features Built for Fast,"
        titleAccent="Modern Printing"
        description="Engineered from the ground up to eliminate store queues, eradicate WhatsApp file sharing, and deliver bank-grade encryption with direct hardware-level printer speeds."
        bgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-transform"
          >
            See System Workflow
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors"
          >
            Explore Core Architecture
          </a>
        </div>
      </PageHero>

      {/* Feature Grid Component (8 Core Capabilities) */}
      <FeatureGrid />

      {/* Real-time Order Telemetry Simulation */}
      <RealtimeSection />

      {/* Document Security Section */}
      <SecuritySection />

      {/* Conversion Final CTA */}
      <FinalCTA />
    </div>
  )
}
