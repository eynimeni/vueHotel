<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/rooms">Zimmerübersicht</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/booking">Buchung vornehmen</router-link>
    <router-link to="/profile">Profil</router-link>
    <router-link to="/confirmation">Buchungsbestätigung</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>

export default {
  name: "HeaderComponent",

}
</script>

<style scoped>

</style>