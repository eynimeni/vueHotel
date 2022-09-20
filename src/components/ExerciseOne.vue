<template>
  <div>
    <h1>Hello {{username}}</h1>
    <p>asdf</p>
    <p>asdf</p>
    <input type="text" v-model="username">
  </div>
</template>

<script>
export default {
  name: "ExerciseOne",

  data() {
    return {
      username: "Musterfrau"
    }
  }
}

</script>

<style scoped>

</style>