import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 全局使用inconfont图标 */
import './assets/icon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
