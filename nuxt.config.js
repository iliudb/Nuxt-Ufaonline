import colors from "vuetify/es5/util/colors";

export default {
    server: {
        // host: "localhost" // default: localhost
        port: 7000
    },

    generate: {
        fallback: true
    },

    axios: {
        baseURL: "https://apiarticle.warpufa.bet/" // Used as fallback if no runtime config is provided
    },
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - Ufaonline",
        title: "UFA UFABET เว็บแทงบอลออนไลน์ ได้เงินจริง",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "เว็บบอลออนไลน์ ยูฟ่า เว็บตรงจาก UFABET  เว็บคาสิโนออนไลน์อันดับ 1 เล่นง่ายๆ ได้เงินชัวร์ๆ ฝาก ถอนเงินอัตโนมัติ 24 ชม."
            }
        ],
        link: [{ rel: "icon", type: "image/png", href: "/icon0.png" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ["@nuxtjs/axios"]
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};