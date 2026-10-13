/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fe',
          100: '#d9e8fc',
          400: '#4a93ee',
          500: '#0b6bdf',
          600: '#0857b8',
          700: '#07468f',
          900: '#0a2547',
        },
        paper: '#f4fbf8',
        ink: '#0e1116',
        ball: '#d7f24a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        condensed: ['Anton', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
