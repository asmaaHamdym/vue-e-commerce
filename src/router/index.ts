import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
import ProductList from '@/pages/ProductList.vue'
import ProductDetails from '@/pages/ProductDetails.vue'
import ContactUs from '@/pages/ContactUs.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
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
        component: ProductDetails,
        props: true,
      },
      {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
      },
    ],
  },
  // add not found route
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export { routes }
export default router
