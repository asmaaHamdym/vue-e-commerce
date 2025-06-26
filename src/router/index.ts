import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
import ProductList from '@/pages/ProductList.vue'
import Product from '@/pages/Product-details.vue'
import Contact from '@/pages/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/products',
          name: 'products',
          component: ProductList,
        },
        {
          path: '/products/:id',
          name: 'product',
          component: Product,
          props: true,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
})

export default router
