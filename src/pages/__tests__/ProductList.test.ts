import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    products: {
      namespaced: true,
      state: {
        items: [],
        isLoading: false,
        error: false,
      },
      getters: {
        items: (state) => state.products,
        isLoading: (state) => state.isLoading,
        error: (state) => state.error,
      },
    },
  },
})
describe('ProductList', () => {
  it('renders successfully', () => {
    const wrapper = shallowMount(ProductList, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
  it('displays loading state', () => {
    // store with loading state
    const store = createStore({
      modules: {
        products: {
          namespaced: true,
          state: {
            items: [],
            loading: true,
            error: false,
          },
          getters: {
            items: (state) => state.items,
            loading: (state) => state.loading,
            error: (state) => state.error,
          },
        },
      },
    })
    const wrapper = shallowMount(ProductList, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.find('.products__loading').text()).toContain('Loading products...')
  })
  it('displays error state', () => {
    // store with error state
    const store = createStore({
      modules: {
        products: {
          namespaced: true,
          state: {
            items: [],
            loading: false,
            error: true,
          },
          getters: {
            items: (state) => state.items,
            loading: (state) => state.loading,
            error: (state) => state.error,
          },
        },
      },
    })
    const wrapper = shallowMount(ProductList, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.find('.products__error').text()).toContain('Error: ')
  })
})
