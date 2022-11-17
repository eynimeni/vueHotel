<template>
  <div class="footer">
    <b-navbar-nav>
      <b-nav-item href="/impressum">Impressum</b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
.footer {
  bottom: 0;
  right: 15px;
  position: fixed;
  height: auto;
}
</style>