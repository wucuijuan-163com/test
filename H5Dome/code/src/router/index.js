import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  return resolve => require([`@views/${component}`],resolve)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: load('home/index')
  },
  {
    path: '/List',
    name: 'List',
    component: load('list/index')
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: load('mine/index')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
