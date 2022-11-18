<template>
  <header-component></header-component>
  <b-container>
    <div>
      <div v-for="room in rooms" :key="room.id">
        <p>Zimmer: {{room.id}}</p>
        <CardComponent></CardComponent>
      </div>
    </div>


    <b-pagination
        pills
        align="center"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
    ></b-pagination>
  </b-container>

  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import FooterComponent from "@/components/subComponents/FooterComponent";
import CardComponent from "@/components/subComponents/CardComponent";

export default {
  name: "RoomComponent",
  components: {
    CardComponent,
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      perPage: 1,
      currentPage: 1,
      room: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ]
    }
  },
  computed: {
    rows() {
      return this.room.length
    },
    rooms () {
      return this.room.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },
  },
}
</script>

<style scoped>

</style>