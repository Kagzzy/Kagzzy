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
    title: 'UPI Intent & Dynamic QR Checkout',
    subtitle: 'Authoritative Webhook Reconciliation',
    summary: '1-tap UPI Intent for mobile, dynamic order QR for desktop.',
    layer: 'Payment Gateway Tier',
    metric: 'Zero Wait',
    metricLabel: 'Webhook Reconciliation',
    accentColor: 'emerald',
    description:
      'Customers pay via 1-tap UPI Intent (Google Pay, PhonePe, Paytm, BHIM) on mobile or Dynamic QR on desktop. The order carries a unique Kagzzy transaction reference, and physical print release is authorized strictly upon backend webhook verification.',
    tags: ['UPI Intent (Mobile)', 'Dynamic Order QR', 'Webhook Verified'],
  },
  {
    step: '05',
    icon: Printer,
    title: 'Operator Review & Print Execution',
    subtitle: 'Local Windows Agent & Printer Selection',
    summary: 'Auto or manual printer assignment with explicit operator "PRINT NOW" trigger.',
    layer: 'Hardware Spooler Tier',
    metric: '< 25MB RAM',
    metricLabel: 'Lightweight Win32 Agent',
    accentColor: 'blue',
    description:
      'Our lightweight Windows Print Agent discovers local printers (Canon, HP, Epson, Ricoh) and validates job compatibility. To eliminate paper waste and misprints, the shop operator explicitly reviews the job and clicks "PRINT NOW" before physical output begins.',
    tags: ['Auto / Manual Select', 'Explicit Print Action', 'Windows 10/11 Agent'],
  },
  {
    step: '06',
    icon: PackageCheck,
    title: 'PRINT_ID Pickup Handshake',
    subtitle: 'Token Handshake & Automatic Document Shredding',
    summary: 'Unique PRINT_ID (e.g. KAG-82X91) + pickup QR with auto-shred.',
    layer: 'Fulfillment & Security Tier',
    metric: 'AES-256 Shred',
    metricLabel: 'Zero-Storage Guarantee',
    accentColor: 'amber',
    description:
      'Once printing and collation are complete, the customer receives a distinct PRINT_ID (e.g. KAG-82X91) and pickup QR code. Flash your token at the counter and pick up your organized bundle. Files are permanently shredded from both cloud and local cache upon pickup.',
    tags: ['PRINT_ID Token', 'Shop Preparing Stage', 'Auto-Shredded'],
  },
]
