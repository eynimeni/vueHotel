<template>
  <heading-organism v-bind:title="title"></heading-organism>

  <div>
      <b-container fluid>
        <b-form>
          <b-form-group class="m-2 mt-5"
                        id="input-group-1"
                        label="Email-Adresse "
                        label-for="input-1"
                        description="Login mit E-Mail-Adresse.">
            <b-form-input class="m-2"
                          id="input-1"
                          v-model.trim="form.clientId"
                          type="email"
                          name="email"
                          placeholder="Email eingeben"
                          required
            ></b-form-input>
          </b-form-group>
          <b-form-group class="m-2"
                        id="input-group-2"
                        label="Passwort:"
                        label-for="input-2"
                        description="Passwort für Ihren Account eingeben.">
            <b-form-input class="m-2"
                          id="input-2"
                          v-model.trim="form.secret"
                          type="password"
                          placeholder="Passwort eingeben"
                          required
            ></b-form-input>
          </b-form-group>

          <div v-if="noAccount" class="b-toast-danger">Für diese Zugangsdaten konnte leider kein Account gefunden werden.</div>


      <b-col lg="4" class="m-4">
        <b-button class="m-3" size="md" variant="secondary" href="/">Abbrechen</b-button>
        <b-button class="m-3" type="submit" size="lg" variant="primary"
                  @click="login">
<!--          :disabled="v$.$invalid-->
          Einloggen
        </b-button>
      </b-col>
        </b-form>
      </b-container>
  </div>
</template>

<script>    //Error Handling fehlt noch!

import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import {useLoginStore} from "@/stores/LoginStore";

export default {
  name: "LoginComponent",
  components: {HeadingOrganism},
  data() {
    return {
      loginStore: useLoginStore(),
      title: 'Login',
      form: {
        clientId: '',
        secret: '',
      },
      preventSubmit: true,
      noAccount: false,
    }
  },
  validations() {
    return {
      form: {
        clientId: {
          required,
          email},
        secret: {
          required,
          minLength: minLength(8)},
      }
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  methods: {
    login() {
      this.loginStore.login(this.form.clientId, this.form.secret)
      this.noAccount = true;
    }
  }
}
</script>

<style scoped>

</style>