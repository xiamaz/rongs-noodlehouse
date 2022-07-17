<template>
	<div class="mb-6">
			<div class="text-xl mt-4 font-bold">
				{{ section[`title-${localeSuffix}`] || section.title }}
			</div>
			<div class="">
				{{ section[`desc-${localeSuffix}`] || section.desc }}
			</div>
			<ul class="space-y-4 print:space-y-1">
				<FoodItem :item="item" v-for="item in section.items" :key="item.name" :localeSuffix="localeSuffix"/>
			</ul>
			<div v-if="section.subsections && section.subsections.length > 0">
				<FoodSection :level="level + 1" :section="subsection" v-for="subsection in section.subsections" :key="subsection.title" :localeSuffix="localeSuffix"/>
			</div>
	</div>
</template>

<script>
export default {
	props: ["section", "level", "localeSuffix"]
}
</script>
