import { defineStore } from 'pinia'
import type { Product, CartState, CartItem } from '../types/types'

export const cartStore = defineStore('cart', {
  state: (): CartState => ({
    products: [] as CartItem[],
    total: 0,
  }),
  getters: {
    cartItemCount: (state) => state.products.reduce((count, item) => count + item.quantity, 0),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.products.find((item) => item.product.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.products.push({ product, quantity: 1 })
      }
      this.total += product.price
    },
    removeFromCart(productId: number) {
      const index = this.products.findIndex((item) => item.product.id === productId)
      if (index !== -1) {
        this.total -= this.products[index].product.price * this.products[index].quantity
        this.products.splice(index, 1)
      }
    },
    clearCart() {
      this.products = []
      this.total = 0
    },
  },
  persist: true,
})
