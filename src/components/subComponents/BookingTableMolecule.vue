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
      fields: [     //müssen noch angepasst werden - schauen was von datenbank zurückkommt
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