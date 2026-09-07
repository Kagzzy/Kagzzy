import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Search, ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  category: 'general' | 'customer' | 'merchant' | 'payment' | 'security'
  question: string
  answer: string
}

const allFaqs: FAQItem[] = [
  // General & Customer
  {
    id: 'f1',
    category: 'customer',
    question: 'Do I need to download an app or register an account to print?',
    answer:
      'No app download is required! When you scan the Kagzzy QR standee with your phone camera, our fast web application opens instantly in your mobile browser (Chrome, Safari, etc.). You can upload, pay with UPI, and receive your print without creating an account.',
  },
  {
    id: 'f2',
    category: 'customer',
    question: 'Which file formats does Kagzzy support?',
    answer:
      'Kagzzy supports PDF, Microsoft Word (DOC, DOCX), Excel (XLS, XLSX), PowerPoint (PPT, PPTX), as well as high-resolution image files (JPG, PNG, WEBP, TIFF). Vector and font fidelity are strictly maintained during conversion.',
  },
  {
    id: 'f3',
    category: 'customer',
    question: 'How do I collect my print order after paying?',
    answer:
      'Immediately upon UPI payment, an on-screen token with a 4-digit code is generated. Walk up to the shop counter and show your token. The shop operator hands you your printed, stapled, or bound document directly.',
  },
  {
    id: 'f4',
    category: 'customer',
    question: 'Can I choose double-sided (duplex) printing?',
    answer:
      'Yes! You can toggle "Duplex (Both sides)" with a single tap. Duplex printing is automatically calculated at an economical rate (typically ₹1.00/page instead of ₹1.50/page single-sided), saving you money and saving paper.',
  },

  // Merchant & Shop
  {
    id: 'f5',
    category: 'merchant',
    question: 'Do I need to buy a new printer or specific hardware?',
    answer:
      'No! Kagzzy works with 100% of existing printers that connect to a Windows 10 or 11 PC via USB or local network (Canon, HP, Epson, Ricoh, Konica Minolta, Brother, etc.). You install our lightweight Windows Print Agent (15MB) and you are ready to receive jobs.',
  },
  {
    id: 'f6',
    category: 'merchant',
    question: 'How do I get the official Kagzzy Counter QR Standee?',
    answer:
      'We deliver an official acrylic QR standee to your shop address free of charge upon signing up. You can also print a temporary high-resolution laminated standee directly from your merchant dashboard.',
  },
  {
    id: 'f7',
    category: 'merchant',
    question: 'Can I still review orders before paper comes out of the machine?',
    answer:
      'Yes. Kagzzy never prints blindly. When an order arrives, it appears in your shop queue with the file name, page count, and settings. You select the target printer and click "PRINT NOW" when ready.',
  },

  // Payment & Refunds
  {
    id: 'f8',
    category: 'payment',
    question: 'What happens if a paper jam occurs or an order fails?',
    answer:
      'If an order is cancelled by the shop due to paper jam, power outage, or out-of-stock paper, an automated 100% instant refund is credited back to your source UPI account within 5 to 15 minutes.',
  },
  {
    id: 'f9',
    category: 'payment',
    question: 'Which payment methods are accepted?',
    answer:
      'We accept all major UPI apps including Google Pay, PhonePe, Paytm, CRED, BHIM, and direct bank UPI apps. Credit and debit cards are also supported via our secure checkout gateway.',
  },

  // Security
  {
    id: 'f10',
    category: 'security',
    question: 'Is my personal document safe? Can anyone else see it?',
    answer:
      'Kagzzy is built on a zero-storage security architecture. Files are encrypted with AES-256 in transit. Documents are never stored in public folders or shared across WhatsApp. Once printed and marked collected, files are permanently shredded from temporary cache.',
  },
]

export function FAQPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [openId, setOpenId] = useState<string | null>('f1')

  const filteredFaqs = allFaqs.filter((faq) => {
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
        description="Everything you need to know about scanning, uploading, printer integration, and payment security."
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
            placeholder="Search questions (e.g. duplex, refund, printer models...)"
            className="w-full rounded-2xl border border-white/20 bg-slate-900/90 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none focus:border-violet-500 shadow-2xl backdrop-blur-md"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'customer', label: 'Students & Customers' },
            { id: 'merchant', label: 'Print Shop Owners' },
            { id: 'payment', label: 'Payments & Refunds' },
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
      <section className="section-padding bg-[#070B18] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" />
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
            <div className="mt-4 flex justify-center gap-3">
              <a
                href="mailto:support@kagzzy.com"
                className="rounded-xl border border-white/20 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                support@kagzzy.com
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/30"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
