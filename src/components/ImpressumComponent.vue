<template>
  <header-component></header-component>
  <heading-component v-bind:title="title"></heading-component>
  <contact-component></contact-component>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import HeadingComponent from "@/components/subComponents/HeadingComponent";
import ContactComponent from "@/components/subComponents/ContactComponent";

export default {
  name: "ImpressumComponent",
  components: {ContactComponent, HeadingComponent, HeaderComponent},
  data() {
    return {
      title: 'Impressum',
    }
  }
}
</script>

<style scoped>

</style>