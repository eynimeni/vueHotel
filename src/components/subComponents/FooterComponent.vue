<template>
  <b-container class="footer">
    <b-navbar-nav>
      <b-nav-item href="/impressum">Impressum</b-nav-item>
    </b-navbar-nav>
  </b-container>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
.footer {
  bottom: 0;
  position: sticky;
  height: auto;
  background: lightgray;
}
</style>