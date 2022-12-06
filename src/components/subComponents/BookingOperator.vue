<template>
  <b-button @click="requestBooking">Buchung abschließen</b-button>

</template>

<script>
import {BButton} from "bootstrap-vue-3";
import {useBookingStore} from "@/stores/BookingStore";

// *******
// UMBAU
// Alles soll immer direkt von Komponente an den Store.
// Der Store baut aus allen Infos das Objekt das dann an die API weitergegeben wird.
// Personal Data integriert den Store usw.
// ******



export default {
  name: "BookingOperator",
  components: {BButton},
  props: ["personaldata"],
  data() {
    return {
      bookingStore: useBookingStore(),
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