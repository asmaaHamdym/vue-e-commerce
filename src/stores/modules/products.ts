import { type ProductsState, type Product } from '@/types/types'
const state: ProductsState = {
  items: [],
  selectedProduct: null,
  loading: false,
  error: null,
}
const mutations = {
  setProducts(state: ProductsState, products: Product[]) {
    state.items = products
  },
  setLoading(state: ProductsState, loading: boolean) {
    state.loading = loading
  },
  setError(state: ProductsState, error: string | null) {
    state.error = error
  },
}
const actions = {
  async fetchProducts({ commit }) {
    commit('setLoading', true)
    commit('setError', null)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
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
  products: (state: ProductsState) => state.items,
  loading: (state: ProductsState) => state.loading,
  error: (state: ProductsState) => state.error,
}

const productsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
export default productsModule
