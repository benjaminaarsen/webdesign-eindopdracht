import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/bestellen',
    name: "Bestellen",
    component: () => import('../views/Bestellen.vue')
  },
  {
    path: '/over-ons',
    name: 'Over-Ons',
    component: () => import('../views/Over-ons.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
