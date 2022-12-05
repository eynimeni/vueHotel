<template>
  <div>
    <div>{{ request }}</div>
    <!--fändet ihr es gut, hier nochmals das Zimmer und den Zeitraum zu nennen? oder dann nächste seite?-->
    <div v-if="isAvailable" class="b-toast-success">Das gewählte Zimmer ist für diesen Zeitraum verfügbar.</div>
    <div v-else-if="isAvailable === false" class="b-toast-danger">Das gewählte Zimmer ist für diesen Zeitraum leider nicht verfügbar.</div>
    <div v-else>Bitte wählen Sie Zimmertyp und Buchungszeitraum.</div>
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

    isAvailable() {
      let availability = this.roomStoreObject.getAvailability;
      const state = availability["available"];
      console.log("available = " + state)
      return state
    }

  }
}
</script>

<style scoped>

</style>