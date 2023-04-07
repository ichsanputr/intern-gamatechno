export default {
  target: 'static',

  head: {
    title: 'Muhammad Ichsan',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap' }
    ]
  },

  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: [
    '@/plugins/fontawesome.js',
    '@/plugins/devicon.js'
  ],

  components: true,

  buildModules: [
    '@nuxt/postcss8',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss'
  ],

  content: {
    nestedProperties: ['general.tags.name'],
    markdown: {
      remarkPlugins: [
        'remark-emoji',
        [
          'remark-autolink-headings',
          {
            behavior: "append",
            content: {
              type: "element",
              tagName: "font-awesome-icon",
              properties: {
                icon: ["fa-solid", "fa-link"],
              }
            }
          },
          {
            behavior: "append",
            tagName: 'nuxt-link'
          }
        ]
      ],
    }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-custom-properties": false
      }
    },
    transpile: ['devicon']
  }
}