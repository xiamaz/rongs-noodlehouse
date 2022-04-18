<template>
  <div class="container-sm mx-auto pt-4 max-w-3xl">
	  <Title/>
    <LocaleSwitcher/>
    <slot />
    <FooterSection/>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-main'
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;900&display=swap');

body {
	font-family: "Nunito Sans", sans-serif;
}
</style>