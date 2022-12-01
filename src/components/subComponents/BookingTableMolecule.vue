<template>
  <div>
    <b-table hover :items="bookings" :fields="fields"></b-table>
  </div>

</template>

<script>
export default {
  name: "BookingTableMolecule",
  props: [ 'bookings' ],
  data() {
    return {
      fields: [
          { key: 'roomId', label:'Zimmer' },
          { key: 'startDate', label:'Von' },
          { key: 'endDate', label:'Bis' }
      ]
    }
  },

}
</script>

<style scoped>

</style>