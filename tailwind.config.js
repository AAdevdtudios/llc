module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",],
    theme: {
      extend: {
        backgroundImage: {
          'hero': "url('./assets/images/gallery2.jpg')",
          'facts': "url('./assets/images/background/bg-1.jpg')",
        },
        fontFamily: {
          'Montserrat': ['Montserrat', 'sans-serif'],
          'Nunito': ['Nunito', 'sans-serif'],
        },
      },
    },
  plugins: [],
}