import { Hero } from '../components/sections/Hero'
import { ProblemSection } from '../components/sections/ProblemSection'
import { ProductDemo } from '../components/sections/ProductDemo'
import { Testimonials } from '../components/sections/Testimonials'

export function HomePage() {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <ProductDemo />
      <Testimonials />
    </div>
  )
}
