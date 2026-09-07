import { useMemo } from 'react'

interface QrGlyphProps {
  className?: string
}

/**
 * A deterministic, QR-code-shaped glyph drawn as a single SVG path.
 *
 * It is decorative only (not a scannable code), but it renders real finder
 * patterns and a stable module layout so it reads as a genuine shop QR in
 * marketing visuals — far crisper than a generic icon, and just one DOM node.
 */
export function QrGlyph({ className }: QrGlyphProps) {
  const path = useMemo(() => {
    const size = 21
    const dark: boolean[][] = Array.from({ length: size }, () => Array<boolean>(size).fill(false))

    // Small deterministic PRNG so the pattern is identical on every render.
    let seed = 20240607
    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        dark[y][x] = random() > 0.5
      }
    }

    // Clear a quiet zone around each finder pattern, then draw the finders.
    const clearZone = (ox: number, oy: number) => {
      for (let y = -1; y < 8; y++) {
        for (let x = -1; x < 8; x++) {
          const yy = oy + y
          const xx = ox + x
          if (yy >= 0 && yy < size && xx >= 0 && xx < size) dark[yy][xx] = false
        }
      }
    }
    const drawFinder = (ox: number, oy: number) => {
      for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 7; x++) {
          const isEdge = x === 0 || x === 6 || y === 0 || y === 6
          const isCore = x >= 2 && x <= 4 && y >= 2 && y <= 4
          dark[oy + y][ox + x] = isEdge || isCore
        }
      }
    }

    const finders: [number, number][] = [
      [0, 0],
      [14, 0],
      [0, 14],
    ]
    finders.forEach(([ox, oy]) => clearZone(ox, oy))
    finders.forEach(([ox, oy]) => drawFinder(ox, oy))

    let d = ''
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (dark[y][x]) d += `M${x} ${y}h1v1h-1z`
      }
    }
    return d
  }, [])

  return (
    <svg viewBox="0 0 21 21" className={className} aria-hidden="true" focusable="false">
      <path d={path} fill="currentColor" />
    </svg>
  )
}
