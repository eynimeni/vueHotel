<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-img src="/assets/icons/Favicons/favicon-48x48.png" fluid alt="Responsive image"></b-img>
        </b-list-group-item>

        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/about">Über Uns</b-nav-item>
          <b-nav-item href="/rooms">Zimmer</b-nav-item>
          <b-nav-item href="/booking">Buchung vornehmen</b-nav-item>
          <b-nav-item href="/login">Einloggen</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
export default {
  name: "NavbarOrganism"
}
</script>

<style scoped>

</style>