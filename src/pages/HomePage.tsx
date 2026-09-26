import { Hero } from '../components/sections/Hero'
import { ProblemSection } from '../components/sections/ProblemSection'
import { HowItWorks } from '../components/sections/HowItWorks'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { FeatureGrid } from '../components/sections/FeatureGrid'
import { ProductDemo } from '../components/sections/ProductDemo'
import { RealtimeSection } from '../components/sections/RealtimeSection'
import { PaymentSection } from '../components/sections/PaymentSection'
import { PrinterIntegration } from '../components/sections/PrinterIntegration'
import { SecuritySection } from '../components/sections/SecuritySection'
import { PricingPreviewSection } from '../components/sections/PricingPreviewSection'
import { Testimonials } from '../components/sections/Testimonials'
import { AboutSection } from '../components/sections/AboutSection'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero: Brand intro, value prop, "Your Print... Your Way!", customer & shop CTAs */}
      <Hero />

      {/* 2. The Problem: WhatsApp Chaos, No Visibility, Manual Workflow */}
      <ProblemSection />

      {/* 3. How Kagzzy Works Preview: Visual timeline */}
      <HowItWorks />

      {/* 4. Benefits: Customer benefits & Print-shop benefits */}
      <BenefitsSection />

      {/* 5. Key Platform Features Grid */}
      <FeatureGrid />

      {/* 6. Interactive Product Demo: Upload, Configure, Pay, Track */}
      <ProductDemo />

      {/* 7. Realtime Order Tracking Telemetry */}
      <RealtimeSection />

      {/* 8. Payments Explanation: UPI Intent, Dynamic QR, Webhook Verification */}
      <PaymentSection />

      {/* 9. Printer Integration & Windows Print Agent with explicit PRINT NOW action */}
      <PrinterIntegration />

      {/* 10. Security & Trust Information */}
      <SecuritySection />

      {/* 11. Print Shop Subscription Pricing Preview */}
      <PricingPreviewSection />

      {/* 12. Testimonials */}
      <Testimonials />

      {/* 13. About Section: Kagzzy Vision, simplifying local printing (id="about") */}
      <AboutSection />

      {/* 14. Frequently Asked Questions Preview */}
      <FAQ />

      {/* 15. Final Closing Call-to-Action */}
      <FinalCTA />
    </div>
  )
}
