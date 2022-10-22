import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
Vue.config.productionTip = false
// 引入jQuery、bootstrap
// 全局注册 $
Vue.prototype.$ = $
import router from '@/router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
