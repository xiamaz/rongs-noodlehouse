<template>
	<div>
			<div class="text-xl mt-4 font-bold">
				{{ section[`title-${localeSuffix}`] || section.title }}
			</div>
			<div class="my-2">
				{{ section[`desc-${localeSuffix}`] || section.desc }}
			</div>
			<ul>
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