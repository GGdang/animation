import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gsap3-1',
    name: 'gsap3-1',
    component: () => import( /* webpackChunkName: "gsap3" */ '../views/gsap3-1.vue')
  },
  {
    path: '/gsap3-2',
    name: 'gsap3-2',
    component: () => import( /* webpackChunkName: "gsap3" */ '../views/gsap3-2.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import( /* webpackChunkName: "gsap3" */ '../views/three.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router