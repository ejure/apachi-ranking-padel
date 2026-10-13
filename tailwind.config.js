/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fe',
          100: '#d9e8fc',
          300: '#7fb2f3',
          400: '#4a93ee',
          500: '#0b6bdf',
          600: '#0857b8',
          700: '#07468f',
          800: '#0a2f5e',
          900: '#0a2547',
          950: '#071a35',
        },
        paper: '#f4fbf8',
        ink: '#0e1116',
        ball: '#d7f24a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
