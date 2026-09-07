import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/common/ScrollToTop'
import { HomePage } from './pages/HomePage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { FeaturesPage } from './pages/FeaturesPage'
import { ForShopsPage } from './pages/ForShopsPage'
import { ForCustomersPage } from './pages/ForCustomersPage'
import { PricingPage } from './pages/PricingPage'
import { FAQPage } from './pages/FAQPage'
import { useScrollProgress } from './hooks/useScrollProgress'

/** Top-of-page scroll progress indicator. */
function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500"
      style={{ scaleX: progress, width: '100%' }}
    />
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070B18] text-slate-100 flex flex-col justify-between">
        <ScrollToTop />
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/for-shops" element={<ForShopsPage />} />
            <Route path="/for-customers" element={<ForCustomersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
