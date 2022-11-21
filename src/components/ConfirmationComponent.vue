<template>
    <header-component></header-component>
  <heading-component v-bind:title="title"></heading-component>
  <div>confirmation</div>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import HeadingComponent from "@/components/subComponents/HeadingComponent";
export default {
  name: "ConfirmationComponent",
  components: {HeaderComponent, HeadingComponent},
  data() {
  return {
    title: 'Bestätigung',
  }}
}
</script>

<style scoped>

</style>