<template>
  <header-component></header-component>
  <heading-component title="Buchung"></heading-component>
  <h6>Zimmer{{this.create}}</h6>
  <b-container>
    <b-form-group label="Zeitraum" label-for="timeRange">
      <datepicker-component id="timeRange"></datepicker-component>
    </b-form-group>
  </b-container>

</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import {useRoute} from "vue-router/dist/vue-router";
import HeadingComponent from "@/components/subComponents/HeadingComponent";
import DatepickerComponent from "@/components/subComponents/DatepickerComponent";

export default {
  name: "BookingComponent",
  components: {DatepickerComponent, HeadingComponent, HeaderComponent},
  computed: {
    create() {
      const route = useRoute();
      return route.query
    }
  }

}
</script>

<style scoped>

</style>