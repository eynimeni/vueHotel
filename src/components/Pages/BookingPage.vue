<template>
  <heading-organism v-bind:title="title"></heading-organism>

  <b-container>
    <!--ProgressBarComponent></ProgressBarComponent-->
    <hr>
    <b-form-group class="m-2">
      <b-col class="mb-3">
        <b-form-select v-model="selected" :options="this.options">
          <b-form-select-option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.roomsName }}</b-form-select-option>
        </b-form-select>
      </b-col>
      <b-col class="mb-3">
        <datepicker-component v-model="this.date"></datepicker-component>
      </b-col>
      <div>{{ selected }} gewählt</div>
      <hr>
    </b-form-group>
    <BookingDateDisplay
        v-bind:date="this.date"
        v-bind:roomId="selected">
    </BookingDateDisplay>
    <hr>
    <!--b-col>
      <form-component v-model="this.create"></form-component>
    </b-col>

    <b-row>
      <b-col lg="4" class="pb-2">
        <b-button variant="success" size="lg" href="/confirmation">Weiter</b-button>
      </b-col>
      <b-col lg="4" class="pb-2">
        <b-button href="/">Abbrechen</b-button>
      </b-col>
    </b-row-->

    <b-button href="/confirmation">Weiter</b-button>
  </b-container>
</template>

<script>
//import {useRoute} from "vue-router/dist/vue-router";
import DatepickerComponent from "@/components/subComponents/DatepickerAtom";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
//import FormComponent from "@/components/subComponents/FormComponent";
//import ProgressBarComponent from "@/components/subComponents/ProgressBarComponent";
import BookingDateDisplay from "@/components/subComponents/BookingDateDisplay";
import {useRoomStore} from "@/stores/RoomStore";
import {useRoute} from "vue-router";

export default {
  name: "BookingComponent",

  components: {
    BookingDateDisplay,
    DatepickerComponent,
    HeadingOrganism,
    //FormComponent,
    //ProgressBarComponent
  },
  data() {
    return {
      roomStore: useRoomStore(),
      title: "Buchungen",
      options: [
        {value: '', text: 'Zimmertyp wählen'},
      ],
      date: '',
      selected: ''
    }
  }, created() {
    console.log("created")
    this.roomStore.readState()
  },
  methods: {
    getRoomId() {
      const route = useRoute();
      for (let option in this.rooms) {
        if (route.query.id === option) {
          this.selected = route.query.id
        }
      }
    }
  },
  computed: {
    create() {
      return this.getRoomId();
    },
    rooms() {
      console.log(this.roomStore.getRooms)
      return this.roomStore.getRooms
    },
  }
}

</script>

<style scoped>
</style>

