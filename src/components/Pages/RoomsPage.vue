<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <RoomListOrganism></RoomListOrganism>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import RoomListOrganism from "@/components/subComponents/RoomListOrganism";

export default {
  name: "RoomComponent",
  components: {
    RoomListOrganism,
    HeadingOrganism,
  },
  data() {
    return {
      title: 'Zimmer',
    }
  }
}
</script>
<style scoped>

</style>