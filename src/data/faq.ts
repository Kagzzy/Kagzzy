import type { FAQItem } from '../types'

export const faqItems: FAQItem[] = [
  // Customer Questions
  {
    id: 'faq-c1',
    category: 'customer',
    question: 'How does Kagzzy work?',
    answer:
      'Kagzzy allows you to print at your local print shop without waiting in lines or sending files over WhatsApp. Simply scan the shop’s counter QR code, upload your document, choose your print settings (such as color, duplex, and copies), review your calculated price, pay securely online, and collect your finished prints when notified.',
  },
  {
    id: 'faq-c2',
    category: 'customer',
    question: 'How do I upload documents?',
    answer:
      'After scanning the shop QR code or opening the shop link on your smartphone, tablet, or laptop, tap the "Upload Document" button. You can pick files directly from your device storage, cloud drives, or camera roll. You can also upload multiple documents within a single order.',
  },
  {
    id: 'faq-c3',
    category: 'customer',
    question: 'What file types are supported?',
    answer:
      'Kagzzy supports standard document and image formats including PDF (.pdf), JPEG (.jpg, .jpeg), and PNG (.png). PDF is recommended for multipage documents, notes, resumes, and official forms to preserve exact layout and page numbers.',
  },
  {
    id: 'faq-c4',
    category: 'customer',
    question: 'How is the price calculated?',
    answer:
      'The price is calculated dynamically and transparently based on the shop’s rate card. Factors include the number of pages, color mode (Black & White vs. Color), print sides (Single-sided vs. Duplex double-sided), paper size (A4, A3, Legal), and number of copies. You see the exact total price before making any payment.',
  },
  {
    id: 'faq-c5',
    category: 'customer',
    question: 'How do I pay?',
    answer:
      'Kagzzy supports fast, secure online payments via UPI Intent (launching Google Pay, PhonePe, Paytm, BHIM, or your bank UPI app with 1 tap on mobile) or Dynamic QR code for desktop screens. Payments are verified instantly via authoritative webhook before the order is released to the shop queue.',
  },
  {
    id: 'faq-c6',
    category: 'customer',
    question: 'How do I track my order?',
    answer:
      'Once payment is verified, you receive a real-time order tracking status on your screen with a unique order reference (e.g., #KAG-82X91). You can follow your order through every stage: Payment Confirmed → Shop Accepted → Printing → Ready for Pickup.',
  },
  {
    id: 'faq-c7',
    category: 'customer',
    question: 'How do I collect my documents?',
    answer:
      'When your order status shows "Ready for Pickup", walk up to the counter and show your order reference or pickup code. The shop operator verifies your identifier and hands you your neatly printed and collated documents immediately.',
  },

  // Print Shop Questions
  {
    id: 'faq-s1',
    category: 'shop',
    question: 'How do I register my shop?',
    answer:
      'Click "Get Started", select "I’m a Print Shop", and submit your basic shop details (shop name, location, contact number, and printer details). Once verified, you gain access to your Shop Dashboard and receive your official counter QR standee.',
  },
  {
    id: 'faq-s2',
    category: 'shop',
    question: 'Do I need new printers?',
    answer:
      'No. You do not need to purchase any new or specialized hardware. Kagzzy is built specifically to connect with the commercial and desktop printers you already own.',
  },
  {
    id: 'faq-s3',
    category: 'shop',
    question: 'Can I use my existing printer?',
    answer:
      'Yes. Kagzzy works with virtually any printer connected via USB or local network to your Windows PC (including Canon, HP, Epson, Brother, Ricoh, Xerox, and Konica Minolta).',
  },
  {
    id: 'faq-s4',
    category: 'shop',
    question: 'What is the Print Agent?',
    answer:
      'The Kagzzy Print Agent is a lightweight, secure background Windows application installed on your shop PC. It discovers local printers, monitors their online/tray status, securely fetches authorized print jobs from Kagzzy Cloud, and spools them to your printer only after you explicitly click "PRINT NOW".',
  },
  {
    id: 'faq-s5',
    category: 'shop',
    question: 'How does printer integration work?',
    answer:
      'Kagzzy follows a secure 4-tier pipeline: Kagzzy Cloud → Kagzzy Print Agent → Windows PC → Existing Printer. The browser does NOT directly trigger printer hardware. When an order arrives, the operator reviews job details in the dashboard, selects the appropriate printer, and clicks "PRINT NOW" to release the print.',
  },
  {
    id: 'faq-s6',
    category: 'shop',
    question: 'Can I have multiple printers?',
    answer:
      'Yes. You can pair multiple printers (e.g., dedicated B&W laser printers, high-volume photocopiers, and color inkjet machines) to a single shop account. Jobs can be assigned to specific printers based on customer options or operator choice.',
  },
  {
    id: 'faq-s7',
    category: 'shop',
    question: 'Can I add staff?',
    answer:
      'Yes. Shop Owners can invite counter staff and operators with role-based permissions. Staff members can accept orders, review jobs, and trigger "PRINT NOW" on the counter console without accessing administrative pricing or financial analytics.',
  },
  {
    id: 'faq-s8',
    category: 'shop',
    question: 'How do I configure pricing?',
    answer:
      'From your Shop Dashboard’s Pricing Management section, you set your own rate card: per-page prices for single-sided B&W, duplex B&W, single-sided color, duplex color, and paper sizes (A4, A3, Legal). Pricing is 100% controlled by your shop.',
  },
  {
    id: 'faq-s9',
    category: 'shop',
    question: 'How does subscription work?',
    answer:
      'Kagzzy offers straightforward subscription plans for print shops with zero commission on customer printing payments. Plans range from a Starter tier for single-printer local stationery shops to Pro and Campus tiers with multi-printer parallel routing. Customer print payments go directly to your shop UPI.',
  },
]
