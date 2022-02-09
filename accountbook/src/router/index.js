import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Assets from '../views/Assets.vue'
import Card from '../views/Card.vue'
import Earnings from '../views/Earnings.vue'
import Forecasting from '../views/Forecasting.vue'
import Spendings from '../views/Spendings.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/Card',
    name: 'Card',
    component: Card
  },
  {
    path: '/Earnings',
    name: 'Earnings',
    component: Earnings
  },
  {
    path: '/Forecasting',
    name: 'Forecasting',
    component: Forecasting
  },
  {
    path: '/Spendings',
    name: 'Spendings',
    component: Spendings
  },
]

const router = new VueRouter({
  routes
})

export default router
