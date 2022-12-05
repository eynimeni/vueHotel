<template>
  <div>
      <b-progress :value="this.progress" :max="max" show-progress animated variant="success"></b-progress>
  </div>
</template>

<script>
export default {
  name: "ProgressBarComponent",
  props: ['progress'],
  data() {
    return {
      max: 100
    }
  },
}
</script>

<style scoped>

</style>