<template>
  <header-component></header-component>
  <p>login</p>
  <div>
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">

      <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
      ></b-form-input>
    </b-form-group>

  </div>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
export default {
  name: "LoginComponent",
  components: {HeaderComponent},
  data() {
    return {
      form: {
        email: '',
      }
    }},}
</script>

<style scoped>

</style>