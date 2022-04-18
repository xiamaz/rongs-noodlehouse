<template>
	<li :key="item.name" class="grid grid-cols-[5rem_auto] text-sm">
		<div class="flex justify-end text-lg px-4 font-bold">
			{{ formatPrice(item.price) }} 
		</div>
		<div class="text-lg font-black">
			{{ item[`name-${localeSuffix}`] || item.name }}
			<sup class="font-thin text-xs">
				{{ formatAdditives(item.additives) }}
			</sup>
		</div>
		<div v-if="item['name-cn']" class="col-start-2">
			{{item['name-cn']}}
		</div>
		<div class="col-start-2">
			{{ item[`desc-${localeSuffix}`] || item.desc }}
		</div>
	</li>
</template>

<script setup lang="ts">
import { MenuItem } from '~/types/FoodMenu';
import AdditiveId from '~/types/Additive';
import {getUsedAdditives, getUsedId} from '~/components/AdditiveMethods';

const props = defineProps({
  item: { type: Object as () => MenuItem, required: true },
	localeSuffix: String
});

function priceToEurCent(price: number): [number,number] {
	let cents = price % 100;
	let euros = Math.trunc(price/100);
	return [euros, cents];
}

function formatPrice(price: number): string {
	let [euros, cents] = priceToEurCent(price);
	let fmtString: string = `${euros},${cents}`;
	return fmtString;
}

function formatAdditives(additives: AdditiveId[]): string {
	return additives.map((v) => getUsedId(v)).join(", ");
}
</script>