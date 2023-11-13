// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-swiper'],
  swiper: {},
  app: {
    baseURL: '/positivus.github.io/',
    buildAssetsDir: 'assets',
  }
})
