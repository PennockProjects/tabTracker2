<template>
  <v-layout row class="text-xs-center">
    <v-flex xs4 offset-xs4 class="teal lighten-5">
      <v-container class="text-xs-center">
        <v-card flat>
          <v-card-title primary-title>
            Login
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
              prependIcon="lock"
              placeholder="password" />
            <br>
            <div class="error" v-html="error" />
            <br>
            <v-card-actions>
              <v-btn dark class="teal" primary large block @click="login">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
