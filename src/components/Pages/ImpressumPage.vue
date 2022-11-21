<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <contact-component></contact-component>

</template>

<script>
import ContactComponent from "@/components/subComponents/ContactDataOrganism";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";

export default {
  name: "ImpressumComponent",
  components: {HeadingOrganism, ContactComponent},
  data() {
    return {
      title: 'Impressum',
    }
  }
}
</script>

<style scoped>

</style>
