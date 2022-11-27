<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
          label-cols-lg="3"
          label="Registrieren"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
        <h6>
          Erstellen Sie sich ein Profil, um Ihre Buchungen besser verwalten zu können.
        </h6>
        <p>Ihre Daten werden in Ihrem Profil gespeichert, um zukünftig schneller Buchungen abwickeln zu können.
          <br>In Ihrem Profil können Sie vergange Buchungen einsehen.</p>
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
          <p v-if="registrationData.password !== registrationData.passwordrepeat" class="text-danger">Passworteingaben
            stimmen nicht überein</p>
        </b-form-group>
      </b-form-group>
      <b-button :disabled="!isDisabled" @click="register">Registrieren</b-button>
      <p class="text-success">{{ successMessage }}</p>
    </b-card>
  </div>
</template>

<script>
import {BButton, BCard, BFormGroup, BFormInput} from "bootstrap-vue-3";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "RegistrationFormOrganism",
  components: {BButton, BCard, BFormInput, BFormGroup},
  props: ["personaldata"],
  data() {
    return {
      userStore: useUserStore(),
      successMessage: '',
      registrationData: {
        username: '',
        password: '',
        passwordrepeat: ''
      }
    }
  },
  computed: {
    isDisabled() {
      return !!(this.registrationData.username,
          this.registrationData.password,
      this.personaldata,
      this.registrationData.passwordrepeat &&
      this.registrationData.password ===
      this.registrationData.passwordrepeat);
    }
  },
  methods: { //Error Handling: Passwörter stimmen nicht überein
    register() {
      let newUser = {
        firstname: this.personaldata.firstname,
        lastname: this.personaldata.lastname,
        email: this.personaldata.email,
        username: this.registrationData.username,
        password: this.registrationData.password
      }
      this.userStore.postUsers(newUser)
      this.successMessage = "Vielen Dank für Ihre Registrierung! Bitte überprüfen Sie Ihren Posteingang."
    }
  }
}
</script>

<style scoped>

</style>