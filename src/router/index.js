import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Guess from '../views/Guess.vue'

const routes = [
  {
    path: '/',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/guess',
    name: 'Guess',
    component: Guess
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
