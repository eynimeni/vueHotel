<template>
  <div>
      <b-progress :value="value" :max="max" show-progress animated></b-progress>
  </div>

</template>

<script>
export default {
  name: "ProgressBarComponent",
  data() {
    return {
      value: 45, //den value der subcomponent immer auf X setzen bei Button Click? in der Buchungscomponent?
      //kann man auf den Value einer eingebundenen Subcomponent zugreifen?
      max: 100
    }
  }
}
</script>

<style scoped>

</style>