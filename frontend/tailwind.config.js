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
        'sans': ['"Figtree"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui','@tailwindcss/forms')],
}