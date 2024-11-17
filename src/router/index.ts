import { createRouter, createWebHistory } from 'vue-router'

import TeamPage from '@/features/team/TeamPage.vue'
import HomePage from '@/features/home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },

    { path: '/team', name: 'Team', component: TeamPage },
    { path: '/market', name: 'Team', component: TeamPage },
    { path: '/rivals', name: 'Team', component: TeamPage },
  ],
})

export default router
