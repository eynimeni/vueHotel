<template>
  <header-component></header-component>
 <heading-component v-bind:title="title" v-bind:text="text" v-bind:image="image" v-bind:image-alt="imageAlt"></heading-component>
  <footer-component></footer-component>
</template>

<script>

import HeaderComponent from "@/components/subComponents/HeaderComponent";
import FooterComponent from "@/components/subComponents/FooterComponent";
import HeadingComponent from "@/components/subComponents/HeadingComponent";

export default {
  name: "HotelComponent",
  components: {
    HeadingComponent,
     HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      title: 'Das Hotel',
      image: '/assets/images/hotel-belvedere-bozen.jpg',
      imageAlt: 'hotelimage',
      text: 'Unser Hotel ist sehr toll. Es hat wunderschöne Zimmer und eine super Lage. Menschen empfehlen den Aufenthalt hier.'
    }
  }
}
</script>

<style scoped>

</style>