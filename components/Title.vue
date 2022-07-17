<template lang="">
	<NuxtLink :to="localePath('/')">
	<div class="ml-2 md:ml-0 flex items-start">
		<img src="~/assets/logo-sym.svg" width="64" height="64" class="w-16 ml-2 mt-1 mr-4 md:mr-7" alt="" srcset="">
		<div class="">
      <div class="text-3xl md:text-4xl text-gray-700 font-black">
			  Rong's Noodlehouse
      </div>
      <div class="font-bold">{{$t('subtitle')}}</div>
		</div>
	</div>
	</NuxtLink>
</template>

<script>
</script>
<style>
</style>
