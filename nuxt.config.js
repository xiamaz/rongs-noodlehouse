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
      { hid: 'description', name: 'description', content: 'Traditional chinese noodles and bao. All our dishes are made in our shop.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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
          subtitle: "Traditional chinese style all-homemade ramen, tofu and baozi.",
				},
				de: {
					welcome: 'Willkommen',
					imprint: 'Impressum',
					owner: 'Inhaberin',
					additives: 'Zusatzstoffe und Allergene',
					opening: "Öffnungszeiten",
					closed: "geschlossen",
          subtitle: "Hausgemachte Ramen, Tofu und Baozi nach traditionell chinesischer Art.",
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
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
