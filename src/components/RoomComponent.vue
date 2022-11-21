<template>
  <b-container>
    <div>
      <div v-for="room in rooms" :key="room.id">
        <CardComponent
            v-bind:room-name=room.roomName
            v-bind:price-per-night=room.pricePerNight
            v-bind:beds=room.beds
            v-bind:minibar=room.extras.minibar
            v-bind:television=room.extras.television
            v-bind:aircondition=room.extras.aircondition
            v-bind:bathroom=room.extras.bathroom
            v-bind:image=room.image
            v-bind:id = room.id
        ></CardComponent>
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
import CardComponent from "@/components/subComponents/CardComponent";

export default {
  name: "RoomComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      perPage: 1,
      currentPage: 1,
      room: [
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
    }
  },
  computed: {
    rows() {
      return this.room.length
    },
    rooms() {
      return this.room.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },
  },
}
</script>

<style scoped>

</style>