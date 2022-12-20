<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <h4 class="mb-3 mt-3 text-success">Buchungs-Id: {{this.bookingId}}</h4>
  <div class="mt-3 mb-5">
    <booking-overview></booking-overview>
  </div>

  <h4>Unser Standort</h4>
  <google-maps></google-maps>
  <contact-component></contact-component>

</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactComponent from "@/components/subComponents/ContactDataOrganism";
import GoogleMaps from "@/components/subComponents/GoogleMaps";
import BookingOverview from "@/components/subComponents/BookingOverview";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "ConfirmationComponent",
  components: {BookingOverview, GoogleMaps, ContactComponent, HeadingOrganism},
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