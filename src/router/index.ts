import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import TeamPage from '@/features/team/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: DetailsView,
      props: true,
    },
    { path: '/team', name: 'Team', component: TeamPage },
  ],
})

export default router
