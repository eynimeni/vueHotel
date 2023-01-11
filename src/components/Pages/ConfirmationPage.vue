<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <div v-if="bookingId==null">
    <h5 class="text-danger">Ups! Leider ist beim Buchungsprozess etwas schief gegangen. Bitte führen Sie die Buchung nochmal aus.</h5>
  </div>
  <div v-else>
    <h5 class="m-3 text-success">Ihre Buchung war erfolgreich!</h5>
    <h5 class="mb-3 mt-3 text-success">Buchungs-Id: {{this.bookingId}}</h5>
    <div class="mt-3 mb-5">
      <booking-overview></booking-overview>
    </div>
    <h4>Unser Standort</h4>
    <google-maps></google-maps>
    <anfahrt-molecule></anfahrt-molecule>
    <contact-component></contact-component>
  </div>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactComponent from "@/components/subComponents/ContactDataOrganism";
import GoogleMaps from "@/components/subComponents/GoogleMaps";
import BookingOverview from "@/components/subComponents/BookingOverview";
import {useBookingStore} from "@/stores/BookingStore";
import AnfahrtMolecule from "@/components/subComponents/AnfahrtMolecule";

export default {
  name: "ConfirmationComponent",
  components: {AnfahrtMolecule, BookingOverview, GoogleMaps, ContactComponent, HeadingOrganism},
  data() {
    return {
      title: 'Buchungsbestätigung',
      bookingStore: useBookingStore()
    }
  },
  computed: {
    bookingId() {
      return this.bookingStore.getBookingId
    }
  }
}
</script>

<style scoped>

</style>