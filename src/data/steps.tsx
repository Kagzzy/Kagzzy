import { QrCode, UploadCloud, SlidersHorizontal, CreditCard, Radar, PackageCheck } from 'lucide-react'
import type { WorkflowStep } from '../types'

export const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Scan the QR',
    description: 'Scan the shop’s Kagzzy QR code or open their link to start your order.',
    icon: <QrCode className="h-6 w-6" />,
  },
  {
    id: 2,
    title: 'Upload your document',
    description: 'Drag and drop your file — resumes, notes, forms or projects, all supported.',
    icon: <UploadCloud className="h-6 w-6" />,
  },
  {
    id: 3,
    title: 'Configure your print',
    description: 'Choose paper size, color, copies and duplex printing in a few taps.',
    icon: <SlidersHorizontal className="h-6 w-6" />,
  },
  {
    id: 4,
    title: 'Pay securely',
    description: 'Pay instantly with UPI Intent or scan a dynamic QR to complete checkout.',
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    id: 5,
    title: 'Track in real time',
    description: 'Watch your order move from accepted to printing to ready for pickup.',
    icon: <Radar className="h-6 w-6" />,
  },
  {
    id: 6,
    title: 'Pick it up',
    description: 'Walk in, collect your prints, and you’re done — no waiting around.',
    icon: <PackageCheck className="h-6 w-6" />,
  },
]
