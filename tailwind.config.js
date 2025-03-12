/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mocha: {
          50: '#f9f7f5',
          100: '#f1ece7',
          200: '#e2d5cc',
          300: '#d2baa8',
          400: '#c09c84',
          500: '#b08469',
          600: '#a07057',
          700: '#855a48',
          800: '#6d4a3d',
          900: '#5a3e34',
          950: '#2f1f1a',
        },
        cream: {
          50: '#fefefe',
          100: '#fcfcfc',
          200: '#faf8f6',
          300: '#f7f3ef',
          400: '#f2ebe3',
          500: '#ede2d6',
          600: '#d5c2b0',
          700: '#b09a85',
          800: '#8c7865',
          900: '#6f5f4f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};