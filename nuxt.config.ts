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
  modules: ['nuxt-swiper', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'ru'],
    defaultLocale: 'ru'
  },
  app: {
    baseURL: '/positivus.github.io/',
    buildAssetsDir: 'assets',
  }
})
