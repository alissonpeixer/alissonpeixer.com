/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['Quicksand', 'sans-serif'],
      'mono': ['Fira Code', 'monospace']
    },
    backgroundImage:{
      'grip-particle': "url('/Grid.svg')",

    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}