<template>
  <header-component></header-component>
  <div><p>Willkommen!</p></div>
  <b-container fluid class="p-4 bg-light">
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="/assets/images/hotel-belvedere-bozen.jpg" alt="Image Hotel"></b-img>
      </b-col>
    </b-row>
    <b-row>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </b-row>
  </b-container>
  <footer-component></footer-component>
</template>

<script>

import HeaderComponent from "@/components/subComponents/HeaderComponent";
import FooterComponent from "@/components/subComponents/FooterComponent";

export default {
  name: "HotelComponent",
  components: {
     HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>

</style>