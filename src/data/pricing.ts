import type { PricingPlan } from '../types'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For small shops',
    priceNote: 'Demo pricing',
    features: [
      'Customer ordering',
      'Digital shop QR',
      'Order management',
      'Real-time updates',
    ],
    cta: 'Get Started',
  },
  {
    id: 'growing',
    name: 'Growing',
    tagline: 'For expanding shops',
    priceNote: 'Demo pricing',
    features: [
      'Everything in Starter',
      'Advanced analytics',
      'Multiple printer support',
      'Priority support',
    ],
    cta: 'Talk to Us',
    highlighted: true,
  },
]
