/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgdark: '#07101F',
        bgdark2: '#101828',
        // Full ramp so purple-50..purple-900 all resolve; 500 is pinned to
        // the exact brand hex (#7C3AED) called for in the design spec.
        purple: {
          DEFAULT: '#7C3AED',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#7C3AED',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#2e1065',
        },
        // Tailwind's default violet-500 (#8b5cf6) already matches the spec's
        // "Violet" exactly, so the full default ramp is kept as-is via
        // deep-merge; only DEFAULT is pinned for clarity.
        violet: {
          DEFAULT: '#8B5CF6',
        },
        // Tailwind's default indigo-600 (#4f46e5) already matches the spec.
        indigo: {
          DEFAULT: '#4F46E5',
        },
        // Convenience alias for the spec's "Blue" (#2563EB), which equals
        // Tailwind's default blue-600. Only the single accent shade is
        // needed since light/dark tints elsewhere use the default `blue-*`.
        bluebrand: {
          DEFAULT: '#2563EB',
          500: '#2563EB',
        },
        // Tailwind's default cyan-500 (#06b6d4) already matches the spec.
        cyan: {
          DEFAULT: '#06B6D4',
        },
        // Not a default Tailwind color, so a full ramp (copied from
        // Tailwind's emerald scale, whose 500 equals the spec's Mint
        // #10B981 exactly) is required for all mint-50..mint-900 usages.
        mint: {
          DEFAULT: '#10B981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        lightbg: '#F8FAFC',
        cardwhite: '#FFFFFF',
        textdark: '#0F172A',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'gradient-brand': 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #2563EB 100%)',
        'gradient-brand-radial': 'radial-gradient(circle at 30% 20%, rgba(124,58,237,0.35), transparent 60%)',
      },
      backgroundSize: {
        'grid-fine': '32px 32px',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,58,237,0.55)',
        'glow-cyan': '0 0 40px -8px rgba(6,182,212,0.5)',
        card: '0 8px 30px -8px rgba(15,23,42,0.12)',
        elevated: '0 20px 60px -12px rgba(15,23,42,0.25)',
      },
      borderRadius: {
        xl2: '18px',
        xl3: '22px',
        xl4: '28px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatslow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        glowpulse: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.06)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientshift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatslow: 'floatslow 8s ease-in-out infinite',
        glowpulse: 'glowpulse 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        gradientshift: 'gradientshift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
