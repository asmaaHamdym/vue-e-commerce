import { createStore } from 'vuex'
import ProductsModule from './modules/products'

export default createStore({
  modules: {
    products: ProductsModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
