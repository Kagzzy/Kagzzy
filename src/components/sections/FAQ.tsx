import { faqItems } from '../../data/faq'
import { SectionHeading } from '../ui/SectionHeading'
import { Accordion } from '../ui/Accordion'

/** Frequently asked questions, rendered as an animated single-open accordion. */
export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-lightbg">
      <div className="container-kagzzy flex flex-col items-center gap-8">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />
        <div className="w-full max-w-2xl">
          <Accordion
            items={faqItems.map((item) => ({ id: item.id, question: item.question, answer: item.answer }))}
          />
        </div>
      </div>
    </section>
  )
}
