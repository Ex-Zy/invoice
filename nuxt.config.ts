// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'League Spartan': '100..900',
        },
      },
    ],
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
