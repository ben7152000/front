export default {
    head: {
        title: '龍洞岬',
        titleTemplate: '龍洞岬',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [
        'assets/scss/style.scss'
    ],
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/silentbox.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/Mixitup.client.js',
        {
            src: "~/plugins/aos", 
            ssr: false 
        },
        { 
            src: "~/plugins/typed.js", 
            ssr: false 
        },
        {   
            src: '~/plugins/vue-fb-customer-chat.js', 
            ssr: false 
        }, 
    ],
    components: true,
    buildModules: [],
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/google-gtag',
        ['@nuxtjs/google-analytics', 
          { 
            id: process.env.GOOGLE_ANALYTICS_ID || '' ,
            autoTracking: {
                page: false
            }
          }
        ],
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },
    build: {
        extend (config, ctx) {},
        babel: { compact: true, }
    },
    server: {
        port: 8080,
    },

    debug: {
        enabled: true,
        sendHitTask: true
    }       
}
