<template>
  <header-component></header-component>
  <div>room</div>
  <carousel-images></carousel-images>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import CarouselImages from "@/components/subComponents/CarouselImages";

export default {
  name: "RoomComponent",
  components: {
    CarouselImages,
    HeaderComponent}
}
</script>

<style scoped>

</style>