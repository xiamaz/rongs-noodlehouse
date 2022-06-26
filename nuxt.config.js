export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
	  title: "Rongs noodlehouse - home-made ramen and buns",
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',

  ],
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'de',
    strategy: 'prefix_except_default',
		vueI18n: {
			fallbackLocale: 'de',
			messages: {
				en: {
					welcome: 'Welcome',
					imprint: 'Imprint',
					owner: 'Owner',
					additives: 'Additives and allergens',
					opening: "Opening hours",
					closed: "closed",
				},
				de: {
					welcome: 'Willkommen',
					imprint: 'Impressum',
					owner: 'Inhaberin',
					additives: 'Zusatzstoffe und Allergene',
					opening: "Öffnungszeiten",
					closed: "geschlossen",
				}
			}
		},
  },
  googleFonts: {
    families: {
      'Nunito+Sans': [400, 900],
    },
    display: 'swap'
  },
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
