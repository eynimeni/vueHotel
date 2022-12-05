<template>

  <h2> Ihre Buchungsdaten </h2>
  <!-- über die ID  -->

</template>

<script>

import {useRoomStore} from "@/stores/RoomStore";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import {useBookingStore} from "@/stores/BookingStore";
import {useUserStore} from "@/stores/UserStore";


export default {
  name: "BookingOverview",
  components: {
    useRoomStore,
    useBookingStore,
    useUserStore,
    useRoomsAvailability
  }
}

//über die Id das Zimmer und das Bild auslesen

//von hier dann den / die posts wegschicken


</script>

<style scoped>

</style>