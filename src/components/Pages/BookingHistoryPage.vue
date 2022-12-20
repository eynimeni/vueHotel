<template>
  <heading-organism title="Meine Buchungen"></heading-organism>

  <h5 class="mt-5">Geplante Reisen</h5>
  <booking-table-molecule v-bind:bookings=futureBookings></booking-table-molecule>
  <h5 class="mt-5">Vergangene Reisen</h5>
  <booking-table-molecule v-bind:bookings=pastBookings></booking-table-molecule>

</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import BookingTableMolecule from "@/components/subComponents/BookingTableMolecule";
import {useBookingStore} from "@/stores/BookingStore";
import {useLoginStore} from "@/stores/LoginStore";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "BookingHistoryPage",
  components: {BookingTableMolecule, HeadingOrganism},
  data() {
    return {
      bookingStore: useBookingStore(),
      userStore: useUserStore(),
      loginStore: useLoginStore(),
      // bookings: [ //testdaten
      //   { roomId: "Double Room", startDate: "2023-09-09", endDate: "2023-09-10" },
      //   { roomId: "Junior Suite", startDate: "2022-08-05", endDate: "2022-08-08" },
      // ],
      dateToday: this.currentDate()
    }
  },
  created() {
    this.bookingStore.readBookings(this.token)
  },
  methods: {
    currentDate() {
      let today = new Date();
      let d = today.getDate();
      let m = today.getMonth() + 1;
      let y = today.getFullYear();

      if (today.getDate()<10) {
        return  y + "-" + m + "-0" + d;
      } else {
        return  y + "-" + m + "-" + d;
      }
    }
  },
  computed: {
    futureBookings() {
      let futureBookingsList = [];
      for (let booking in this.bookingsApi) {
        if(this.bookingsApi[booking].from > this.dateToday) {
          futureBookingsList.push(this.bookingsApi[booking])
        }
      }
      return futureBookingsList;
    },
    pastBookings() {
      let pastBookingsList = [];
      for (let booking in this.bookingsApi) {
        if(this.bookingsApi[booking].from <= this.dateToday) {
          pastBookingsList.push(this.bookingsApi[booking])
        }
      }
      return pastBookingsList;
    },
    bookingsApi() {
      return this.bookingStore.getBookings    //hier kommt dann ein array mit allen bookings zurück, siehe unten -> iterieren!
    },
   /* userApi() { //hier kommt user mit seinen bookings zurück, wie oben in testdaten -> diese option würde schon funktionieren in UI
      return this.userStore.getUser
    },*/
    token() {
      return this.loginStore.getToken
    },

    /*[ {
} }
}, {
... }
]
"booking": { "id": 1234,
"from": "YYYY-MM-DD",
"to": "YYYY-MM-DD" },
"room": { "id": 1,
"roomNumber": 11, "roomName": "Junior Suite", "beds": 3,
"pricePerNight": 120, "extras": {
"bathRoom": true, "minibar": true, "television": true, "aircondition": true*/
  }
}

</script>

<style scoped>

</style>

