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
      <p>Unser Hotel ist sehr toll. Es hat wunderschöne Zimmer und eine super Lage. Menschen empfehlen den Aufenthalt hier.</p>
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