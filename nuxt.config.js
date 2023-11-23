// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      Cabin: [400, 600, 700],
    },
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
});
