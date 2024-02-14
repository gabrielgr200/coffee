/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto, sans-serif'],
        inter: ['Inter, sans-serif'],
        poppins: ['Poppins, sans-serif']
      }
    },
  },
  plugins: [],
}
