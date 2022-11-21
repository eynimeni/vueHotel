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
  position: fixed;
  bottom: 0;
  height: 40px;
  background: lightgray;
}
</style>