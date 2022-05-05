export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Router global values
    router: {

    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'straume-design-nuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            // { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/postcss8',
        'vue-ssr-carousel/nuxt'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        extend(config, ctx) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.txt$/,
                loader: 'raw-loader',
                exclude: /(node_modules)/
            });
        }
    }
}
