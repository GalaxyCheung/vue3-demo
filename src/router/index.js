import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  meta: {
    title: '首页'
  },
  component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
}, {
  path: '/playGround',
  name: 'playGround',
  meta: {
    title: '练习场'
  },
  redirect: '/playGround/refAndReactive',
  component: () => import(/* webpackChunkName: "playGround" */ '../views/playGround/Index.vue'),
  children: [{
    path: '/playGround/refAndReactive',
    name: 'refAndReactive',
    component: () => import(/* webpackChunkName: "playGround" */ '../views/playGround/RefAndReactive.vue')
  }]
}, {
  path: '/piniaTest',
  name: 'piniaTest',
  meta: {
    title: 'pinia'
  },
  component: () => import(/* webpackChunkName: "test" */ '../views/piniaTest/PiniaTest.vue')
}, {
  path: '/xlsxTest',
  name: 'xlsxTest',
  meta: {
    title: 'pinia'
  },
  component: () => import(/* webpackChunkName: "test" */ '../views/xlsxTest/XlsxTest.vue')
}]

// 1. 创建 router 实例，然后传 `routes` 配置
const router = createRouter({
  // 2. 通过 createWebHashHistory() 创建 hash 模式。
  history: createWebHashHistory(),
  routes
})

export default router
