<template>
	<div class="flex place-content-center space-x-2">
		<nuxt-link
			v-for="locale in $i18n.locales"
			:key="locale.code"
			:class="{active: locale == $i18n.locale}"
			:to="switchLocalePath(locale)">
			{{ locale }}
		</nuxt-link>
	</div>
</template>

<script>
export default {
	computed: {
	  availableLocales () {
	    return this.$i18n.locales.filter(i => i !== this.$i18n.locale)
	  }
	}
}
</script>

<style>
	.active {
		@apply border-b-2
	}
</style>