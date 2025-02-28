// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Novelties & Balloons | Loftus International',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Founded in 1939, Loftus International (formerly Loftus Novelty) pioneered Salt Lake City’s novelty and magic scene and evolved into a premier U.S. distributor of magic, novelty items, and balloons with a global reach.' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:image', name: 'og:image', content: 'https://loftus.com/images/Logo.jpg' },
        { hid: 'og:title', name: 'og:title', content: 'Novelties & Balloons | Loftus International' },
        { hid: 'og:url', name: 'og:url', content: 'https://www.loftus.com/' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Novelties & Balloons | Loftus International' },
        { hid: 'og:description', name: 'og:description', content: 'Founded in 1939, Loftus International (formerly Loftus Novelty) pioneered Salt Lake City’s novelty and magic scene and evolved into a premier U.S. distributor of magic, novelty items, and balloons with a global reach.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://loftus.com/images/Logo.jpg' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Novelties & Balloons | Loftus International' },
        { hid: 'twitter:site', name: 'twitter:site', content: 'https://www.loftus.com/' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Founded in 1939, Loftus International (formerly Loftus Novelty) pioneered Salt Lake City’s novelty and magic scene and evolved into a premier U.S. distributor of magic, novelty items, and balloons with a global reach.' }
      ],
      script: [
        { src: 'https://kit.fontawesome.com/1107c06a2b.js' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  css: [
    '@/assets/scss/app.scss'
  ],

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-02-23',
})
