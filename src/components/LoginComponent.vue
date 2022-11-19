<template>
  <header-component></header-component>
  <h2>Login</h2>
  <div>
    <b-container fluid>
      <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="Wir geben Ihre Daten niemals an Dritte weiter.">

        <b-form-input
            id="input-1"
            v-model="form.clientId"
            type="email"
            placeholder="Email eingeben"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="input-group-2"
          v-model="form.secret"
          label="Passwort:"
          label-for="input-2"
          description="Bitte wählen Sie ein sicheres Passwort.">
        <b-form-input
            id="input-2"
            type="password"
            placeholder="Passwort eingeben"
            required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col lg="4" class="pb-2">
          <b-button disabled href="/">Abbrechen</b-button>
        </b-col>
        <b-col lg="4" class="pb-2">
          <b-button variant="success">Einloggen</b-button>
        </b-col>
      </b-row>

    </b-container>
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
        clientId: '',
        secret: '',
      }
    }},}
</script>

<style scoped>

</style>