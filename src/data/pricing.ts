import type { PricingPlan } from '../types'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Shop',
    tagline: 'Ideal for local Xerox corners trying digital printing.',
    price: '₹0',
    priceNote: '100% Free Forever',
    features: [
      'Official Acrylic QR Standee delivered free',
      'Windows Print Agent (1 printer connected)',
      'Up to 300 digital orders / month',
      'Direct UPI pre-payment verification',
      'Standard email & WhatsApp support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro Merchant',
    tagline: 'For busy campus shops and commercial Xerox hubs.',
    price: '₹499',
    priceNote: '/ month',
    features: [
      'Everything in Starter Shop',
      'Connect up to 4 parallel printers',
      'Unlimited digital orders with zero cap',
      'Automated job load-balancing',
      'Daily automated GST accounting exports',
      'Priority 1-hour merchant phone support',
    ],
    cta: 'Choose Pro Merchant',
    highlighted: true,
  },
  {
    id: 'campus',
    name: 'Campus Network',
    tagline: 'For multi-store chains and institutional print vendors.',
    price: '₹1,499',
    priceNote: '/ month',
    features: [
      'Unlimited branch locations under one portal',
      'Unlimited printers across all branches',
      'Custom branding on QR standees',
      'Centralized operator permissions & logs',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Enterprise',
    highlighted: false,
  },
]
