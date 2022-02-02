import sorentoHybrid from '../../views/sorentoHybrid.vue'
import About from '../../views/About.vue';
import Tester from '../../views/Tester.vue'
import Gallery from '../../views/Gallery.vue'
import Dimension from '../../views/Dimension.vue'
import Price from '../../views/Price.vue'

const routes = [
  {
    path: '/',
    name: 'sorentoHybrid',
    component: sorentoHybrid
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/Tester',
    name: 'Tester',
    component: Tester,
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/Dimension',
    name: 'Dimension',
    component: Dimension,
  },
  {
    path: '/Price',
    name: 'Price',
    component: Price,
  },
]

export default routes
