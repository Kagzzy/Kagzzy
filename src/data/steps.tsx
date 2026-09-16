import { QrCode, UploadCloud, SlidersHorizontal, CreditCard, Radar, PackageCheck } from 'lucide-react'
import type { WorkflowStep } from '../types'

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
