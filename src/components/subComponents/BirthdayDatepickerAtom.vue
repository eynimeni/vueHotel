<template>
  <Datepicker v-model="birthdate" :enableTimePicker="false" placeholder="Datum wählen" format="dd.MM.yyyy"
              autoApply :closeOnAutoApply="false" :min-date="getDate14YearsAgo"></Datepicker>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: "BirthdayDatepickerAtom",
  components: { Datepicker },
    data() {
      return {
        birthdate: null,
      };
  },
  computed: {
    getDate14YearsAgo() {
      let fourteenYearsAgo = new Date()
      fourteenYearsAgo.setTime(fourteenYearsAgo.valueOf()-14*365 * 24 * 60 * 60 * 1000)
      return fourteenYearsAgo.toISOString().split("T")[0]
    }



  }
}
</script>

<style scoped>

</style>