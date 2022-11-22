<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
          label-cols-lg="3"
          label="Persönliche Daten"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
      >
        <b-form-group
            label="Anrede:"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
              class="pt-2"
              :options="['Herr', 'Frau', 'Divers']"
              :aria-describedby="ariaDescribedby"
              v-model="personalData.gender"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group
            label="Vorname:"
            label-for="firstname"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="firstname" :type="text" v-model="personalData.firstname"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Nachname:"
            label-for="surname"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="name" :type="text" v-model="personalData.surname"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Email:"
            label-for="email"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email" :type="email" v-model="personalData.email"></b-form-input>
        </b-form-group>

        <b-form-group
            label="Email wiederholen:"
            label-for="email-repeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email repeat" :type="email" v-model="personalData.emailrepeat"></b-form-input>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>

  <b-button v-on:click="submitPersonalData">Button</b-button>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      personalData:{
        gender: null,
        firstname: null,
        surname: null,
        email: null,
        emailrepeat: null
      }
    };
  },
  methods: {
    submitPersonalData() {
      console.log(this.personalData)
    }
  }
}
</script>

<style scoped>

</style>