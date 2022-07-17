<template>
	<div class="mx-2 my-6">
		<div class="text-xl font-bold mb-4">{{$t("opening")}}</div>
		<ul class="columns-2 md:columns-3 gap-1 mx-4">
			<li
				v-for="openingTime in openingHoursJson.times"
				:key="openingTime.day"
				class="grid grid-cols-2 text-sm break-inside-avoid"
			>
				<div class="text-right pr-2">
					{{formatWeekday(openingTime.day)}}
				</div>
				<div v-if="openingTime.times.length > 0" class="">
					<div v-for="oSpan in openingTime.times" :key="oSpan.from">
						{{oSpan.from}} - {{oSpan.to}}
					</div>
				</div>
				<div v-else class="text-center">
					{{$t("closed")}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import openingHoursData from "~/assets/opening-hours.json";

export default {
	data() {
		return {
			openingHoursJson: openingHoursData
		}
	},
	methods: {
		formatWeekday(dayIndex) {
			let date = new Date(Date.UTC(2017, 0, 2));
			date.setDate(date.getDate() + dayIndex - 1);
			let locale = "de-DE";
			if (this.$i18n.locale === "en") {
				locale = "en-US";
			}
			return date.toLocaleString(locale, {weekday: 'long'});
		}
	}
}
</script>

<style>

</style>
