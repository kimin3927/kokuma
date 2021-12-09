import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRouter from './admin';

Vue.use(VueRouter)

const routes = [
  ...adminRouter,
]

console.log(adminRouter)

const router = new VueRouter({
  routes,
})

export default router
