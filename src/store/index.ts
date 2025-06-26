import { createStore } from 'vuex'
import ProductsModule from './modules/products'
import CartModule from './modules/cart'
import selectedProductModule from './modules/selectedProduct'

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
})
