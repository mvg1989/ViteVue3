import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Business from '@/views/Business.vue';
import Contact from '@/views/Contact.vue';
import Aboutus from '@/views/Aboutus.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus
    },

  ]
})

export default router
