import type { FAQItem } from '../types'

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Kagzzy?',
    answer:
      'Kagzzy is a digital printing platform that connects customers with local print shops. You scan a shop’s QR code, upload your document, configure your print settings, pay through UPI and pick it up once it’s ready.',
  },
  {
    id: 'faq-2',
    question: 'How does printing through Kagzzy work?',
    answer:
      'Scan the shop’s QR code or open their link, upload your document, choose your print options like paper size, color and copies, pay securely, then track your order in real time until it’s ready for pickup.',
  },
  {
    id: 'faq-3',
    question: 'Do I need to replace my printer?',
    answer:
      'No. Kagzzy works with the printers you already own through the lightweight Kagzzy Windows Print Agent, which connects your existing printers to the platform without any new hardware.',
  },
  {
    id: 'faq-4',
    question: 'How do customers pay?',
    answer:
      'Customers pay using UPI, either through UPI Intent for fast mobile checkout or a dynamic QR code for desktop and fallback scenarios. Orders only unlock once payment is verified and confirmed.',
  },
  {
    id: 'faq-5',
    question: 'Can customers track their orders?',
    answer:
      'Yes. Customers see real-time status updates from payment confirmation through shop acceptance, printing and final pickup readiness, directly from their phone.',
  },
  {
    id: 'faq-6',
    question: 'Can multiple printers be connected?',
    answer:
      'Yes. The Kagzzy Windows Print Agent supports multiple printers per shop and automatically routes jobs, while your staff selects the right printer before printing.',
  },
  {
    id: 'faq-7',
    question: 'Is Kagzzy suitable for small shops?',
    answer:
      'Absolutely. Kagzzy is built for small and growing print shops alike, with simple setup, a digital shop QR and an order management dashboard that works from day one.',
  },
  {
    id: 'faq-8',
    question: 'How can I get started?',
    answer:
      'Customers can start printing immediately by scanning any Kagzzy-enabled shop’s QR code. Shop owners can sign up, generate their digital shop QR and install the Windows Print Agent to go live in minutes.',
  },
]
