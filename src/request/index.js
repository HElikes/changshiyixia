// import Vue from 'vue'
import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

// Vue.prototype.$http = ajax
// 拦截器
ajax.interceptors.request.use(config => {
  Indicator.open({
    text: 'Loading...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  // 响应的时候把loading关掉
  Indicator.close()
  // 全局的错误处理
  if (resp.status === 200) {
    return resp.data
  } else {
    return {
      status: 400,
      msg: '数据出错'
    }
  }
})

export const getHome = () => ajax.get('/api/tab/1?start=0')

export const getTabs = () => ajax.get('/api/tabs')

export const getProductList = (id, start = 0) => ajax.get(`/api/tab/${id}?start=${start}`)

export const getDetail = id => ajax.get(`/api/detail?id=${id}`)
