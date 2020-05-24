<template>
<v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

    <site-toolbar app>

    </site-toolbar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import SiteToolbar from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    SiteToolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 48px;
}
.v-card__title {
  display: block
}
</style>
