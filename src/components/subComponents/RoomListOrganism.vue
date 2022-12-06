<template>
  <b-container>
    <div>
      <div v-for="room in rooms" :key="room.id">
        <RoomDisplayMolecule
            v-bind:room=room
            v-bind:image=getImage(room.id)
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
      perPage: 1,
      currentPage: 1,
      images: [
        "/assets/images/rooms/1.jpg", "/assets/images/rooms/2.jpg"
      ]
    }
  },
  created() {
    this.roomStore.readState()
  },
  methods: {
    getImage(id) {
      return "/assets/images/rooms/" + id + ".jpg"
    }
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
    },
  },
}
</script>

<style scoped>

</style>