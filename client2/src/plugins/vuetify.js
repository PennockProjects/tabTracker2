// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const opts = {
  light: {
    primary: '#CBAA5C',
    secondary: '#083759'
  },
  icons: {
    iconfont: 'mdi'
  }
}

export default new Vuetify(opts)
