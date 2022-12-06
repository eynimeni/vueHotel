<template>
  <h4> {{headline}} </h4>
  <room-display-molecule
      v-bind:room=room
      v-bind:image=getImage()
  >
  </room-display-molecule>

</template>

<script>
import {useRoomStore} from "@/stores/RoomStore";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import RoomDisplayMolecule from "@/components/subComponents/RoomDisplayMolecule";
export default {
  name: "RoomIdDisplay",
  props: ['headline', 'roomId'],
  data() {
    return {
      roomStore: useRoomStore(),
      useRoomsAvailabilityStore: useRoomsAvailability(),
      roomIdFromStore: null
    }
  },
  created() {
    this.roomStore.readState()
    this.useRoomsAvailabilityStore.readState()
  },
  components: {
    RoomDisplayMolecule,
  },
  methods: {
    getRoomIdFromStore() {
      this.roomIdFromStore = this.useRoomsAvailabilityStore.getId
    },
      getImage() {
        if (this.roomId != null) {
          return "/assets/images/rooms/" + this.roomId + ".jpg"
        }
        else {
          return "/assets/images/rooms/" + this.roomIdFromStore + ".jpg"
        }

      }
  },
  computed: {

    room() {
      let rooms = this.roomStore.getRooms

      if (this.roomId != null) {
        let selectedRoom = rooms[this.roomId]
        return selectedRoom
      }
      else {
        this.getRoomIdFromStore()
        let selectedRoom = rooms[this.roomIdFromStore]
        console.log(this.roomIdFromStore)
        return selectedRoom
      }

    },
  }
}

//todo preis berechnen


</script>

<style scoped>

</style>