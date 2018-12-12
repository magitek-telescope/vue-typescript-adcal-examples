import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$state', {
  get(this: Vue) {
    return this.$store.state
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
