<template>
  <heading-organism v-bind:title="title"></heading-organism>

</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";

export default {
  name: "ConfirmationComponent",
  components: {HeadingOrganism},
  data() {
    return {
      title: 'Buchungen',
    }
  }
}
</script>

<style scoped>

</style>