import {
  Scan,
  UploadCloud,
  Sliders,
  Wallet,
  Printer,
  PackageCheck,
  type LucideIcon,
} from 'lucide-react'

export interface ArchitecturePhase {
  step: string
  title: string
  subtitle: string
  summary: string
  description: string
  layer: string
  metric: string
  metricLabel: string
  accentColor: 'violet' | 'cyan' | 'purple' | 'emerald' | 'blue' | 'amber'
  tags: string[]
  icon: LucideIcon
}

export const detailedArchitecturePhases: ArchitecturePhase[] = [
  {
    step: '01',
    icon: Scan,
    title: 'Scan Shop QR Code Standee',
    subtitle: 'Zero-Install Client Edge WebApp',
    summary: 'No app download needed. Works directly in your mobile browser.',
    layer: 'Client Tier',
    metric: '< 1.8s',
    metricLabel: 'Cold Start Time',
    accentColor: 'violet',
    description:
      'Every Kagzzy partner shop displays an official counter standee with a unique QR code. Pointing your standard camera opens the shop’s live digital portal in under 2 seconds. The shop name, pricing, and active printer queues are loaded automatically.',
    tags: ['Zero Installation', 'Instant Browser WebApp', 'Location-Locked'],
  },
  {
    step: '02',
    icon: UploadCloud,
    title: 'Select & Upload Documents',
    subtitle: 'Serverless Pre-Flight & Parsing Engine',
    summary: 'Supports PDF, Word (DOCX), Excel, PowerPoint, and High-Res Images.',
    layer: 'Edge Parser Tier',
    metric: '100% Automated',
    metricLabel: 'DPI & Page Count Check',
    accentColor: 'cyan',
    description:
      'Upload project reports, college notes, resumes, or government forms. Kagzzy’s serverless parser calculates exact page count, dimensions (A4, A3, Legal), and inspects image resolutions in real time to prevent printing errors.',
    tags: ['PDF, DOCX, XLSX, PPTX', 'Auto Page Count', 'Up to 100MB'],
  },
  {
    step: '03',
    icon: Sliders,
    title: 'Configure Smart Print Options',
    subtitle: 'Dynamic Pricing & Duplex Rules Matrix',
    summary: 'Duplex (2-sided), B&W vs. Color, Copies, and Spiral Binding.',
    layer: 'Rules & Cost Engine',
    metric: 'Save Up to 40%',
    metricLabel: 'On Paper Costs',
    accentColor: 'purple',
    description:
      'Customize exactly how you want your document printed. Toggle duplex printing to save up to 40% on paper costs. Choose between fast monochrome laser and vibrant high-res color. Pricing updates dynamically with zero surprises.',
    tags: ['Dynamic Price Calc', 'Duplex Savings', 'Binding & Stapling'],
  },
  {
    step: '04',
    icon: Wallet,
    title: 'Instant 1-Click UPI Payment',
    subtitle: 'Bank-Grade Automated Settlement Webhooks',
    summary: 'GPay, PhonePe, Paytm, BHIM, or any UPI app with instant verification.',
    layer: 'Payment Gateway Tier',
    metric: 'Zero Wait',
    metricLabel: 'Instant Token Generation',
    accentColor: 'emerald',
    description:
      'Say goodbye to waiting for the shopkeeper to verify ₹10 or ₹20 screenshots. Payment is securely processed through bank-grade UPI gateways with instant token generation. Both customer and merchant dashboards sync simultaneously.',
    tags: ['No Cash Required', 'Instant Receipt', 'Token Generated'],
  },
  {
    step: '05',
    icon: Printer,
    title: 'Windows Print Agent Auto-Dispatch',
    subtitle: 'Local Win32 Hardware Spooling Service',
    summary: 'High-speed local network transmission to the shop’s existing printers.',
    layer: 'Hardware Spooler Tier',
    metric: 'Local LAN / USB',
    metricLabel: 'Hardware-Speed Output',
    accentColor: 'blue',
    description:
      'Our proprietary Windows Print Agent runs in the background on the shop’s PC. Once the operator hits "PRINT NOW", the raw print stream is sent directly to the local printer over USB or LAN at hardware speed.',
    tags: ['Windows Agent v2.4', 'Local LAN Speed', 'Zero Cloud Stash'],
  },
  {
    step: '06',
    icon: PackageCheck,
    title: 'Quick Order Pickup',
    subtitle: 'Token Handshake & Secure File Shredding',
    summary: 'Walk up, flash your order code, and collect your fresh prints.',
    layer: 'Fulfillment & Security Tier',
    metric: 'AES-256 Shred',
    metricLabel: 'Zero-Storage Guarantee',
    accentColor: 'amber',
    description:
      'Your order comes out fresh and organized. Flash your 4-digit token or QR code at the counter, collect your prints, and you are done. No crowded queues, no WhatsApp file sharing.',
    tags: ['Zero-Wait Pickup', 'Organized Bundles', 'Privacy Protected'],
  },
]
