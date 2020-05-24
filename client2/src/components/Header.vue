<template>
  <div>
    <v-app-bar
      color="teal"
      dense
      dark
      fixed
    >

      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>
        <span class='home'
          @click="navigateTo({ name: 'root'})">
          Tab Tracker
        </span>
      </v-toolbar-title>

      <v-toolbar-items flat dark>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text
          @click="navigateTo({ name: 'register'})">
          Sign Up
        </v-btn>
        <v-btn text
          @click="navigateTo({ name: 'login'})">
          Login
        </v-btn>
      </v-toolbar-items>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}

</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: yellow
}
</style>
