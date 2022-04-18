<template>
	<div class="">
		<div v-for="section in menuJson.sections" :key="section.title" class="m-2">
				<FoodSection :level="0" :section="section" :key="section.title" :localeSuffix="currentLocaleSuffix"/>
		</div>
		<div class="ml-1">
			<div class="font-bold text-sm">
				{{$t("additives")}}
			</div>
			<div class="text-xs font-thin flex flex-wrap gap-x-3">
				<span class="space-x-4" v-for="(additive, index) in UsedAdditives" :key="additive.id">{{index + 1}} - {{ additive[`name-${currentLocaleSuffix}`] || additive.name }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { UsedAdditives } from "@/src/AdditiveMethods";
import menuJson from "@/assets/menu.json";
export default {
	data() {
		return {
			menuJson: menuJson,
			UsedAdditives: UsedAdditives
		}
	},
	computed: {
	  currentLocaleSuffix() {
			if (this.$i18n.locale === "de") {
				return "";
			} else {
				return this.$i18n.locale;
			}
	  }
	}
}
</script>
<style>
</style>