// add store module for cart usinf vuex
import { type Module } from 'vuex'
import { type CartState, type Product } from '@/types/products'

const state: CartState = {
  product: {} as Product,
  quantity: 0,
}

const mutations = {
  addToCart(state: CartState, product: Product) {
    state.product = product
    state.quantity += 1
  },
  removeFromCart(state: CartState) {
    state.quantity = 0
    state.product = {} as Product
  },
  updateQuantity(state: CartState, quantity: number) {
    state.quantity = quantity
  },
}
const actions = {
  addProductToCart({ commit }, product: Product) {
    commit('addToCart', product)
  },
  removeProductFromCart({ commit }) {
    commit('removeFromCart')
  },
  updateCartQuantity({ commit }, quantity: number) {
    commit('updateQuantity', quantity)
  },
}
const getters = {
  cartProduct: (state: CartState) => state.product,
  cartQuantity: (state: CartState) => state.quantity,
}
const cartModule: Module<CartState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
export default cartModule
