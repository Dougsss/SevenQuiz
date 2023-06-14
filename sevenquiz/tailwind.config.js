/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'general-back': "ulr('/img/background3.jpg')",
      }
    },
  },
  plugins: [],
}

