import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/our-narrative',
      name: 'OurNarrativeView',
      component: () => import('../views/OurNarrativeView.vue'),
    },
    {
      path: '/services',
      name: 'ServicesView',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/housing-consultation',
      name: 'HousingConsultationView',
      component: () => import('../views/HousingConsultationView.vue'),
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
