import { PageHero } from '../components/ui/PageHero'
import { AboutSection } from '../components/sections/AboutSection'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="bg-[#070B18] text-white select-none">
      <PageHero
        badge="ABOUT KAGZZY"
        title="Simplifying Local Printing,"
        titleAccent="Empowering Local Shops."
        description="Kagzzy is on a mission to bring digital simplicity to everyday printing by connecting customers with the local print shops they know and trust."
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full max-w-md sm:max-w-none mx-auto px-4">
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
          >
            <span>See How It Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/for-shops"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/35 transition-colors text-center"
          >
            <span>For Shop Owners</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      <AboutSection />
    </div>
  )
}
