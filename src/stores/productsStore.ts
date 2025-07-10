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
    sortProducts(sortby: string) {
      if (!this.items || this.items.length === 0) {
        return []
      }
      switch (sortby) {
        case 'price-asc':
          return this.items.sort((a: { price: number }, b: { price: number }) => a.price - b.price)
        case 'price-desc':
          return this.items.sort((a: { price: number }, b: { price: number }) => b.price - a.price)
        case 'rating':
          return this.items.sort(
            (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
              b.rating.rate - a.rating.rate,
          )
        case 'category':
          return this.items.sort((a: { category: string }, b: { category: string }) =>
            a.category.localeCompare(b.category),
          )

        default:
          return this.items
      }
    },
  },
})
