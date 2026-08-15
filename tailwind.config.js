/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F3A5F',
          50: '#f3f6fa',
          100: '#e3ebf4',
          200: '#c2d2e4',
          300: '#94b0cf',
          400: '#5e85b3',
          500: '#3a6498',
          600: '#2a4d7d',
          700: '#1F3A5F',
          800: '#1a3050',
          900: '#14223b',
        },
        gold: {
          DEFAULT: '#C8A165',
          50: '#fbf6ee',
          100: '#f5e9d4',
          200: '#ecd3a8',
          300: '#e0b878',
          400: '#d4a04f',
          500: '#C8A165',
          600: '#a8854e',
          700: '#85693d',
          800: '#634d2d',
          900: '#42331f',
        },
        cream: '#F8F8F8',
        ink: '#202020',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 60px -15px rgba(31, 58, 95, 0.25)',
        'luxe-gold': '0 10px 40px -10px rgba(200, 161, 101, 0.45)',
        soft: '0 8px 30px -10px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #1F3A5F 0%, #14223b 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a04f 0%, #C8A165 50%, #a8854e 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
