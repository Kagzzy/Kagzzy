import { useEffect, useState } from 'react'

/**
 * Returns overall page scroll progress as a 0..1 value, used for the
 * top scroll-progress bar and other scroll-linked effects.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ??
        window.pageYOffset ??
        document.documentElement?.scrollTop ??
        document.body?.scrollTop ??
        0
      const docHeight =
        (document.documentElement?.scrollHeight || document.body?.scrollHeight || 0) -
        (window.innerHeight || document.documentElement?.clientHeight || 0)
      setProgress(docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * Tracks which section id is currently active in the viewport, for the
 * navbar's active-link indicator.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
