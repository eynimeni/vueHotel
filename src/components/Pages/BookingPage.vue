<template>
  <heading-organism v-bind:title="title"></heading-organism>

  <b-container fluid>
    <ProgressBarComponent v-bind:progress="progress"></ProgressBarComponent>
    <hr>
    <div v-if="roomBookingDisplay">
      <b-form-group class="m-2">
        <b-col class="mb-3">
          <b-form-select v-model="selected" :options="this.options" @input="roomSelection">
            <b-form-select-option v-for="room in rooms" :key="room.id" :value="room.id - 1" >{{ room.roomsName }}</b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col class="mb-3">
          <datepicker-component v-model="this.date"></datepicker-component>
<!--todo validation date not in past-->
          <div class="mt-3" v-if="this.roomId != null && this.roomId >= 0">
            <room-id-display :room-id="this.roomId"></room-id-display>
          </div>
        </b-col>
        <hr>
      </b-form-group>
      <BookingDateDisplay
          v-bind:date="this.date"
          v-bind:roomId="selected">
      </BookingDateDisplay>
      <b-button @click="roomsSelectionConfirmaton" v-if="getRoomAvailability" class="btn-success m-3" >Auswählen</b-button>
    </div>

    <div v-if="userDataDisplay">
      <hr>
      <b-col>
        <form-component ref="form"></form-component>
      </b-col>

      <b-row class="mt-3">
        <b-col class="pb-2">
          <b-button href="/">Abbrechen</b-button>
        </b-col>
        <b-col class="pb-2">
<!--          achtung! erst weiterklicken können wenn vollständig ausgefüllt-->
          <b-button variant="success" :disabled="!checkForm" @click="userDataConfirmation">Weiter</b-button>
        </b-col>
      </b-row>
    </div>

    <div v-if="bookingOverviewDisplay">
      <div class="m-3">
        <booking-overview></booking-overview>
        <b-row>
          <b-col><b-button @click="showRoomAndDatePicker" class="btn-warning" >Zimmer ändern</b-button></b-col>
          <b-col><b-button @click="showRoomAndDatePicker" class="btn-warning" >Zeitraum ändern</b-button></b-col>
          <b-col><b-button @click="showForm" class="btn-warning" >Daten ändern</b-button></b-col>
        </b-row>
      </div>

      <router-link v-if="bookingOverviewDisplay" :to="{path: '/confirmation'}">
        <b-button @click="sendBooking" variant="success">Buchung abschicken</b-button>
      </router-link>
    </div>
  </b-container>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import DatepickerComponent from "@/components/subComponents/DatepickerAtom";
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import FormComponent from "@/components/subComponents/PersonalDataFormOrganism";
import ProgressBarComponent from "@/components/subComponents/ProgressBarAtom";
import BookingDateDisplay from "@/components/subComponents/BookingDateDisplay";
import {useRoomStore} from "@/stores/RoomStore";
import {useRoomsAvailability} from "@/stores/useRoomAvailabiltyStore";
import RoomIdDisplay from "@/components/subComponents/RoomIdDisplay";
import BookingOverview from "@/components/subComponents/BookingOverview";
import {useBookingStore} from "@/stores/BookingStore";
import {useLoginStore} from "@/stores/LoginStore";

export default {
  name: "BookingComponent",

  components: {
    RoomIdDisplay,
    BookingDateDisplay,
    DatepickerComponent,
    HeadingOrganism,
    FormComponent,
    ProgressBarComponent,
    BookingOverview
  },
  props: ["personaldata"],

  data() {
    return {
      roomStore: useRoomStore(),
      bookingStore: useBookingStore(),
      loginStore: useLoginStore(),
      title: "Buchungen",
      options: [
        {value: '', text: 'Zimmertyp wählen'},
      ],
      date: '',
      selected: '',
      progress: 20,
      roomBookingDisplay: true,
      userDataDisplay: false,
      bookingOverviewDisplay: false,
      roomIsSelected: false,
      roomAvailabilityStore: useRoomsAvailability(),
      roomId: null,
    }
  }, created() {
    console.log("created")
    this.roomStore.readState()
  },
  methods: {
    generateRoomsIdForSelect() {
      const route = useRoute();
      for (let option in this.rooms) {
        if (route.query.id === option) {
          this.selected = route.query.id
        }
      }
    },
    roomsSelectionConfirmaton() {
      this.progress = 40
      this.roomBookingDisplay = false
      this.userDataDisplay = true
    },
    userDataConfirmation() {
      this.progress = 60
      this.userDataDisplay = false
      this.bookingOverviewDisplay = true
      this.$refs.form.saveData()
    },
    roomSelection(value) {
      console.log("room selected")
      this.roomId = value
      this.roomIsSelected = true
    },
    showRoomAndDatePicker() {
      this.roomBookingDisplay = true      //Form sollte wieder befüllt werden
      this.bookingOverviewDisplay = false
    },
    showForm() {
      this.userDataDisplay = true
      this.bookingOverviewDisplay = false
    },
    sendBooking() {
      console.log("bookingStore request")
      this.bookingStore.requestBookings(this.token)
      console.log("token:" + this.token)
    }

  }
  ,
  computed: {
    create() {
      return this.generateRoomsIdForSelect();
    },
    rooms() {
      console.log(this.roomStore.getRooms)
      return this.roomStore.getRooms
    },
    getRoomAvailability() {
      return this.roomAvailabilityStore.available["available"]
    },
    token() {
      return this.loginStore.getToken
    },
    checkForm() {       //hier muss noch boolscher wert aus personaldata component geholt werden
        return true
      }
    }
}

</script>

<style scoped>
</style>

