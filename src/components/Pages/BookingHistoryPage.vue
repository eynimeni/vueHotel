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

export default {
  name: "BookingHistoryPage",
  components: {BookingTableMolecule, HeadingOrganism},
  data() {
    return {
      bookings: [
        { roomId: "Double Room", startDate: "2023-09-09", endDate: "2023-09-10" },
        { roomId: "Junior Suite", startDate: "2022-08-05", endDate: "2022-08-08" },
      ],
      dateToday: this.currentDate()
    }
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
      for (let booking in this.bookings) {
        if(this.bookings[booking].startDate > this.dateToday) {
          futureBookingsList.push(this.bookings[booking])
        }
      }
      return futureBookingsList;
    },
    pastBookings() {
      let pastBookingsList = [];
      for (let booking in this.bookings) {
        if(this.bookings[booking].startDate <= this.dateToday) {
          pastBookingsList.push(this.bookings[booking])
        }
      }
      return pastBookingsList;
    }
  }
}

</script>

<style scoped>

</style>