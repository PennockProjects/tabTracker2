<template>
 <!-- <v-app id="inspire">
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :href="source"
                    icon
                    large
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon>mdi-code-tags</v-icon>
                  </v-btn>
                </template>
                <span>Source</span>
              </v-tooltip>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="email"
                  prepend-icon="person"
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="email"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  prepend-icon="lock"
                  type="password"
                  name="password"
                  v-model="password"
                  placeholder="password"
                ></v-text-field>
                <br>
                <div class="error" v-html="error" />
                <br>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="register" color="primary">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</v-app> -->

  <v-layout column>
    <v-flex xs6 offset-xs-3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
          <div class="pl4 pr4 pt2 pb2">
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
          </div>
      </div>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
