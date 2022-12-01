<template>
  <Datepicker v-model="birthdate" :enableTimePicker="false" placeholder="Datum wählen" format="dd.MM.yyyy"
              autoApply :closeOnAutoApply="false" ></Datepicker>
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
  }
}
</script>

<style scoped>

</style>