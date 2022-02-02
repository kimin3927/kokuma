import Vue from 'vue'
import VueRouter from 'vue-router'
import Garbage from '../components/Garbage.vue'
import Table from '../views/Table.vue'
import FinTable from '../views/FinTable.vue'
import Removed from '../views/Removed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Garbage',
    name: 'Garbage',
    component: Garbage
  },
  {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/FinTable',
    name: 'FinTable',
    component: FinTable
  },
  {
    path: '/Removed',
    name: 'Removed',
    component: Removed
  },
]

const router = new VueRouter({
  routes
})

export default router
