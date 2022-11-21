<template>

  <heading-component v-bind:title="title" v-bind:text="text" v-bind:image="image" v-bind:image-alt="imageAlt"></heading-component>
  <contact-component></contact-component>

</template>

<script>
import HeadingComponent from "@/components/subComponents/HeadingOrganism";
import ContactComponent from "@/components/subComponents/ContactDataOrganism";

export default {
  name: "AboutComponent",
  components: {ContactComponent, HeadingComponent },
  data() {
    return {
      title: 'Über Uns',
      image: '/assets/images/roberto-nickson-smJ6XsYy8gA-unsplash.jpg',
      imageAlt: 'familyimage',
      text: 'Familienbetrieb in dritter Generation.'
    }
  }
}
</script>

<style scoped>

</style>
