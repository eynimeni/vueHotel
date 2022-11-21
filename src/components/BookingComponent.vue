<template>
  <b-container>
    <b-form-group class="m-2">
      <b-col class="mb-3">
        <b-form-select v-model="this.create" :options="this.options"></b-form-select> <!--options css style missing in chrome-->
      </b-col>
      <b-col class="mb-3">
        <datepicker-component v-model="this.date"></datepicker-component>
      </b-col>
    </b-form-group>
    <div>
      <h6>Ergebnisse</h6>
      <p>von {{this.date[0]}} bis {{this.date[1]}} </p>
      <p>wir konnten im gewählten Zeitraum keine buchbaren Zimmer finden </p>
    </div>

    <b-row>
      <b-col lg="4" class="pb-2">
        <b-button variant="success" size="lg" href="/confirmation">Weiter</b-button>
      </b-col>
      <b-col lg="4" class="pb-2">
        <b-button href="/">Abbrechen</b-button>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import {useRoute} from "vue-router/dist/vue-router";
import DatepickerComponent from "@/components/subComponents/DatepickerComponent";

export default {
  name: "BookingComponent",
  components: {DatepickerComponent, HeadingComponent, HeaderComponent},
  data() {
    return {
      title: 'Buchungen',
      options: [
        {value: null, text: 'Zimmertyp wählen'},
        {value: '1', text: 'junior suite'},
        {value: '2', text: 'king suite'},
      ],
      date: '',
    }
  },
  computed: {
    create() {
      let selected = null
      const route = useRoute();
      for (let option in this.options) {
        if (route.query.id === option) {
          selected = route.query.id
        }
      }
      return selected
    },
  }
}
</script>

<style scoped>

</style>