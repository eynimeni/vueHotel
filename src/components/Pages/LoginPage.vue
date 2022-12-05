<template>
  <heading-organism v-bind:title="title"></heading-organism>

  <div>
      <b-container fluid>
        <b-form>
          <b-form-group class="m-2"
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                        description="Wir geben Ihre Daten niemals an Dritte weiter.">
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
                        description="Passwort vergessen?.">
            <b-form-input class="m-2"
                          id="input-2"
                          v-model.trim="form.secret"
                          type="password"
                          placeholder="Passwort eingeben"
                          required
            ></b-form-input>
          </b-form-group>
    <b-row>
      <b-col lg="4" class="pb-2">
        <b-button type="submit" size="lg" variant="primary" :disabled="v$.$invalid"
                  @click="loginStore.login(this.form.clientId, this.form.secret)">
          Einloggen
        </b-button>
      </b-col>
      <b-col lg="4" class="pb-2">
        <b-button href="/">Abbrechen</b-button>
      </b-col>
    </b-row>
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
  }
}
</script>

<style scoped>

</style>