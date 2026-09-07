import { useEffect, useState } from 'react'

/**
 * Tracks the user's `prefers-reduced-motion` OS setting so components can
 * disable or simplify expensive animations for accessibility and performance.
 * Fully compatible with all browsers including older Safari and WebKit engines.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setReduced(e.matches)

    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
    } else if ('addListener' in mql) {
      // Backwards compatibility for older Safari / iOS Safari / WebKit
      ;(mql as unknown as { addListener: (cb: typeof handler) => void }).addListener(handler)
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handler)
      } else if ('removeListener' in mql) {
        ;(mql as unknown as { removeListener: (cb: typeof handler) => void }).removeListener(handler)
      }
    }
  }, [])

  return reduced
}

