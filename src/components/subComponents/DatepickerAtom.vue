<template>
  <Datepicker v-model="date" :enableTimePicker="false" placeholder="Zeitraum wählen" format="dd.MM.yyyy"
              autoApply :closeOnAutoApply="false" range :min-date="currentDate"></Datepicker>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
  name: "DatepickerComponent",
  components: { Datepicker },
    data() {
      return {
        date: null,
      };

  },
  computed: {
    currentDate() {
      const today = new Date()
      return today.toISOString().split("T")[0]
    }
  }
}
</script>

<style scoped>

</style>