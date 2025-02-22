export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
      { hid: 'og:image', name: 'og:image', content: 'https://dkewhs09r9f5z.cloudfront.net/assets/images/logo-b.png' },
      { hid: 'og:title', name: 'og:title', content: 'Novelties & Balloons | Loftus International' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.loftus.com/' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Novelties & Balloons | Loftus International' },
      { hid: 'og:description', name: 'og:description', content: 'Founded in 1939, Loftus International (formerly Loftus Novelty) pioneered Salt Lake City’s novelty and magic scene and evolved into a premier U.S. distributor of magic, novelty items, and balloons with a global reach.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://dkewhs09r9f5z.cloudfront.net/assets/images/logo-b.png' },
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://www.loftus.com/',
    gzip: true
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: '/admin/',
    Sitemap: 'https://www.loftus.com//sitemap.xml'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
