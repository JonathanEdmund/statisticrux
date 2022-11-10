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
        hmm: "#2d2d2d",
        button: "#6356FD",
        live: "#7A0303"
      }
    },
  },
  plugins: [],
}
