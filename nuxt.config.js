export default {
    head: {
        title: "新北市-龍洞岬-和美國小-自由潛水課程-浮潛裝備中心",
        titleTemplate: "新北市-龍洞岬-和美國小-自由潛水課程-浮潛裝備中心",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                name: "description",
                content:
                    "新北市,北海岸,龍洞,和美國小,東北角,浮潛,裝備出租,龍洞自由潛水,自由潛水,自由潛水課程,自由潛水教學,自由潛水體驗,小班制教學,AIDA1,AIDA2,AIDA3",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    css: ["assets/scss/style.scss"],
    plugins: [
        "~/plugins/vue-awesome-swiper.js",
        "~/plugins/silentbox.js",
        "~/plugins/vuejs-paginate.js",
        "~/plugins/Mixitup.client.js",
        "~/plugins/vue-gtag.js",
        "plugin:prettier/recommended",
        "plugin:nuxt/recommended",
        {
            src: "~/plugins/aos",
            ssr: false,
        },
        {
            src: "~/plugins/typed.js",
            ssr: false,
        },
        {
            src: "~/plugins/vue-fb-customer-chat.js",
            ssr: false,
        },
    ],
    components: true,
    modules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources", "@nuxtjs/axios"],
    styleResources: {
        scss: ["~/assets/scss/_variables.scss"],
    },
    build: {
        extend(config, ctx) {},
        babel: {
            compact: true,
            plugins: [
                ["@babel/plugin-proposal-private-methods", { loose: true }],
            ],
        },
    },
    server: {
        port: 8080,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
        "prettier/prettier": [
            "error",
            {
                printWidth: 120,
                tabWidth: 2,
                useTabs: false,
                singleQuote: true,
                semi: true,
                trailingComma: "all",
                arrowParens: "avoid",
                htmlWhitespaceSensitivity: "ignore",
                bracketSameLine: true,
                bracketSpacing: false,
                endOfLine: "auto",
            },
        ],
    },
};
