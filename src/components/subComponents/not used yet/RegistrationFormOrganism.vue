<template>
  <div>
    <h6>
      Erstellen Sie sich ein Profil, um Ihre Buchungen besser verwalten zu können.
    </h6>
    <p>Ihre Daten werden in Ihrem Profil gespeichert, um zukünftig schneller Buchungen abwickeln zu können.</p>
    <p>In Ihrem Profil können Sie vergange Buchungen einsehen.</p>
  </div>
  <div>
    <b-card bg-variant="light">
      <b-form-group
          label-cols-lg="3"
          label="Registrieren"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
        <b-form-group
            label="Benutzername"
            label-for="username"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="username" type="text" v-model="registrationData.username"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Passwort:"
            label-for="userpassword"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="password" type="password" v-model="registrationData.password"></b-form-input>
        </b-form-group>
        <b-form-group
            label="Passwort wiederholen:"
            label-for="userpasswordrepeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="passwordrepeat" type="password" v-model="registrationData.passwordrepeat"></b-form-input>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>

  <b-button v-on:click="register">Registrierung Daten console.log</b-button>
</template>

<script>
export default {
  name: "RegistrationFormOrganism",
  data() {
    return {
      registrationData: {
        username: null,
        password: null,
        passwordrepeat: null
      }
    }
  },
  methods: {
    register(){
      console.log(this.registrationData.username, this.registrationData.password)
    }
  }
}
</script>

<style scoped>

</style>