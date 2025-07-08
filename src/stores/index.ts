import { createStore } from 'vuex'
import ProductsModule from './modules/products'
import CartModule from './modules/cart'
import selectedProductModule from './modules/selectedProduct'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    products: ProductsModule,
    cart: CartModule,
    selectedProduct: selectedProductModule,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['cart', 'selectedProduct'], // persist only the cart and selectedProduct modules
    }),
  ],
})
