<template>
  <div>
    <h6>Ergebnisse</h6>
    <p>{{date[0]}}</p>
    <p>{{day}}</p>

    <div>{{ availabiltyMessage }}</div>

  </div>
</template>

<script>


import {checkRoomsAvailability} from "@/stores/RoomAvailabiltyStore";

let url = 'https://boutique-hotel.helmuth-lammer.at/api/v1/room/1/from/2023-11-03/to/2023-11-05'

    export default {
  name: "BookingDateDisplay",
  props: ['date', 'roomId'],
  data () {
    return {
      roomStoreObject: checkRoomsAvailability().readState(url),
      available: checkRoomsAvailability().available,
    }

  },
  computed: {
    day() {
      console.log(this.date);
      console.log(this.date[0]);
      console.log(this.roomId)
      return this.date
    },
    getRoomId() {
      return this.roomId;
    },
    availabiltyMessage() {
      let state = this.available["available"];

      if(state) {
        return "Das gewählte Zimmer ist für diesen Zeitraum verfügbar."
      } else {
        return "Das gewählte Zimmer ist für diesen Zeitraum leider nicht verfügbar."
      }
      //todo evt noch ein fancy css rot / grün oder so
    },

  }
}
</script>

<style scoped>

</style>