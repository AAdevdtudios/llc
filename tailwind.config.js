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
          'hero': "url('./assets/images/new/abstract/dia.jpg')",
          'speaker': "url('./assets/images/background/speaker_bg.png')",
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