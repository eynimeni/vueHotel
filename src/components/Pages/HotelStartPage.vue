<template>
 <heading-organism v-bind:title="title" v-bind:text="text" v-bind:image="image" v-bind:image-alt="imageAlt"></heading-organism>
</template>

<script>

import HeadingOrganism from "@/components/subComponents/HeadingOrganism";

export default {
  name: "HotelComponent",
  components: {
    HeadingOrganism

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
