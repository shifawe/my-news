import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Reg from '../views/Reg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue'),
        meta: { title: '列表展示' }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/User.vue'),
        meta: { title: '用户中心' }
      }  
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue'),
    meta: { title: '发布消息' }
  },
  {
    path: '/info/:id',
    name: 'info',
    component: () => import('../views/Info.vue'),
    meta: { title: '详情编辑' }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
