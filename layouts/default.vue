<template>
  <div class="container-sm mx-auto pt-4 max-w-3xl">
	  <Title/>
    <LocaleSwitcher class="print:hidden"/>
      <Nuxt />
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