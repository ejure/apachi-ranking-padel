/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf5ff',
          100: '#d7e7fe',
          200: '#b5d4fe',
          300: '#83bafc',
          400: '#4895f8',
          500: '#0062ff', // APACHI blue
          600: '#004fd6',
          700: '#003eb0',
          800: '#003591',
          900: '#0a2a6b',
          950: '#071945',
        },
        navy: {
          800: '#0d1b2a',
          900: '#0a1128',
          950: '#050814',
        },
        neon: {
          lime: '#ccff00',
          emerald: '#10b981',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 98, 255, 0.35)',
        'glow-lime': '0 0 20px -3px rgba(204, 255, 0, 0.4)',
        'card-subtle': '0 4px 20px -2px rgba(10, 27, 51, 0.05), 0 2px 6px -1px rgba(10, 27, 51, 0.02)',
      }
    },
  },
  plugins: [],
}
