<template>
  <Datepicker v-model="date" :enableTimePicker="false" placeholder="Zeitraum wählen"
              autoApply :closeOnAutoApply="false" range dayPicker ></Datepicker>
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
  }
}
</script>

<style scoped>

</style>