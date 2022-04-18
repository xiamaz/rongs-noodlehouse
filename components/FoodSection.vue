<template>
	<div>
			<div class="text-xl mt-4 font-bold">
				{{ section[`title-${localeSuffix}`] || section.title }}
			</div>
			<div class="my-2">
				{{ section[`desc-${localeSuffix}`] || section.desc }}
			</div>
			<ul>
				<FoodItem :item="item" v-for="item in section.items" :localeSuffix="localeSuffix"/>
			</ul>
			<div v-if="section.subsections && section.subsections.length > 0">
				<FoodSection :level="level + 1" :section="subsection" v-for="subsection in section.subsections" :key="subsection.title" :localeSuffix="localeSuffix"/>
			</div>
	</div>
</template>

<script setup lang="ts">
import { MenuSection } from '~/types/FoodMenu';

const props = defineProps({
  section: { type: Object as () => MenuSection, required: true },
	level: Number,
	localeSuffix: String
});

</script>