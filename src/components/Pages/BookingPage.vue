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
      <div class="mt-3 mb-3">
        <booking-overview></booking-overview>
        <b-row class="mt-3">
          <b-col><b-button @click="showRoomAndDatePicker" class="btn-dark" >Zeitraum oder Zimmer ändern</b-button></b-col>
          <b-col><b-button @click="showForm" class="btn-dark" >Daten ändern</b-button></b-col>
        </b-row>
      </div>

      <router-link v-if="bookingOverviewDisplay" :to="{path: '/confirmation'}">
        <b-button @click="sendBooking" variant="success">Buchung abschicken</b-button>
      </router-link>
    </div>
  </b-container>
</template>

<script>
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
  props: {
    id: Number
  },

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
      progress: 1,
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
    if( this.id ){
      this.selected = this.id
      this.roomSelection(this.id)
    }
  },
  methods:
      {
    roomsSelectionConfirmaton() {
      this.progress = 2
      this.roomBookingDisplay = false
      this.userDataDisplay = true
      setTimeout(this.fillOutForm, 100)
    },
    userDataConfirmation() {
      this.progress = 3
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
      this.progress = 1
      this.roomBookingDisplay = true
      this.bookingOverviewDisplay = false
    },
    showForm() {
      this.progress = 2
      this.userDataDisplay = true
      this.bookingOverviewDisplay = false
      setTimeout(this.fillOutForm, 100)
    },
    sendBooking() {
      console.log("bookingStore request")
      this.bookingStore.requestBookings(this.token)
      console.log("token:" + this.token)
    },
    fillOutForm() {
      this.$refs.form.setData()
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

