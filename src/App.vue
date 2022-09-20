<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
  <ExerciseOne></ExerciseOne>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ExerciseOne from "@/components/ExerciseOne";

export default {
  name: 'App',
  components: {
    //HelloWorld
    ExerciseOne
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
