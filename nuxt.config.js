import colors from 'vuetify/es5/util/colors'
// import icons from './icons';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - UI集',
    title: 'UI集 - 优质免费的UI资源仓库',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '收集免费优质的插画,图标,颜色等UI资源集合' },
      { name: 'keywords', content: 'UI,插画,图标,颜色,图案,头像,占位图,mockup'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
        {
            src: 'https://hm.baidu.com/hm.js?11315abcea3a0ef1fd34d1b3d74d9b1d',
            async: true,
            defer: true
        },
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9906622596531689',
            async: true
        }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/icon',
    '~/plugins/eventbus'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
          dark: false,
          themes: {
              light: {
                  primary: '#242424'
              }
          }
      },
      icons: {
        iconfont: 'mdiSvg'
        // values: Object.keys(icons).reduce((result, key) => {
        //     result[key] = {
        //         component: 'CustomIcon',
        //         props: {
        //             name: key
        //         }
        //     };
        //     return result;
        // }, {})
    }
  },

  content: {
      liveEdit: false,
      markdown: {
          prism: {
              theme: false
          }
      }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
