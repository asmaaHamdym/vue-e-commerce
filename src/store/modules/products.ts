import { type ProductState, type Product } from '@/types/products.ts'

const state: ProductState = {
  items: [],
  loading: false,
  error: null,
}
const mutations = {
  setProducts(state: ProductState, products: Product[]) {
    state.items = products
  },
  setLoading(state: ProductState, loading: boolean) {
    state.loading = loading
  },
  setError(state: ProductState, error: string | null) {
    state.error = error
  },
}
const actions = {
  async fetchProducts({ commit }) {
    commit('setLoading', true)
    commit('setError', null)
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      const data: Product[] = await response.json()
      commit('setProducts', data)
    } catch (error) {
      commit('setError', error.message)
    } finally {
      commit('setLoading', false)
    }
  },
}

const getters = {
  products: (state: ProductState) => state.items,
  loading: (state: ProductState) => state.loading,
  error: (state: ProductState) => state.error,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
