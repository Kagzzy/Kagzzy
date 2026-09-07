export interface KagzzyLogoProps {
  className?: string
  size?: number
  showText?: boolean
  textColor?: string
}

export function KagzzyLogo({
  className = '',
  size = 36,
  showText = true,
  textColor = 'text-white',
}: KagzzyLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Folded Document Icon with Cyan-Blue-Pink Gradient and Stripe Accents */}
      <div
        style={{ width: size, height: size }}
        className="relative flex-shrink-0"
      >
        <svg
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_4px_12px_rgba(124,58,237,0.45)]"
        >
          <defs>
            {/* Main Document Body Gradient */}
            <linearGradient id="kagzzyDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            {/* Fold Corner Flap Gradient */}
            <linearGradient id="kagzzyFoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Document Base with Top-Right Fold Corner */}
          <path
            d="M 6 4 C 6 2.3 7.3 1 9 1 L 26 1 L 37 12 L 37 39 C 37 40.7 35.7 42 34 42 L 9 42 C 7.3 42 6 40.7 6 39 Z"
            fill="url(#kagzzyDocGrad)"
          />

          {/* Folded Corner Flap */}
          <path
            d="M 26 1 L 26 10 C 26 11.1 26.9 12 28 12 L 37 12 Z"
            fill="url(#kagzzyFoldGrad)"
            opacity="0.95"
          />

          {/* 3 Colored Horizontal Content Lines */}
          <rect x="12" y="16" width="16" height="2.8" rx="1.4" fill="#ffffff" />
          <rect x="12" y="22" width="13" height="2.8" rx="1.4" fill="#ffffff" opacity="0.9" />
          <rect x="12" y="28" width="10" height="2.8" rx="1.4" fill="#fbbf24" />
        </svg>
      </div>

      {showText && (
        <span className={`text-xl font-black tracking-tight ${textColor}`}>
          Kagzzy
        </span>
      )}
    </div>
  )
}
