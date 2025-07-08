import { defineStore } from 'pinia'
import type { Product, ProductsState } from '../types/types'

export const productsStore = defineStore('products', {
  state: (): ProductsState => ({
    items: [] as Product[],
    selectedProduct: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data: Product[] = await response.json()
        this.items = data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An unknown error occurred'
      } finally {
        this.loading = false
      }
    },
  },
})
