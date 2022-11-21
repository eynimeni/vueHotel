<template>
  <b-container fluid class="p-4 bg-light mt-2">
    <h2>{{title}}</h2>
  <b-row>
      <b-img fluid :src=image :alt=imageAlt></b-img>
  </b-row>
  <b-row class="mt-4">
    <p>{{text}}</p>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: "HeadingOrganism",
  props: ['title', 'text', 'image', 'imageAlt'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>