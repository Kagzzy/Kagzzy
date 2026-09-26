import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Search, ChevronDown, ArrowRight } from 'lucide-react'
import { faqItems } from '../data/faq'

interface DetailedFAQItem {
  id: string
  category: 'customer' | 'shop' | 'payment' | 'security'
  question: string
  answer: string
}

const comprehensiveFaqs: DetailedFAQItem[] = [
  // Direct import from faqItems
  ...faqItems.map((item) => ({
    id: item.id,
    category: (item.category === 'customer' ? 'customer' : 'shop') as 'customer' | 'shop',
    question: item.question,
    answer: item.answer,
  })),
  // Additional payment & security specific questions
  {
    id: 'faq-p1',
    category: 'payment',
    question: 'Which payment methods are accepted on Kagzzy?',
    answer:
      'Kagzzy supports UPI Intent payments (Google Pay, PhonePe, Paytm, BHIM, and bank UPI apps) on mobile, as well as Dynamic QR codes for scanning on desktop or counter displays. Payments are verified instantly via authoritative webhook.',
  },
  {
    id: 'faq-p2',
    category: 'payment',
    question: 'What happens if a paper jam or print issue occurs?',
    answer:
      'If an order is rejected or cancelled by the shop due to paper jam, power interruption, or out-of-stock paper before completion, the shop records the issue and the payment is reconciled or refunded back to the source account.',
  },
  {
    id: 'faq-sec1',
    category: 'security',
    question: 'Are my personal and confidential documents safe?',
    answer:
      'Yes. Documents are transferred over encrypted HTTPS/TLS connections into private storage. Only the specific print shop you placed the order with is granted temporary access to spool the document to their printer. Files are automatically removed from active storage after 24 hours.',
  },
  {
    id: 'faq-sec2',
    category: 'security',
    question: 'Does Kagzzy retain my files permanently?',
    answer:
      'No. Kagzzy does not permanently store customer documents. Documents are retained in private temporary storage strictly for fulfillment and order inspection, and are automatically purged from active storage 24 hours after completion.',
  },
]

export function FAQPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openId, setOpenId] = useState<string | null>('faq-c1')

  const filteredFaqs = comprehensiveFaqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-[#070B18] text-white select-none">
      {/* Rich Photographic Themed Hero Header */}
      <PageHero
        badge="HELP & ANSWERS"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Everything you need to know about scanning, uploading, printer integration, payments, and document security."
        bgImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&auto=format&fit=crop&q=80"
        accentColor="purple"
      >
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. duplex, printer agent, UPI, pickup...)"
            className="w-full rounded-2xl border border-white/20 bg-slate-900/90 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-violet-500 shadow-2xl backdrop-blur-md"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'customer', label: 'Customers & Students' },
            { id: 'shop', label: 'Print Shop Owners' },
            { id: 'payment', label: 'Payments & Pricing' },
            { id: 'security', label: 'Security & Privacy' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Accordion Content */}
      <section className="section-padding bg-[#070B18] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/4 h-[35rem] w-[35rem] rounded-full bg-indigo-700/15 blur-[160px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[140px]"
        />
        <div className="container-kagzzy max-w-3xl relative z-10">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching questions found for "{search}".
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden backdrop-blur-xl transition-colors hover:border-white/20 shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-start justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white gap-3"
                    >
                      <span className="flex-1">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-violet-400 flex-shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          )}

          {/* Need More Help Card */}
          <div className="mt-12 rounded-3xl border border-white/15 bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 p-6 sm:p-8 text-center shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-white">Still have questions?</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Our merchant onboarding and support team is available on WhatsApp and email 7 days a week.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:support@kagzzy.com"
                className="w-full sm:w-auto text-center rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                support@kagzzy.com
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-[0_8px_24px_-4px_rgba(124,58,237,0.55)] hover:scale-105 transition-all text-center"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
