import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../../router/index'
import { defineStore } from 'pinia'
import { createPinia, setActivePinia } from 'pinia'
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

// Setup Pinia for testing
export const setupTestPinia = () => {
  const pinia = createPinia()
  setActivePinia(pinia)
  return pinia
}

// Cart store
export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    total: 0,
  }),
  actions: {
    addToCart(product) {
      this.cartItems.push(product)
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((product) => product.id !== productId)
    },

    clearCart() {
      this.cartItems = []
      this.total = 0
    },
  },
})
// selected product store
export const useSelectedProductStore = defineStore('selectedProduct', {
  state: () => ({
    selectedProduct: mockProduct as Product | null,
  }),
  actions: {
    fetchProductById(productId: number) {
      // Simulate fetching product by ID
      if (productId === mockProduct2.id) {
        this.selectedProduct = mockProduct2
      } else {
        this.selectedProduct = null
      }
    },
  },
})
// Mock product list store
export const useProductListStore = defineStore('productList', {
  state: () => ({
    items: [mockProduct, mockProduct2] as Product[],
    sortedProducts: [] as Product[],
    loading: false,
    error: null,
  }),
  actions: {
    fetchProducts() {
      // Simulate fetching products
      this.items = [mockProduct, mockProduct2]
    },
  },
})
