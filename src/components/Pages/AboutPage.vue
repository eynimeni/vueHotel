<template>

  <heading-organism v-bind:title="title" v-bind:text="text" v-bind:image="image" v-bind:image-alt="imageAlt"></heading-organism>
  <contact-component></contact-component>
  <anfahrt-molecule></anfahrt-molecule>
</template>

<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import ContactComponent from "@/components/subComponents/ContactDataOrganism";
import AnfahrtMolecule from "@/components/subComponents/AnfahrtMolecule";

export default {
  name: "AboutComponent",
  components: {AnfahrtMolecule, ContactComponent, HeadingOrganism },
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
