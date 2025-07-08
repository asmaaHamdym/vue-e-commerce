import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import { setupTestPinia, useProductListStore } from '../../components/__tests__/mocks/mocks'
import { beforeEach } from 'vitest'
// import { Product } from '../../types/types'

let wrapper: VueWrapper
beforeEach(() => {
  setupTestPinia()
  wrapper = mount(ProductList, {
    global: {
      plugins: [],
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
  // display the product card component
  it('displays the product card component', () => {
    const productCard = wrapper.findComponent({ name: 'ProductCard' })
    expect(productCard.exists()).toBe(true)
  })

  it('sorts products by price', async () => {
    const productsStore = useProductListStore()
    const sortDropdown = wrapper.findComponent({ name: 'SortDropdown' })
    expect(sortDropdown.exists()).toBe(true)

    await sortDropdown.vm.$emit('sort', 'price')
    const sortedProducts = productsStore.products.sort((a, b) => a.price - b.price)

    expect(productsStore.products).toEqual(sortedProducts)
  })
})
