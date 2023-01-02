<template>
  <b-container>
    <h4>Buchungsübersicht:</h4>
    <h6>{{ dateString }}</h6>
    <h6>Anzahl der Nächte: {{ durationOfStay }}</h6>
    <h6>Persönliche Daten:</h6>
    <personal-data-table></personal-data-table>
    <room-id-display></room-id-display>
  </b-container>
</template>

<script>
import RoomIdDisplay from "@/components/subComponents/RoomIdDisplay";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import PersonalDataTable from "@/components/subComponents/PersonalDataTable";

export default {
  name: "BookingOverview",
  components: {PersonalDataTable, RoomIdDisplay},
  data() {
    return {
      headlineBookingOverview: "Buchungsübersicht",
      RoomsAvailabilityStore: useRoomsAvailability(),
      startDateRaw: null,
      endDateRaw: null,
      startDateString: null,
      endDateString: null,
      dateString: "Noch kein Aufenthalt ausgewählt",
      durationOfStay: 0,
    }
  },
  created() {
    this.RoomsAvailabilityStore.readState()
    this.setDateFromStore()
    this.setDateString()
  },
  methods: {
    setDateFromStore() {
      this.startDateRaw = this.RoomsAvailabilityStore.getStartDateRaw
      this.startDateString = this.startDateRaw.toLocaleDateString()

      this.endDateRaw = this.RoomsAvailabilityStore.getEndDateRaw
      this.endDateString = this.endDateRaw.toLocaleDateString()

      let dateDifferenceInMs = this.endDateRaw.getTime() - this.startDateRaw.getTime()
      this.durationOfStay = Math.ceil(dateDifferenceInMs / (1000 * 3600 * 24))
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