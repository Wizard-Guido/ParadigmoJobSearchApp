/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ricewhite: {
          100: 'rgba(243,244,239,255)',
        }
      }
    },
    fontFamily: {
      'verdana' : 'Verdana',
    },
    screens: {
      'md': '800px',
    }
  },
  plugins: [],
}
