import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  'axios'

Vue.prototype.$http=axios //修改内部的$http为axios  $http.get()    .post()


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
