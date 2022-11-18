<template>
  <div class="room" v-for="room in rooms" v-bind:key="room">
    <b-card
        img-src="/assets/images/rooms/1.jpeg"
        img-alt="Image"
        img-top
        class="m-4"
    >
      <b-card-text>
        <p>Zimmer: {{room.roomName}}</p>
        <p>{{room.pricePerNight}}€</p>
        <b-container>
          <b-row>
            <b-col v-if="room.extras.aircondition">
              <b-icon-wind ></b-icon-wind>
              <p>Klimaanlage</p>
            </b-col>
            <b-col v-if="room.extras.television">
              <b-icon-tv ></b-icon-tv>
              <p>TV</p>
            </b-col>
            <b-col v-if="room.extras.bathRoom">
              <b-icon-door-closed ></b-icon-door-closed>
              <p>Badezimmer</p>
            </b-col>
            <b-col v-if="room.extras.minibar">
              <b-icon-cup-straw ></b-icon-cup-straw>
              <p>Minibar</p>
            </b-col>
          </b-row>
        </b-container>
      </b-card-text>

      <b-button href="#" variant="primary">Verfügbarkeit prüfen</b-button>
    </b-card>

  </div>
</template>


<script>
export default {
  name: "CardComponent",
  data() {
    return {
      rooms: [
        {
          id: 1, roomNumber: 11, roomName: 'Junior Suite', beds: 3, pricePerNight: 120,
        extras: {
            bathRoom: true, minibar: true, television: true, aircondition: true
        }},

      ]
    }
  }
}

</script>

<style scoped>

</style>