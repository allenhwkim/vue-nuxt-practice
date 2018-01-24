module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://unpkg.com/bulma@0.6.2/css/bulma.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  plugins: [ // webpack plugin
    'plugins/i18n.js'
  ],
  generate: {
    routes: [
      '/en', '/en/contact', '/en/about', '/en/projects',
      '/fr', '/fr/contact', '/fr/about', '/fr/projects'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],  // webpack vue-i18n.bundle.js
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
