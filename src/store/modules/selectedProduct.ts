import type { ProductsState, Product } from '@/types/types'

const state: ProductsState = {
  selectedProduct: null,
  loading: false,
  error: null,
}

const mutations = {
  setselectedProduct(state: ProductsState, product: Product) {
    state.selectedProduct = product
  },
  setLoading(state: ProductsState, loading: boolean) {
    state.loading = loading
  },
  setError(state: ProductsState, error: string | null) {
    state.error = error
  },
}
const actions = {
  async fetchProductById({ commit }, productId: string) {
    commit('setLoading', true)
    commit('setError', null)
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data: Product = await response.json()
      commit('setselectedProduct', data)
    } catch (error) {
      let errorMessage = 'An unknown error occurred'
      if (error instanceof Error) {
        errorMessage = error.message
      }
      commit('setError', errorMessage)
    } finally {
      commit('setLoading', false)
    }
  },
}

const getters = {
  selectedProduct: (state: ProductsState) => state.selectedProduct,
  loading: (state: ProductsState) => state.loading,
  error: (state: ProductsState) => state.error,
}

const selectedProductModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

export default selectedProductModule
