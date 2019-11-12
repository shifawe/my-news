import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/User.vue')
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
    component: () => import('../views/Add.vue')
  },
  {
    path: '/info/:id',
    name: 'info',
    component: () => import('../views/Info.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
