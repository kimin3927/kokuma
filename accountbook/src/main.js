import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

console.log(process.env.VUE_APP_KAKAO_HOST)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
