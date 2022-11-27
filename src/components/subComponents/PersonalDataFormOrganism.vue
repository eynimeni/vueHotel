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
      <RegistrationFormOrganism :personaldata="personalData"></RegistrationFormOrganism>
      <BookingOperator v-if="filledOutForm" :personaldata="personalData"></BookingOperator>
      <p v-else>Bitte füllen Sie alle Felder vollständig aus, um fortzufahren</p>
    </b-card>
  </div>
</template>

<script>
import {BCard, BFormCheckbox, BFormGroup, BFormInput, BFormRadioGroup} from "bootstrap-vue-3";
import BirthdayDatepickerAtom from "@/components/subComponents/BirthdayDatepickerAtom";
import RegistrationFormOrganism from "@/components/subComponents/RegistrationFormOrganism";
import BookingOperator from "@/components/subComponents/BookingOperator";

export default {
  name: "FormComponent",
  components: {
    BFormCheckbox,
    BFormInput,
    BFormRadioGroup, BCard, BookingOperator, BFormGroup, BirthdayDatepickerAtom, RegistrationFormOrganism
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
      }
    }
  },
  computed: {
    filledOutForm() { //ACHTUNG: Löscht der User wieder eine Engabe wird der Button nicht ausgeblendet - optimieren!
      return !!(this.personalData.gender,
          this.personalData.firstname,
          this.personalData.lastname,
          this.personalData.birthdate,
          this.personalData.email,
      this.personalData.emailrepeat &&
      this.personalData.email === this.personalData.emailrepeat);
    }
  }
}
</script>

<style scoped>

</style>