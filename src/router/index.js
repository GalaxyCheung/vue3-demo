import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  meta: {
    title: '首页'
  },
  component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
}, {
  path: '/playGround',
  name: 'PlayGround',
  meta: {
    title: '练习场'
  },
  redirect: '/playGround/refAndReactive',
  component: () => import(/* webpackChunkName: "playGround" */ '../views/playGround/Index.vue'),
  children: [{
    path: '/playGround/refAndReactive',
    name: 'RefAndReactive',
    component: () => import(/* webpackChunkName: "playGround" */ '../views/playGround/RefAndReactive.vue')
  }]
}, {
  path: '/piniaTest',
  name: 'PiniaTest',
  meta: {
    title: 'pinia'
  },
  component: () => import(/* webpackChunkName: "test" */ '../views/piniaTest/PiniaTest.vue')
}, {
  path: '/xlsxTest',
  name: 'XlsxTest',
  meta: {
    title: 'xlsx'
  },
  component: () => import(/* webpackChunkName: "test" */ '../views/xlsxTest/XlsxTest.vue')
}, {
  path: '/graphQLTest',
  name: 'GraphQLTest',
  meta: {
    title: 'graphQL测试'
  },
  redirect: '/graphQLTest/dataView',
  component: () => import(/* webpackChunkName: "test" */ '../views/graphQLTest/Index.vue'),
  children: [{
    path: '/graphQLTest/dataView',
    name: 'DataView',
    meta: {
      title: '数据展示'
    },
    component: () => import(/* webpackChunkName: "test" */ '../views/graphQLTest/DataView.vue')
  }]
}]

// 1. 创建 router 实例，然后传 `routes` 配置
const router = createRouter({
  // 2. 通过 createWebHashHistory() 创建 hash 模式。
  history: createWebHashHistory(),
  routes
})

export default router
