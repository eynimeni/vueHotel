<template>
  <heading-organism v-bind:title="title"></heading-organism>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
export default {
  name: "ProfileComponent",
  components: {HeadingOrganism},
  data() {
    return {
      title: 'Profil',
    }
  }
}
</script>

<style scoped>

</style>