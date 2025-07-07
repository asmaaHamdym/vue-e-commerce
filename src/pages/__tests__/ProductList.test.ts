import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import { $store } from '../../components/__tests__/mocks/mocks'
import { beforeEach } from 'vitest'
// import { Product } from '../../types/types'

let wrapper: VueWrapper
beforeEach(() => {
  wrapper = mount(ProductList, {
    global: {
      plugins: [$store],
      stubs: {
        ProductCard: true,
        SortDropdown: true,
        ItemAddedNotifaction: true,
      },
    },
  })
})

describe('ProductList', () => {
  it('renders successfully', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('displays the product header', () => {
    const header = wrapper.find('.products__header')
    expect(header.exists()).toBe(true)
    expect(header.text()).toBe('Products')
  })
  it('displays the product list', () => {
    const productList = wrapper.find('.products__list')
    expect(productList.exists()).toBe(true)
  })
  // test for sorting fucnitoality
  it('sorts products by price', async () => {
    const sortDropdown = wrapper.findComponent({ name: 'SortDropdown' })
    expect(sortDropdown.exists()).toBe(true)

    await sortDropdown.vm.$emit('sort', 'price')
    const sortedProducts = $store.state.products.items.sort((a, b) => a.price - b.price)

    expect($store.state.products.items).toEqual(sortedProducts)
  })
})
