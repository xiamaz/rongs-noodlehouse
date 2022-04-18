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

<script>
import { getUsedAdditives, getUsedId } from "@/src/AdditiveMethods";
export default {
	props: ['item', 'localeSuffix'],
	methods: {
		priceToEurCent(price) {
			let cents = price % 100;
			let euros = Math.trunc(price/100);
			return [euros, cents];
		},
		formatPrice(price) {
			let [euros, cents] = this.priceToEurCent(price);
			let fmtString = `${euros},${cents}`;
			return fmtString;
		},
		formatAdditives(additives) {
			return additives.map((v) => getUsedId(v)).join(", ");
		},
		getUsedAdditives() {
			return getUsedAdditives();
		}
	}
}
</script>