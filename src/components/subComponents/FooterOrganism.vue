<template>

    <div id="footer" class="bg-light mt-3">
      <router-link :to="{path: '/impressum'}">Impressum</router-link>
    </div>

</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
#footer {
  bottom: 0;
  height: 35px;
  width: 100%;
}
</style>