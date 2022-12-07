<template>
  <heading-organism v-bind:title="title"></heading-organism>
  <b-container class="mt-4">
    <b-list-group>
      <b-list-group-item>
        Vorname: {{user.firstname}}
      </b-list-group-item>
      <b-list-group-item>
        Nachname: {{user.lastname}}
      </b-list-group-item>
      <b-list-group-item>
        E-Mail-Adresse: {{user.email}}
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>
<script>
import HeadingOrganism from "@/components/subComponents/HeadingOrganism";
import {useLoginStore} from "@/stores/LoginStore";
import {useUserStore} from "@/stores/UserStore";

export default {
  name: "ProfileComponent",
  components: {HeadingOrganism},
  data() {
    return {
      title: 'Mein Profil',
      loginStore: useLoginStore(),
      userStore: useUserStore(),
    }
  },
  created() {
    this.userStore.readState(this.token)
  },
  computed: {
    token() {
      return this.loginStore.getToken
    },
    user() {
      return this.userStore.getUser
    }
  }
}
</script>

<style scoped>

</style>