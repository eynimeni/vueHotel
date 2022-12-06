<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <div>Zeitraum</div>
  <div>Hotelzimmer</div>
  <booking-overview></booking-overview>
  <div>Daten</div>
  <div>Anfahrtsbeschreibung</div>
  <google-maps></google-maps>
  <div>Kontaktmöglichkeit</div>
  <contact-component></contact-component>

</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactComponent from "@/components/subComponents/ContactDataOrganism";
import GoogleMaps from "@/components/subComponents/GoogleMaps";
import BookingOverview from "@/components/subComponents/BookingOverview";

export default {
  name: "ConfirmationComponent",
  components: {BookingOverview, GoogleMaps, ContactComponent, HeadingOrganism},
  data() {
    return {
      title: 'Buchungsbestätigung',
    }
  }
}
</script>

<style scoped>

</style>