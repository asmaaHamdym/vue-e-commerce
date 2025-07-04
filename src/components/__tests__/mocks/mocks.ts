import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../../router/index'
import { createStore } from 'vuex'
import { Product } from '../../../types/types'

// Mock Product props
export const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
  rating: {
    rate: 2.5,
    count: 26,
  },
  description: 'This is a test product description.',
} as Product

// Mock FontAwesome icon component
export const mockFontAwesome = {
  template: '<i :class="starClass" :data-icon="iconType"></i>',
  props: ['icon'],
  computed: {
    iconType() {
      return 'star'
    },
    starClass() {
      return {
        product__star: true,
        filled: this.icon === 'fas fa-star',
        far: this.icon === 'far fa-star',
        fas: this.icon === 'fas fa-star',
      }
    },
  },
}

// Mock Vue Router
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// Mock Vuex store
export const $store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    },
  },
})
