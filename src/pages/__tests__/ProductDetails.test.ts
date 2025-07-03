import { it, describe, expect, vi } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { Product } from '../../types/types'
import ProductDetails from '../ProductDetails.vue'
import { createStore } from 'vuex'

// Mock Product props
const mockProduct: Product = {
  id: 1,
  category: 'test-category',
  description: 'This is a test product',
  title: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
  rating: {
    rate: 2.5,
    count: 26,
  },
}
// Mock Vuex store state
const store = createStore({
  modules: {
    selectedProduct: {
      namespaced: true,
      state: {
        selectedProduct: mockProduct as Product,
        loading: false,
        error: null,
      },
      getters: {
        selectedProduct: (state) => state.selectedProduct,
        loading: (state) => state.loading,
        error: (state) => state.error,
      },
    },
  },
})

describe('ProductDetails', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(ProductDetails, {
      global: {
        plugins: [store],
        mocks: {
          $route: {
            params: { id: '1' },
          },
        },
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('Test Product')
    expect(wrapper.text()).toContain('This is a test product')
    expect(wrapper.text()).toContain('100')
    expect(wrapper.find('img').attributes('src')).toBe('test-image.jpg')
  })

  // Test for clicking add to cart button adds product to cart
  it('adds product to cart when add to cart button is clicked', async () => {
    const wrapper = mount(ProductDetails, {
      components: {
        ItemAddedNotification: true,
      },
      global: {
        plugins: [store],
        mocks: {
          $route: {
            params: { id: '1' },
          },
        },
      },
    })

    await wrapper.find('.product__add-to-cart').trigger('click')
    expect(store.state.selectedProduct.selectedProduct).toEqual(mockProduct)
  })
})
