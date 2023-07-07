import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VistaUno from '../views/VistaUno.vue'
import VistaDos from '../views/VistaDos.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vista-uno',
      name: 'vista-uno',
      component: VistaUno
    },
    {
      path: '/vista-dos',
      name: 'vista-dos',
      component: VistaDos
    },
  ]
})

export default router
