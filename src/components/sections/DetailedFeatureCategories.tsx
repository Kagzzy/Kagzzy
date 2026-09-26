import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  customerFeaturesList,
  shopFeaturesList,
  platformFeaturesList,
  type DetailedFeatureItem,
} from '../../data/features'
import { Badge } from '../ui/Badge'
import { User, Store, Shield, Sparkles } from 'lucide-react'

type CategoryFilter = 'all' | 'customer' | 'shop' | 'platform'

export function DetailedFeatureCategories() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('customer')

  const categories: { id: CategoryFilter; label: string; count: number; icon: typeof User }[] = [
    { id: 'customer', label: 'Customer Features', count: customerFeaturesList.length, icon: User },
    { id: 'shop', label: 'Shop Features', count: shopFeaturesList.length, icon: Store },
    { id: 'platform', label: 'Platform Architecture', count: platformFeaturesList.length, icon: Shield },
    {
      id: 'all',
      label: 'All Features',
      count: customerFeaturesList.length + shopFeaturesList.length + platformFeaturesList.length,
      icon: Sparkles,
    },
  ]

  const itemsToDisplay: { item: DetailedFeatureItem; categoryLabel: string; categoryTone: 'violet' | 'emerald' | 'cyan' }[] = []

  if (activeCategory === 'customer' || activeCategory === 'all') {
    itemsToDisplay.push(
      ...customerFeaturesList.map((item) => ({
        item,
        categoryLabel: 'Customer',
        categoryTone: 'violet' as const,
      })),
    )
  }
  if (activeCategory === 'shop' || activeCategory === 'all') {
    itemsToDisplay.push(
      ...shopFeaturesList.map((item) => ({
        item,
        categoryLabel: 'Print Shop',
        categoryTone: 'emerald' as const,
      })),
    )
  }
  if (activeCategory === 'platform' || activeCategory === 'all') {
    itemsToDisplay.push(
      ...platformFeaturesList.map((item) => ({
        item,
        categoryLabel: 'Platform',
        categoryTone: 'cyan' as const,
      })),
    )
  }

  return (
    <section className="section-padding relative overflow-hidden bg-[#070B18] text-white border-t border-white/10 select-none">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div className="noise-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 h-[32rem] w-[32rem] rounded-full bg-violet-700/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-700/15 blur-[150px]"
      />

      <div className="container-kagzzy relative z-10 flex flex-col items-center gap-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="dark">FEATURE BREAKDOWN</Badge>
          <h2 className="heading-lg text-white mt-2">Complete Platform Capabilities</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
            Engineered end-to-end for frictionless customer ordering, dependable shop execution, and secure hardware connectivity.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-4"
        >
          <AnimatePresence>
            {itemsToDisplay.map(({ item, categoryLabel, categoryTone }) => {
              const Icon = item.icon
              const toneStyles =
                categoryTone === 'violet'
                  ? 'border-violet-500/30 text-violet-300 bg-violet-500/10'
                  : categoryTone === 'emerald'
                    ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10'
                    : 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10'

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.05] transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white border border-white/15">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className={`rounded-md border px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider ${toneStyles}`}>
                          {categoryLabel}
                        </span>
                        <span className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[9.5px] font-mono text-slate-400">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white mt-3.5">{item.title}</h3>
                    <p className="text-xs text-slate-300/80 mt-1.5 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
