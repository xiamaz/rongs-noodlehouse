<template>
  <div class="container-sm mx-auto pt-4 max-w-4xl">
    <div class="grid gap-x-8 md:grid-cols-[12rem_auto]">
	    <Title class="md:col-start-2"/>
      <Infobox class="md:row-start-2 md:pt-1"/>
      <Nuxt class="md:col-start-2"/>
    </div>
    <!--

    <LocaleSwitcher class="print:hidden"/>
    -->
    <FooterSection class="print:hidden"/>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-main'
      },
    }
  }
}
</script>

<style>

body {
	font-family: "Nunito Sans", sans-serif;
}
</style>
