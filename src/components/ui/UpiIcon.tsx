export function UpiChevronIcon({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top Left Wing: Google/UPI Blue */}
      <path
        d="M 12 2 L 2 19 L 7.5 19 L 12 11 Z"
        fill="#4285F4"
      />
      {/* Top Right Wing: Google Yellow */}
      <path
        d="M 12 2 L 12 11 L 16.5 19 L 22 19 Z"
        fill="#FBBC04"
      />
      {/* Bottom Center Right: Google Red */}
      <path
        d="M 12 11 L 7.5 19 L 12 19 Z"
        fill="#EA4335"
      />
      {/* Bottom Center Left: Google Green */}
      <path
        d="M 12 11 L 12 19 L 16.5 19 Z"
        fill="#34A853"
      />
    </svg>
  )
}
