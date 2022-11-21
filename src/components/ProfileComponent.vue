<template>
  <header-component></header-component>
  <heading-component v-bind:title="title"></heading-component>
  <div>profile</div>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
export default {
  name: "ProfileComponent",
  components: {HeaderComponent}
  data() {
    return {
      title: 'Profil',
    }
  }
}
</script>

<style scoped>

</style>