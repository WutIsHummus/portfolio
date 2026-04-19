/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfaf4',
          100: '#f8f2e5',
          200: '#f1e8d3',
          300: '#e6d9bc',
        },
        ink: {
          200: '#ddd4c4',
          300: '#c9bfb0',
          400: '#a89e91',
          500: '#847a6e',
          600: '#5c544b',
          700: '#3d362f',
          800: '#2a241f',
          900: '#1a1512',
        },
        accent: {
          DEFAULT: '#8b3a1f',
          light: '#c4572f',
          glow: '#e07a4a',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.2em',
      },
    },
  },
  plugins: [],
};
