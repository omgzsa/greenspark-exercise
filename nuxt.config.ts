// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
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
});
