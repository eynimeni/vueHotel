<template>
  <div>
    <h6>Ergebnisse</h6>

    <div>{{ request }}</div>
    <div>{{ availabiltyMessage }}</div>

  </div>
</template>

<script>
import {checkRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";

export default {
  name: "BookingDateDisplay",
  props: ['date', 'roomId'],

  data () {
    return {
      roomStoreObject: checkRoomsAvailability(),
    }
  },
  computed: {

    request() {
          this.roomStoreObject.setId(this.roomId)
          this.roomStoreObject.setDateObject(this.date)
          this.roomStoreObject.setUrl()
          this.roomStoreObject.readState()
      return null
    },

    availabiltyMessage() {
      let availability = this.roomStoreObject.getAvailability;
      let state = availability["available"];
      console.log("available = " + state)

      if(state) {
        return "Das gewählte Zimmer ist für diesen Zeitraum verfügbar."
      } else if (state === false) {
        return "Das gewählte Zimmer ist für diesen Zeitraum leider nicht verfügbar."
      } else {
        return "Wir sind auf Ihre Auswahl gespannt."
      }
      //todo evt noch ein fancy css rot / grün oder so, dafür evt ins html mit v-if
    },



  }
}
</script>

<style scoped>

</style>