/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        blue: {
            100: '#EBF8FF',
            200: '#BEE3F8',
            300: '#90CDF4',
            400: '#63B3ED',
            500: '#4299E1',
            600: '#3182CE',
            700: '#2B6CB0',
            800: '#2C5282',
            900: '#2A4365',
        },
      },
      animation: {
        'zoominout': 'zoominout 30s ease-in-out alternate infinite',
      },
      keyframes: {
        zoominout: {
            '0%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1.2, 1.2)' },
        }
      }
    },
  },
  plugins: [],
}
