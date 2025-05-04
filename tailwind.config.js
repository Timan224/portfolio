/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1e2c',
        accent: '#ed64a6',
        secondary: '#ffd700',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'accent': '0 0 15px rgba(237, 100, 166, 0.3)',
        'gold': '0 0 10px rgba(255, 215, 0, 0.3)',
      }
    },
  },
  plugins: [],
} 