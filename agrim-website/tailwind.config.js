/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        agrimGreen: '#2F4C39',
        'contact-green': '#2a4d3e',
        'agrim-orange': '#f07e18',
        'agrim-light-orange': '#f0c08e',
        'agrim-blue': '#6cb2eb',
      },
    },
  },
  plugins: [],
} 