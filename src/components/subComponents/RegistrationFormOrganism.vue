<template>
  <div>
    <b-card bg-variant="light">
      <div>
        <h6>
          Erstellen Sie sich ein Profil, um Ihre Buchungen besser verwalten zu können.
        </h6>
        <p>Ihre Daten werden in Ihrem Profil gespeichert, um zukünftig schneller Buchungen abwickeln zu können.</p>
        <p>In Ihrem Profil können Sie vergange Buchungen einsehen.</p>
      </div>
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
      <b-button @click="register">Registrieren</b-button>
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
      registrationData: {
        username: null,
        password: null,
        passwordrepeat: null
      }
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
    }
  }
}
</script>

<style scoped>

</style>