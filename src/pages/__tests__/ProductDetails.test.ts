import { it, describe, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ProductDetails from '../ProductDetails.vue'
import {
  useSelectedProductStore,
  useCartStore,
  setupTestPinia,
  mockProduct,
  router,
} from '../../components/__tests__/mocks/mocks'

let wrapper: VueWrapper
let cartStore
let selectedProductStore

beforeEach(() => {
  setupTestPinia()
  selectedProductStore = useSelectedProductStore()
  useSelectedProductStore()
  cartStore = useCartStore()
  wrapper = mount(ProductDetails, {
    global: {
      plugins: [router],
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })
})

describe('ProductDetails', () => {
  // Test for rendering product details
  it('renders product details correctly', () => {
    expect(wrapper.find('.product__title').text()).toBe(mockProduct.title)
    expect(wrapper.find('.product__price').text()).toContain(mockProduct.price.toString())
    expect(wrapper.find('.product__description').text()).toBe(mockProduct.description)
    expect(wrapper.find('.product__image').attributes('src')).toBe(mockProduct.image)
  })
  // test ading to cart
  it('adds product to cart when add to cart button is clicked', async () => {
    expect(Array.isArray(cartStore.cartItems)).toBe(true)

    await wrapper.find('.product__add-to-cart').trigger('click')

    expect(cartStore.cartItems[0]).toEqual(mockProduct)
  })
})
