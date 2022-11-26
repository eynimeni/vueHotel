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
              required
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
          <BirthdayDatepickerAtom v-model="this.personalData.birthdate" required></BirthdayDatepickerAtom>
        </b-form-group>
        <b-form-group
            label="Email:"
            label-for="email"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email" type="email" v-model.trim="personalData.email" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email wiederholen:"
            label-for="email-repeat"
            label-cols-sm="3"
            label-align-sm="right"
        >
          <b-form-input id="email repeat" type="email" v-model.trim="personalData.emailrepeat" required></b-form-input>
        </b-form-group>
        <b-form-group
            label="Frühstücksoption"
            label-for="breakfast"
            label-cols-sm="3"
            label-align-sm="right"
            required
        >
          <b-form-radio
              id="breakfast"
              v-model="personalData.breakfast"
              name="breakfast"
              value="1"
          >
            Frühstück inklusive
          </b-form-radio>
          <b-form-radio
              id="breakfast"
              v-model="personalData.breakfast"
              name="breakfast"
              value="0"
          >
            Kein Frühstück
          </b-form-radio>
        </b-form-group>
        <div><strong>{{ errorMessage }}</strong></div>
      </b-form-group>
      <!--b-button @click="checkPersonalData" type="submit" class="btn btn-primary">Persönliche Daten console.log</b-button-->
      <RegistrationFormOrganism :personaldata="personalData"></RegistrationFormOrganism>
      <BookingOperator :personaldata="personalData"></BookingOperator>
    </b-card>
  </div>
</template>

<script>
import {BCard, BFormGroup, BFormInput, BFormRadio, BFormRadioGroup} from "bootstrap-vue-3";
import BirthdayDatepickerAtom from "@/components/subComponents/BirthdayDatepickerAtom";
import RegistrationFormOrganism from "@/components/subComponents/RegistrationFormOrganism";
import BookingOperator from "@/components/subComponents/BookingOperator";

export default {
  name: "FormComponent",
  components: {
    BFormRadio,
    BFormInput,
    BFormRadioGroup, BCard, BookingOperator, BFormGroup, BirthdayDatepickerAtom, RegistrationFormOrganism},
  data() {
    return {
      errorMessage: "",
      personalData: {
        gender: '',
        firstname: '',
        lastname: '',
        birthdate: '',
        email: '',
        emailrepeat: '',
        breakfast: '',
      }
    };
  },
  // Methoden überarbeiten. Error Handling sollte direkt bei Eingabe passieren
  /*methods: {
    checkPersonalData() {
      if (this.personalData.email === this.personalData.emailrepeat) {
        this.submitPersonalData();
      } else {
        this.errorMessage = "Die eingegebenen Email Adressen stimmen nicht überein."
        console.log("error");
      }
    },
    submitPersonalData() {
      console.log(this.personalData)
    }
  }*/
}
</script>

<style scoped>

</style>