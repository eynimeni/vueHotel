<template>
  <header-component></header-component>
  <card-component></card-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import FooterComponent from "@/components/subComponents/FooterComponent";
import CardComponent from "@/components/subComponents/CardComponent";
export default {
  name: "RoomComponent",
  components: {
    CardComponent,
    FooterComponent,
    HeaderComponent,
  },

}
</script>

<style scoped>

</style>