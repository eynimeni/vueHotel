<template>
  <b-container>
  <h4>Buchungsübersicht:</h4>
    <h6>{{dateString}}</h6>
    <h6>Anzahl der Nächte: {{durationOfStay}}</h6>
  <room-id-display></room-id-display>
  </b-container>
</template>

<script>
import RoomIdDisplay from "@/components/subComponents/RoomIdDisplay";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
export default {
  name: "BookingOverview",
  components: {RoomIdDisplay},
  data() {
    return {
      headlineBookingOverview: "Buchungsübersicht",
      useRoomsAvailabilityStore: useRoomsAvailability(),
      startDateRaw: null,
      endDateRaw: null,
      startDateString: null,
      endDateString: null,
      dateString: "Noch kein Aufenthalt ausgewählt",
      durationOfStay: 0
    }
  },
  created() {
    this.useRoomsAvailabilityStore.readState()
    this.setDateFromStore()
    this.setDateString()
  },
methods: {
  setDateFromStore() {
    this.startDateRaw = this.useRoomsAvailabilityStore.getStartDateRaw
    this.startDateString = this.startDateRaw.toLocaleDateString()

    this.endDateRaw = this.useRoomsAvailabilityStore.getEndDateRaw
    this.endDateString = this.endDateRaw.toLocaleDateString()

    let dateDifferenceInMs = this.endDateRaw.getTime() - this.startDateRaw.getTime()
    this.durationOfStay = Math.ceil(dateDifferenceInMs /(1000 * 3600 * 24))
  },
  setDateString() {
    this.dateString =
    "Ihr Aufenthalt von " +
        this.startDateString + " bis " + this.endDateString;
  },

},


}
</script>

<style scoped>

</style>