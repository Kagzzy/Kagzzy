import type { ReactNode } from 'react'

export interface NavItem {
  label: string
  href: string
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  icon: ReactNode
  colorFrom: string
  colorTo: string
}

export interface WorkflowStep {
  id: number
  title: string
  description: string
  icon: ReactNode
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  initials: string
}

export interface PricingFeature {
  label: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  price?: string
  priceNote?: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export type OrderStatus =
  | 'pending'
  | 'review'
  | 'printing'
  | 'completed'

export interface DemoOrder {
  id: string
  fileName: string
  fileSize: string
  pages: number
  status: OrderStatus
}

export type PrinterStatus = 'online' | 'busy' | 'offline'

export interface PrinterInfo {
  id: string
  name: string
  status: PrinterStatus
}

export type RealtimeEventType =
  | 'ORDER_CREATED'
  | 'PAYMENT_CAPTURED'
  | 'SHOP_ACCEPTED'
  | 'PRINTING_STARTED'
  | 'PRINT_COMPLETED'
  | 'ORDER_READY_FOR_PICKUP'

export interface RealtimeEvent {
  id: string
  type: RealtimeEventType
  label: string
}

export type PaymentStage = 'idle' | 'initiated' | 'verifying' | 'confirmed'

export type DemoTab = 'upload' | 'print-options' | 'payment' | 'tracking'
