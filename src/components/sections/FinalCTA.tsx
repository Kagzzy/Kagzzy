import { motion } from 'framer-motion'
import { ScanLine, UploadCloud, Wallet, Printer, PackageCheck } from 'lucide-react'
import { Button } from '../ui/Button'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const flowIcons = [ScanLine, UploadCloud, Wallet, Printer, PackageCheck]

/** Large gradient closing CTA with a sequentially animated scan-to-pickup icon row. */
export function FinalCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#7C3AED,#4F46E5_50%,#2563EB)] py-10 sm:py-14">
      <motion.div
        aria-hidden
        animate={reducedMotion ? undefined : { x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-1/2 left-1/4 h-[40rem] w-[40rem] rounded-full bg-white/10 blur-[140px]"
      />
      <div className="container-kagzzy relative flex flex-col items-center gap-5 sm:gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-lg max-w-xl text-white"
        >
          Ready to make printing simpler?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="max-w-lg text-base text-violet-100 sm:text-lg"
        >
          Join students, professionals and local print shops using smarter digital printing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="secondary" size="lg" showArrow>
            Start Printing
          </Button>
          <Button variant="ghost" size="lg">
            Bring Kagzzy to Your Shop
          </Button>
        </motion.div>

        <div className="mt-4 flex items-center gap-3 sm:gap-5">
          {flowIcons.map((Icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.4, type: 'spring', stiffness: 260 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm sm:h-12 sm:w-12"
            >
              <Icon className="h-5 w-5" />
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
