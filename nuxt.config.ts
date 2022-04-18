import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	bridge: {
    vite: true,
  },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n'
	],
	build: {
		transpile: [
			'@nuxt/bridge-edge',
		],
	},
	i18n: {
		locales: ['en', 'de'],
		defaultLocale: 'de',
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
	}
})
