<template>
	<li :key="item.name" class="flex sm:flex-row flex-col items-center mt-1">
  <!--

		<div class="sm:w-36 w-9/12 flex-shrink-0 print:hidden" >
			<nuxt-img v-if="item['pictures']"  sizes="sm:100vw md:288px" format="webp" class="rounded-2xl" :src="item['pictures'][0]['path']" alt=""/>
		</div>
  -->
		<div class="flex ml-2 flex-row mt-1 sm:w-auto w-full">
			<div class="w-16 flex justify-end text-lg px-4 font-bold">
				{{ formatPrice(item.price) }}
			</div>
			<div>
				<div class="text-lg font-black">
					{{ item[`name-${localeSuffix}`] || item.name }}
					<sup class="font-thin text-xs whitespace-nowrap">
						{{ formatAdditives(item.additives) }}
					</sup>
				</div>
				<div v-if="item['name-cn']" class="text-sm font-normal">
					{{item['name-cn']}}
				</div>
				<div v-if="showDescription" class="text-sm font-normal">
					{{ item[`desc-${localeSuffix}`] || item.desc }}
				</div>
			</div>
		</div>
	</li>
</template>

<script>
import { getUsedAdditives, getUsedId } from "@/src/AdditiveMethods";
export default {
	props: ['item', 'localeSuffix', 'showDescription'],
	methods: {
		priceToEurCent(price) {
			let cents = price % 100;
			let euros = Math.trunc(price/100);
			return [euros, cents];
		},
		formatPrice(price) {
			let [euros, cents] = this.priceToEurCent(price);
			let fmtString = `${euros},${cents.toString().padStart(2, '0')}`;
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
