<template>
  <header-component></header-component>
  <heading-component v-bind:title="title"></heading-component>
  <div>

    <b-container fluid>
      <b-form-group class="m-2"
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="Wir geben Ihre Daten niemals an Dritte weiter.">
        <b-form-input class="m-2"
            id="input-1"
            v-model="form.clientId"
            type="email"
            placeholder="Email eingeben"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="m-2"
          id="input-group-2"
          v-model="form.secret"
          label="Passwort:"
          label-for="input-2"
          description="Bitte wählen Sie ein sicheres Passwort.">
        <b-form-input class="m-2"
            id="input-2"
            type="password"
            placeholder="Passwort eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col lg="4" class="pb-2">
          <b-button size="lg" variant="success">Einloggen</b-button>
        </b-col>
        <b-col lg="4" class="pb-2">
          <b-button href="/">Abbrechen</b-button>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import HeaderComponent from "@/components/subComponents/HeaderComponent";
import HeadingComponent from "@/components/subComponents/HeadingComponent";
export default {
  name: "LoginComponent",
  components: {HeaderComponent, HeadingComponent},
  data() {
    return {
      title:"Login",
      form: {
        clientId: '',
        secret: '',
      }
    }},}
</script>

<style scoped>

</style>