export default {
    head: {
        title: "龍洞岬-自由潛水課程-浮潛裝備中心",
        titleTemplate: "龍洞岬-自由潛水課程-浮潛裝備中心",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid:
                    "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水,專業教練小班制教學,小班教學,東北角龍洞灣,龍洞灣,龍洞灣自由潛水",
                name: "description",
                content:
                    "台北龍洞浮潛,跳水,自由潛水課程,自由潛水教學,裝備租借,和美國小,龍洞四號,體驗浮潛,體驗自由潛水,沖洗,石花洞,龍洞岬,浮潛中心, freediving,,長蛙,課程,教學,台灣,北海岸自由潛水教學,龍洞自由潛水課程,租借長蛙,最好的長蛙,買自由潛水長蛙,買長蛙,哪裡買長蛙,長蛙,蛙鞋,自由潛水蛙鞋,學自由潛水,學自潛,買蛙鞋,蛙鞋哪裡買,好的長蛙,浮潛,龍洞第一排,最佳位置,裝備哪裡借,哪裡可以沖身體,最佳環境,北海岸自由潛,自由潛水,龍洞自由潛水,新北市自由潛水,台北自由潛水,北部自由潛水,專業教練小班制教學,小班教學,東北角龍洞灣,龍洞灣,龍洞灣自由潛水"
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    css: ["assets/scss/style.scss"],
    plugins: [
        "~/plugins/vue-awesome-swiper.js",
        "~/plugins/silentbox.js",
        "~/plugins/vuejs-paginate.js",
        "~/plugins/Mixitup.client.js",
        {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: false
        },
        {
            src: "~/plugins/vue-fb-customer-chat.js",
            ssr: false
        }
    ],
    components: true,
    buildModules: [],
    modules: [
        "bootstrap-vue/nuxt",
        "@nuxtjs/style-resources",
        "@nuxtjs/axios",
        "@nuxtjs/google-gtag",
        "@nuxtjs/google-gtag"
    ],
    styleResources: {
        scss: ["~/assets/scss/_variables.scss"]
    },
    build: {
        extend(config, ctx) {},
        babel: {
            compact: true,
            plugins: [
                ["@babel/plugin-proposal-private-methods", { loose: true }]
            ]
        }
    },
    server: {
        port: 8080
    },
    "google-gtag": {
        id: process.env.GOOGLE_ANALYTICS_ID,
        config: {
            anonymize_ip: true,
            send_page_view: false,
            linker: {
                domains: ["domain.com", "domain.org"]
            }
        },
        debug: true,
        disableAutoPageTrack: false
    }
};
