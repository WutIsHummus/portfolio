/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: 'rgb(var(--asphalt) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        mute: 'rgb(var(--mute) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        signal: {
          DEFAULT: '#E4572E',
          dim: '#B54424',
        },
        gold: 'rgb(var(--gold) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        tape: '0.22em',
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
