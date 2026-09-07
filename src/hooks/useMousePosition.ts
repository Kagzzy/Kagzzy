import { useEffect, useRef, type RefObject } from 'react'
import { useMotionValue, type MotionValue } from 'framer-motion'

interface MousePositionResult<T> {
  /** Attach to the element the pointer should be measured against. */
  ref: RefObject<T>
  /** Pointer offset from the element's center, normalized to -1..1. */
  x: MotionValue<number>
  /** Pointer offset from the element's center, normalized to -1..1. */
  y: MotionValue<number>
}

/**
 * Tracks pointer position relative to the center of an element and exposes
 * it as motion values, so parallax and tilt effects can be driven without
 * re-rendering the component tree on every pointer move.
 *
 * Values return to 0 when the pointer leaves the element.
 */
export function useMousePosition<T extends HTMLElement>(): MousePositionResult<T> {
  const ref = useRef<T>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      x.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
      y.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }

    const handleLeave = () => {
      x.set(0)
      y.set(0)
    }

    node.addEventListener('pointermove', handleMove)
    node.addEventListener('pointerleave', handleLeave)
    return () => {
      node.removeEventListener('pointermove', handleMove)
      node.removeEventListener('pointerleave', handleLeave)
    }
  }, [x, y])

  return { ref, x, y }
}
