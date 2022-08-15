const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      'main': '#f7edc4',
      red: colors.red,
    },
    extend: {
      screens: {
        'print': {'raw': 'print'}
      }
    },
  },
  plugins: [
  ],
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  safelist: [
  ],
}
