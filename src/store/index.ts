import { createStore } from 'vuex'
import ProductsModule from './modules/products'
import CartModule from './modules/cart'

export default createStore({
  modules: {
    products: ProductsModule,
    cart: CartModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})
