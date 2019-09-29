import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./scss/main.scss"
import "./configs/axiosConfig"
import 'vue-awesome/icons/edit'
import 'vue-awesome/icons/arrow-left'
import 'vue-awesome/icons/regular/trash-alt'

import Icon from 'vue-awesome/components/Icon'
import NofaroDefault from './layouts/NofaroDefault'

Vue.use(require('vue-moment'));

Vue.component('default-layout', NofaroDefault)
Vue.component('v-icon', Icon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
