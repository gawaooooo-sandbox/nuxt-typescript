import { Configuration } from 'webpack'
import { Context } from '@nuxt/vue-app'

import pkg from './package.json'

const isDev = process.env.NODE_ENV === 'development'
const BASE_DIR = 'webapp/json-server'

export default {
  mode: 'spa',

  // change port
  // server: {
  //   port: 8000
  // },

  serverMiddleware: ['~api/index'],

  // ビルド時の書き出し先変更
  generate: {
    dir: isDev ? 'dist' : `dist/${BASE_DIR}`
  },
  // ルーティングのベースとなるパス変更
  router: {
    base: isDev ? '/' : `/${BASE_DIR}/`
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'select json-server app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: isDev ? '/favicon.ico' : `/${BASE_DIR}/favicon.ico`
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: {
    color: '#209cee',
    height: '15px'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // TODO: proxy?
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: Configuration, ctx: Context) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (config.module) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue|ts)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    }
  }
}
