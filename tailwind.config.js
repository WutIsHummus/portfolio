/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode bg / light surfaces (token name kept for migration ease)
        // Cool slate-blue tinted palette — distinctly NOT beige
        cream: {
          50: '#FFFFFF',
          100: '#EBF0F6',
          200: '#DCE3EC',
          300: '#C4CDDA',
        },
        // Dark mode bg / fg neutrals (token name kept; values are now near-black blue-tinted greys)
        ink: {
          200: '#5A6270',
          300: '#3D434C',
          400: '#2A2E36',
          500: '#1F232A',
          600: '#16191F',
          700: '#13161B',
          800: '#0E1116',
          900: '#0A0D11',
        },
        // Roblox-blue accent
        accent: {
          DEFAULT: '#00A2FF',
          light: '#52C5FF',
          glow: '#0080FF',
        },
      },
      fontFamily: {
        // Display + headline: Space Grotesk (geometric, modern)
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        // 'serif' kept as token name; now points to Inter for body text (no actual serif)
        serif: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.2em',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'sprite-pop': {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '60%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'sprite-pop': 'sprite-pop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
