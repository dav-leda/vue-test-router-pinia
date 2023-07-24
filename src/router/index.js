import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VistaUno from '../views/VistaUno.vue'
import VistaDos from '../views/VistaDos.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({

  history: createWebHashHistory(import.meta.env.BASE_URL),
  
  scrollBehavior(to, from, savedPosition) {
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
    {
      path: '/product-view',
      name: 'product-view',
      component: ProductView
    },
  ]
})

export default router
