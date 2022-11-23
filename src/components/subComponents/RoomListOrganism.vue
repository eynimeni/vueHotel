<template>
  <b-container>
    <div>
      <div v-for="room in rooms" :key="room.id">
        <RoomDisplayMolecule
            v-bind:room = room
        ></RoomDisplayMolecule>
      </div>
    </div>
    <b-pagination
        pills
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-5"
    ></b-pagination>
  </b-container>
</template>

<script>
import RoomDisplayMolecule from "@/components/subComponents/RoomDisplayMolecule";
import {useRoomStore} from "@/stores/RoomStore";

export default {
  name: "RoomListOrganism",
  components: {RoomDisplayMolecule},
  data() {
    return {
      roomStore: useRoomStore(),
      title: 'Zimmer',
      perPage: 1,
      currentPage: 1,

      /*
      [
    {
      id: 1, roomNumber: 11, roomName: 'Junior Suite', beds: 3, pricePerNight: 120, image: "/assets/images/rooms/1.jpg",
      extras: {
        bathroom: true, minibar: true, television: true, aircondition: false,
      }
    },
    {
      id: 2, roomNumber: 12, roomName: 'King Suite', beds: 1, pricePerNight: 150, image: "/assets/images/rooms/2.jpg",
      extras: {
        bathroom: true, minibar: true, television: true, aircondition: true
      }
    },
  ],

       */
    }
  }, created() {
    this.roomStore.readState()
  },
  computed: {
    rows() {
      return this.room.length
    },
    rooms() {
      return this.room.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },
    room() {
      return this.roomStore.getRooms
    }
  },
}
</script>

<style scoped>

</style>