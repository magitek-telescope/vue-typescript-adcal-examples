import Vue from 'vue'
import App from './App.vue'
import { AppStore } from './store/'

Vue.config.productionTip = false

Vue.prototype.$store = new AppStore({
  count: 0
})

new Vue({
  render: h => h(App)
}).$mount('#app')
