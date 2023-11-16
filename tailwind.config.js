/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFE926',
        'secondary': '#202127',
        'support': '#F3F3F3',
      },
      boxShadow: {
        'regular': '0px 5px 0px 0px #BDBDBD',
        'big': '-10px 10px 0px 0px rgba(189, 189, 189, 1)'
      }
    }
  },
  plugins: [],
}

