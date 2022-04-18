<template>
  <div class="container-sm mx-auto pt-4 max-w-3xl">
	  <Title/>
    <LocaleSwitcher/>
      <Nuxt />
    <FooterSection/>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-main'
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;900&display=swap');

body {
	font-family: "Nunito Sans", sans-serif;
}
</style>