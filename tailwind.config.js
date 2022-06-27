module.exports = {
  theme: {
    colors: {
      'main': '#f7edc4',
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
