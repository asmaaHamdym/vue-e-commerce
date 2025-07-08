import { defineStore } from 'pinia'
import type { Product } from '../types/types'

export const selectedProductStore = defineStore('selectedProduct', {
  state: () => ({
    selectedProduct: null as Product | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProductById(productId: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch product')
        }
        const data: Product = await response.json()
        this.selectedProduct = data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An unknown error occurred'
      } finally {
        this.loading = false
      }
    },
  },
})
