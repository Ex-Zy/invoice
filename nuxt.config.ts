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
    '@pinia/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-typed-router',
  ],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    typeCheck: true,
  },
  imports: {
    dirs: ['constants'],
  },
})
