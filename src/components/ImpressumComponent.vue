<template>
  <contact-component></contact-component>
</template>

<script>
import ContactComponent from "@/components/subComponents/ContactComponent";

export default {
  name: "ImpressumComponent",
  components: {ContactComponent},
  data() {
    return {
      title: 'Impressum',
    }
  }
}
</script>

<style scoped>

</style>
