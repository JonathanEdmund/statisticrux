/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"]
      },
      
      colors: {
        body: "#1e1e1e",
        form: "#4e4e4e",
        hmm: "#2d2d2d",
        button: "#6356FD",
        live: "#7A0303"
      },

      gridTemplateRows: {
        // Simple 8 row grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },

      gridRow: {
        'start-7': '7',
        'start-9': '9',
        'start-11': '11',
        'start-13': '13',
        'start-15': '15'
      }
    },
  },
  plugins: [
  require('tailwind-scrollbar-hide')],
}
