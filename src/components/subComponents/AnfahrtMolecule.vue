<template>
  <b-card bg-variant="light" header="Anfahrt" class="text-center m-4">
    <b-card-text>
      <h6>{{ title }}</h6>
      <p>{{ infoAuto }}</p>
      <p>{{infoWanderer}}</p>
      <p>{{infoOffi}}</p> <a href="https://www.oebb.at/">www.oebb.at</a>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "AnfahrtMolecule",
  data () {
    return {
      title : 'So kommen Sie am Besten zu unserem Hotel',
      infoAuto : 'Mit dem Auto: Über die B1 und dann am Graben rechts. Vergessen Sie die Schneeketten nicht.',
      infoWanderer: 'Sie erreichen uns auch zu Fuß: Wanderweg Grün, W4. Unbedingt mit Schneeschuhen!',
      infoOffi: 'Zugverbindungen finden Sie unter:'
    }
  }
}
</script>

<style scoped>

</style>