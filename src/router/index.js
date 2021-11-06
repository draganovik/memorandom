import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/GameMenu.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/playClassic',
    name: 'Clasic',
    component: () => import('../views/GameBoardClassic.vue')
  },
  {
    path: '/playAdvanced',
    name: 'Advanced',
    component: () => import('../views/GameBoardAdvanced.vue')
  },
  { path: '/:pathMatch(.*)*', redirect: { name: 'Menu' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
