<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <b-container>
    <div>
      <div v-for="room in rooms" :key="room.id">
        <RoomDisplayOrganism
            v-bind:room-name=room.roomsName
            v-bind:price-per-night=room.pricePerNight
            v-bind:beds=room.beds
            v-bind:minibar=room.extras.minibar
            v-bind:television=room.extras.television
            v-bind:aircondition=room.extras.aircondition
            v-bind:bathroom=room.extras.bathroom
            v-bind:image=room.image
            v-bind:id = room.id
        ></RoomDisplayOrganism>
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
<div>{{}}</div>
</template>

<script>
import RoomDisplayOrganism from "@/components/subComponents/RoomDisplayOrganism";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import {useRoomStore} from "@/stores/RoomStore";

export default {
  name: "RoomComponent",
  components: {
    HeadingOrganism,
    RoomDisplayOrganism,
  },
  data() {
    return {
      roomStoreObject: useRoomStore().readState(),
      title: 'Zimmer',
      perPage: 1,
      currentPage: 1,
      room: useRoomStore().rooms
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
  },
  computed: {
    rows() {
      return this.room.length
    },
    rooms() {
      console.log(useRoomStore().rooms)
      console.log(this.room)
      return this.room.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },


  },
}
</script>

<style scoped>

</style>