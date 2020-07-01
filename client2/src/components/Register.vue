<template>
  <v-layout row class="text-xs-center">
    <v-flex xs4 offset-xs4 class="teal lighten-5">
      <v-container class="text-xs-center">
        <v-card flat>
          <v-card-title primary-title>
            Register
          </v-card-title>
          <v-form class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              color="teal"
              type="email"
              label="email"
              name="email"
              v-model="email"
              prependIcon="person"
              placeholder="email" />
            <br>
            <v-text-field
              color="teal"
              type="password"
              label="password"
              name="password"
              v-model="password"
              autocomplete="new-password"
              prependIcon="lock"
              placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-card-actions>
              <v-btn dark class="teal" primary large block @click="register">Register</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>

  <!-- <div>
    <h1>Register</h1>
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="email" />
            <br>
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <button
              @click="register">
              Register
            </button>
  </div> -->
</template>

<script>
import AuthenticationService from '@/services/Authentication'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log('register response', response.data)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
