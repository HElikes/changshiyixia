import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'// 这个router就是index.js中导出的实例

import * as ajax from './request'

Vue.prototype.$http = ajax

Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router, // 挂载new这个vue的实例上
  render: h => h(App)
}).$mount('#app')
