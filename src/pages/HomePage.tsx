import { Hero } from '../components/sections/Hero'
import { ProblemSection } from '../components/sections/ProblemSection'
import { ProductDemo } from '../components/sections/ProductDemo'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'

export function HomePage() {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <ProductDemo />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

