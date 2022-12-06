/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'lightGreen' : '#019998',
        'yellowGood' : '#FDBC30'
      },
      fontFamily : {
        'rubik' : ['Rubik']
      }
    },
  },
  plugins: [],
}