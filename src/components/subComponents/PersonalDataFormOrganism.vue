<template>
  <div>
    <b-form bg-variant="light">
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
          <b-form-input id="firstname" type="text" v-model="personalData.firstname" required></b-form-input>
        </b-form-group>

        <b-form-group
            label="Nachname:"
            label-for="lastname"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="lastname" type="text" v-model="personalData.lastname" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Geburtstag:"
            label-for="birthdate"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <BirthdayDatepickerAtom v-model="personalData.birthdate" required></BirthdayDatepickerAtom>
        </b-form-group>
        <b-form-group
            label="Email:"
            label-for="email"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email" type="email" name="email" v-model.trim="personalData.email" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email wiederholen:"
            label-for="email-repeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email repeat" type="email" name="email" v-model.trim="personalData.emailrepeat" required></b-form-input>
          <p v-if="personalData.email !== personalData.emailrepeat" class="text-danger">Email Adressen stimmen nicht
            überein</p>
        </b-form-group>
        <b-form-group
            label="Frühstücksoption"
            label-for="breakfast"
            label-cols-sm="3"
            label-align-sm="right"
            required
        >
          <b-form-checkbox
              id="breakfast"
              v-model="personalData.breakfast"
              name="breakfast"
          >
            Hervorragendes Frühstück: 15€ / Person
          </b-form-checkbox>
          <p v-if=personalData.breakfast class="text-success">Frühstück wird in Ihrer Buchungsanfrage inkludiert</p>
          <p v-else>Ihre Buchungsanfrage enthält kein Frühstück</p>
        </b-form-group>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import {BFormCheckbox, BFormGroup, BFormInput, BFormRadioGroup} from "bootstrap-vue-3";
import BirthdayDatepickerAtom from "@/components/subComponents/BirthdayDatepickerAtom";
import {useBookingStore} from "@/stores/BookingStore";
import {useVuelidate} from "@vuelidate/core";
import { required, email } from '@vuelidate/validators';


export default {
  name: "FormComponent",
  components: {
    BFormCheckbox,
    BFormInput,
    BFormRadioGroup, BFormGroup, BirthdayDatepickerAtom
  },
  data() {
    return {
      personalData: {
        gender: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        email: null,
        emailrepeat: null,
        breakfast: false,
      },
      bookingStore: useBookingStore(),
      errorMessage: null,
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      personalData: {
        gender: {
          required},
        firstname: {
          required},
        lastname: {
          required},
        birthdate: {
          required},
        email: {
          required,
          email},
        emailrepeat: {
          required,
          email},
      }
    }
  },

  computed: {
    birthdateShort() {
      let birthdayRaw = new Date(this.personalData.birthdate);
      let birthdayFormatted = birthdayRaw.toISOString().split("T")[0]
      return birthdayFormatted
    }
  },
  methods: {
    saveData(){
      console.log("personal data saved to bookingStore")
      this.bookingStore.bookingRequest.email = this.personalData.email
      this.bookingStore.bookingRequest.firstname = this.personalData.firstname
      this.bookingStore.bookingRequest.lastname = this.personalData.lastname
      this.bookingStore.bookingRequest.birthdate = this.birthdateShort
      this.bookingStore.bookingRequest.gender = this.personalData.gender
      this.bookingStore.bookingRequest.breakfast = this.personalData.breakfast
    },
    setData(){
      this.personalData.gender= this.bookingStore.bookingRequest.gender
      this.personalData.firstname= this.bookingStore.bookingRequest.firstname
      this.personalData.lastname = this.bookingStore.bookingRequest.lastname
      this.personalData.birthdate = this.bookingStore.bookingRequest.birthdate
      this.personalData.email = this.bookingStore.bookingRequest.email
      this.personalData.emailrepeat = this.bookingStore.bookingRequest.email
      this.personalData.breakfast = this.bookingStore.bookingRequest.breakfast
    }
  }
}
</script>

<style scoped>

</style>