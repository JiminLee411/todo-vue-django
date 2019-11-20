import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'
import store from './store' // vuex 설정과 관련되 update됨

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  router,
  store, // vuex 설정과 관련되 update됨
  render: h => h(App)
}).$mount('#app')
