
const bodyParser = require('body-parser');

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NUXT.js Portfolio Blog Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-1046c.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-1046c.firebaseio.com',
    fbAPIKey: 'AIzaSyCwlh5BAnTmStemGbcSo-fsxlrsbQQZ0Xg'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
