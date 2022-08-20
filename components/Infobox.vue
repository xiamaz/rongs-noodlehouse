<template>
  <div class="mt-4 print:hidden space-y-2 justify-self-center">
    <a href="https://goo.gl/maps/wuVmtMS2fX8CghJ28" target="_blank" class="flex flex-row">
      <font-awesome-icon icon="fa-solid fa-house" class="mr-2 pt-1" />
      <div>
        <span> Leibnizstraße 101, </span>
        <span> 10625 Berlin </span>
      </div>
    </a>
    <div class="flex flex-row">
      <font-awesome-icon icon="fa-solid fa-clock" class="mr-2 pt-1" />
      <div class="text-justify ">
        <span> {{formatWeekday(1)}} &ndash; {{formatWeekday(5)}} </span>
        <span> 11:30 &ndash; 19:00 </span>
      </div>
    </div>
    <LocaleSwitcher class="mt-4"/>
    <div class="text-red-500 font-bold text-justify text-sm">
      Vom 22.08.2022 bis 26.08.2022 haben wir Betriebsferien. Wir freuen uns Sie danach wieder bedienen zu können!
    </div>
  </div>
</template>

<script>
  export default {
	  methods: {
	  	formatWeekday(dayIndex) {
	  		let date = new Date(Date.UTC(2017, 0, 2));
	  		date.setDate(date.getDate() + dayIndex - 1);
	  		let locale = "de-DE";
	  		if (this.$i18n.locale === "en") {
	  			locale = "en-US";
	  		}
	  		return date.toLocaleString(locale, {weekday: 'long'});
	  	}
    }
	}
</script>
