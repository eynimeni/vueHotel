<template>
  <div>
    <b-card
        :img-src=image
        img-alt="Image"
        img-top
        class="m-2"
        img-height="200"
    >
        <b-card-text>
          <h3>{{roomName}}</h3>
          <p>{{beds}} - Bett Zimmer</p>
          <p>{{pricePerNight}}€/Nacht</p>
        </b-card-text>
      <b-list-group class="mb-3">
        <b-list-group-item>
          <b-container>
            <b-row>
              <b-col v-if="aircondition">
                <b-icon-wind ></b-icon-wind>
                <p>AC</p>
              </b-col>
              <b-col v-if="television">
                <b-icon-tv ></b-icon-tv>
                <p>TV</p>
              </b-col>
              <b-col v-if="bathroom">
                <b-icon-door-closed ></b-icon-door-closed>
                <p>Bad</p>
              </b-col>
              <b-col v-if="minibar">
                <b-icon-cup-straw ></b-icon-cup-straw>
                <p>Minibar</p>
              </b-col>
            </b-row>
          </b-container>
        </b-list-group-item>
      </b-list-group>
      <router-link :to="{path: '/booking/', query: {room: id}}">
        <b-button variant="primary">Verfügbarkeit prüfen</b-button>
      </router-link>

    </b-card>

  </div>
</template>


<script>
export default {
  name: "CardComponent",
  props: ['id', 'roomNumber', 'roomName', 'beds', 'pricePerNight', 'bathroom', 'minibar', 'television', 'aircondition', 'image'],
}

</script>

<style scoped>

</style>