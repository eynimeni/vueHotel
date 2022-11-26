<template>
  <b-button @click="requestBooking">Buchung abschließen</b-button>

</template>

<script>
import {BButton} from "bootstrap-vue-3";
import {useBookingStore} from "@/stores/BookingStore";

export default {
  name: "BookingOperator",
  components: {BButton},
  props: ["personaldata"], //hier noch props von Booking (Zimmer id)
  data() {
    return {
      bookingStore: useBookingStore()
    }
  },
  methods: {
    requestBooking() {
      let bookingRequest = {
        firstname: this.personaldata.firstname,
        lastname: this.personaldata.lastname,
        email: this.personaldata.email,
        birthdate: this.personaldata.birthdate
      }
      this.bookingStore.requestBookings(bookingRequest)
    }

  }
}
</script>

<style scoped>

</style>