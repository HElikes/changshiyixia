// router.js仅仅只是用来配置路由的,所以导出路由的数组
import SmFooter from '@/components/SmFooter'

const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const productList = () => import('@/views/productList')
const Detail = () => import('@/views/Detail')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: SmFooter
    },
    meta: {
      isTabbar: true,
      title: '首页',
      icon: '&#xe61a;'
    }
  },
  {
    path: '/Mall',
    name: 'Mall',
    components: {
      default: Mall,
      footer: SmFooter
    },
    meta: {
      isTabbar: true,
      title: '商城',
      icon: '&#xe60d;'
    },
    children: [
      {
        path: ':proId',
        name: 'productlist',
        component: productList
      }
    ]
  },
  {
    path: '/Cart',
    name: 'Cart',
    components: {
      default: Cart,
      footer: SmFooter
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe603;'
    }
  },
  {
    path: '/Mine',
    name: 'Mine',
    components: {
      default: Mine,
      footer: SmFooter
    },
    meta: {
      isTabbar: true,
      title: '我的',
      icon: '&#xe604;'
    }
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
    meta: {}
  }
]
