import { it, describe, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ProductDetails from '../ProductDetails.vue'
import { $store, mockProduct, router } from '../../components/__tests__/mocks/mocks'

let wrapper: VueWrapper
beforeEach(() => {
  wrapper = mount(ProductDetails, {
    global: {
      plugins: [$store, router],
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

  // Test for clicking add to cart button adds product to cart
  it('adds product to cart when add to cart button is clicked', async () => {
    await wrapper.find('.product__add-to-cart').trigger('click')
    expect($store.state.selectedProduct.selectedProduct).toEqual(mockProduct)
  })
  // testing it loads product details from store
  it('loads product details from store', () => {
    $store.dispatch('fetchProductById', mockProduct.id)
    expect($store.state.selectedProduct.selectedProduct).toEqual(mockProduct)
  })
})
