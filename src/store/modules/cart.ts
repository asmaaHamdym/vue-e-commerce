// add store module for cart usinf vuex
import { type Module } from 'vuex'
import { type CartItem, type CartState, type Product } from '@/types/types'

const state: CartState = {
  products: [],
  total: 0,
}
const mutations = {
  addToCart(state: CartState, product: Product) {
    const existingItem = state.products.find((item) => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      state.products.push({ product, quantity: 1 })
    }
    state.total += product.price
  },
  removeFromCart(state: CartState, productId: number) {
    const index = state.products.findIndex((item) => item.product.id === productId)
    if (index !== -1) {
      state.total -= state.products[index].product.price * state.products[index].quantity
      state.products.splice(index, 1)
    }
  },
  clearCart(state: CartState) {
    state.products = []
    state.total = 0
  },
}
const actions = {
  addToCart({ commit }, product: Product) {
    commit('addToCart', product)
  },
  removeFromCart({ commit }, productId: number) {
    commit('removeFromCart', productId)
  },
  clearCart({ commit }) {
    commit('clearCart')
  },
}
const getters = {
  cartItems: (state: CartState) => state.products,
  cartTotal: (state: CartState) => state.total,
  cartItemCount: (state: CartState) =>
    state.products.reduce((count, item) => count + item.quantity, 0),
}
const cartModule: Module<CartState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
export default cartModule
