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

// Mock product 2
export const mockProduct2: Product = {
  id: 2,
  title: 'Test Product 2',
  price: 200,
  image: 'test-image-2.jpg',
  rating: {
    rate: 3.5,
    count: 30,
  },
  description: 'This is another test product',
  category: 'test-category-2',
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
    cart: {
      products: [],
      total: 0,
    },
    products: {
      items: [mockProduct, mockProduct2],
      isLoading: false,
      error: null,
    },
    selectedProduct: {
      selectedProduct: { ...mockProduct },
      loading: false,
      error: null,
    },
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    },
  },
  getters: {
    'selectedProduct/selectedProduct': () => mockProduct,
  },
  actions: {
    fetchProducts({ commit }) {
      // Simulate fetching products
      commit('setProducts', [mockProduct, mockProduct2])
    },
    fetchProductById({ commit }, productId) {
      // Simulate fetching product details
      const product = mockProduct.id === productId ? mockProduct : mockProduct2
      commit('setSelectedProduct', product)
    },
    clearCart({ commit }) {
      commit('clearCart')
    },
  },
})
