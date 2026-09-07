# Kagzzy — Digital Printing, Simplified

A premium marketing website for **Kagzzy**, a digital printing platform that connects
customers with local print shops: scan a shop QR, upload a document, configure print
settings, pay via UPI, track the order in real time, and pick it up in person.

## Tech stack

- **React 18 + TypeScript**, built with **Vite**
- **Tailwind CSS** for styling, with a custom brand palette and utility layer
- **Framer Motion** for UI animation (reveals, transitions, magnetic buttons, tilt cards)
- **GSAP + ScrollTrigger** for the scroll-driven "How It Works" timeline
- **React Three Fiber + Drei** for the hero phone scene and the printer-integration 3D scene
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev       # start the dev server (Vite)
npm run build     # type-check and build for production into dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   One component per marketing section (Hero, Pricing, FAQ, ...)
    ui/         Reusable primitives (Button, GlassCard, Accordion, ...)
    three/      React Three Fiber scenes (HeroPhoneScene, PrinterScene, ...)
  hooks/        useReducedMotion, useMousePosition, useScrollProgress
  data/         Static content: nav items, features, steps, pricing, FAQ, testimonials
  types/        Shared TypeScript interfaces
```

## Notes on product behavior

All interactive demos (upload, print configuration, UPI payment, order tracking) run
entirely on the frontend with local mock state — there is no backend in this project.
The payment and printer-integration flows intentionally model Kagzzy's real rules:
opening a UPI app never marks an order as paid on its own (payment must be verified and
confirmed), and a shop operator must explicitly press **PRINT NOW** before a job prints.

## Accessibility & performance

- Respects `prefers-reduced-motion` throughout (disables/simplifies animation and 3D)
- The hero's 3D scene is lazy-loaded and skipped below the `sm` breakpoint
- Keyboard-navigable nav, accordion, and carousel controls with visible focus states
