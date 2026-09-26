import {
  QrCode,
  UploadCloud,
  SlidersHorizontal,
  CreditCard,
  Radar,
  PackageCheck,
  Store,
  Calculator,
  CheckCircle2,
  Layers,
  Sparkles,
  Printer,
  MapPin,
  type LucideIcon,
} from 'lucide-react'
import type { WorkflowStep } from '../types'

/** 6-Step high-level customer overview */
export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Scan the Shop QR',
    description: 'Scan the QR code at a participating Kagzzy print shop to open that shop’s ordering page.',
    icon: <QrCode className="h-6 w-6" />,
  },
  {
    id: 2,
    title: 'Upload Your Document',
    description: 'Upload your PDF, JPG, or PNG directly from your phone or computer.',
    icon: <UploadCloud className="h-6 w-6" />,
  },
  {
    id: 3,
    title: 'Choose Print Options',
    description: 'Select paper size, color, single or double-sided printing, copies, and page range.',
    icon: <SlidersHorizontal className="h-6 w-6" />,
  },
  {
    id: 4,
    title: 'Review & Pay',
    description: 'Review your print settings and total price, then complete your payment securely.',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: 5,
    title: 'Track Your Order',
    description: 'Follow your order as it moves from payment and shop acceptance to printing and ready for pickup.',
    icon: <Radar className="h-6 w-6" />,
  },
  {
    id: 6,
    title: 'Pick It Up',
    description: 'Visit the shop when your order is ready and collect your printed documents using your order details or pickup code.',
    icon: <PackageCheck className="h-6 w-6" />,
  },
]

export interface DetailedOperationalStep {
  step: number
  title: string
  actor: 'Customer' | 'Platform' | 'Shop Operator' | 'Printer Hardware'
  actorBadge: string
  description: string
  icon: LucideIcon
}

/** Complete 12-Step End-to-End Operational Workflow */
export const completeWorkflow12Steps: DetailedOperationalStep[] = [
  {
    step: 1,
    title: 'Scan Shop QR',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Point phone camera at the shop’s counter standee QR code to open the web portal instantly.',
    icon: QrCode,
  },
  {
    step: 2,
    title: 'Open Shop',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'The shop’s digital counter loads in your browser with real-time rate cards and active printer queues.',
    icon: Store,
  },
  {
    step: 3,
    title: 'Upload Document',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Select PDF, JPG, or PNG files from device storage or cloud drives. Multi-file upload supported.',
    icon: UploadCloud,
  },
  {
    step: 4,
    title: 'Configure Printing',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Select paper size (A4/A3/Legal), B&W or Color, Single or Duplex (2-sided), copies, and page ranges.',
    icon: SlidersHorizontal,
  },
  {
    step: 5,
    title: 'Review Price',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Dynamic price engine calculates the transparent upfront total with zero hidden costs.',
    icon: Calculator,
  },
  {
    step: 6,
    title: 'Pay Securely',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Pay via 1-tap UPI Intent (GPay, PhonePe, Paytm) on mobile or Dynamic QR on desktop. Verified via webhook.',
    icon: CreditCard,
  },
  {
    step: 7,
    title: 'Shop Accepts',
    actor: 'Shop Operator',
    actorBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Shop operator reviews file details, page counts, and instructions in the dashboard, then accepts the job.',
    icon: CheckCircle2,
  },
  {
    step: 8,
    title: 'Printer Selection',
    actor: 'Shop Operator',
    actorBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Job is routed to the target connected machine (e.g. B&W laser or color printer) based on settings.',
    icon: Layers,
  },
  {
    step: 9,
    title: 'PRINT NOW Action',
    actor: 'Shop Operator',
    actorBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Operator explicitly clicks "PRINT NOW". Browser never prints blindly; physical output requires shop authorization.',
    icon: Sparkles,
  },
  {
    step: 10,
    title: 'Printing',
    actor: 'Printer Hardware',
    actorBadge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    description: 'Windows Print Agent spools the job directly to the hardware. Pages print with high resolution.',
    icon: Printer,
  },
  {
    step: 11,
    title: 'Ready for Pickup',
    actor: 'Shop Operator',
    actorBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'Operator marks the job ready. Customer tracking status updates immediately with their pickup code.',
    icon: PackageCheck,
  },
  {
    step: 12,
    title: 'Pickup',
    actor: 'Customer',
    actorBadge: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    description: 'Customer shows their pickup identifier at the counter and collects their organized, stapled prints.',
    icon: MapPin,
  },
]
