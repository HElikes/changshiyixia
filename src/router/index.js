// index.js用来做路由的导出，使用路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes' //  这个routes得到的就是路由的数组

Vue.use(VueRouter)// 引入vue和vue-router，在use一下

// new了一个router的实例并作出导出，在main.js中使用这个实例
export default new VueRouter({
  routes
})
