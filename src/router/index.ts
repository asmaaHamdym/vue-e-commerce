import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'
import Products from '@/pages/Products.vue'
import Product from '@/pages/Product.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
