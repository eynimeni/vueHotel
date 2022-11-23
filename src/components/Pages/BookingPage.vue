/*
Stand der Dinge:
Ich habe hier (BookingPage) alles auskommentiert, das Fehler wirft und gerade nicht notwendig ist.

die roomid und das datum werden übergeben
der call funktioniert

todo:
Daten von RoomStorage importieren
Weiter geben von ID Room an BookingDateDisplay gewährleisten
Wie geht die Variable in die URL?
Auslesen von Datum aus Datepicker
1) Darstellen
2) in URL übergeben
Fallunterscheidung: Raum ist frei oder nicht: Evt. in html elementen auslagern mit klassen und styling.
So ähnlich wie im RoomDisplayCard:
<b-col v-if="aircondition">
<b-icon-wind ></b-icon-wind>
<p>AC</p>
</b-col>

*/

<template>
  <heading-organism v-bind:title="title"></heading-organism>

  <b-container>
    <!--ProgressBarComponent></ProgressBarComponent-->
    <hr>
    <b-form-group class="m-2">
      <b-col class="mb-3">
        <b-form-select v-model="selected" :options="this.options"></b-form-select>
        <!--options css style missing in chrome-->
      </b-col>
      <b-col class="mb-3">
        <datepicker-component v-model="this.date"></datepicker-component>
      </b-col>
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
      title: "Buchungen",
      selected : null,
      options: [
        {value: null, text: 'Zimmertyp wählen'},
        {value: '1', text: 'junior suite'},
        {value: '2', text: 'king suite'},
      ],
      date: '',

    }
  },
  computed: {
    /*
    diese Create Funktion wurde statt selected aufgerufen:
    <b-form-select v-model="this.create" :options="this.options"></b-form-select>
    wenn das so ist, krieg ich das value nicht raus.
    todo schauen wir uns das noch mit den echten daten an!

    create() {
      let selection = null
      const route = useRoute();
      for (let option in this.options) {
        if (route.query.id === option) {
          selection = route.query.id
        }
      }
      console.log(selection)
      return selection
    },

     */
    getRoomId() {
      return this.selected
    }

  }
}
</script>

<style scoped>
</style>