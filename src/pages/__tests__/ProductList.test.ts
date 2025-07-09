import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import ProductCard from '../../components/ProductCard.vue'
import {
  setupTestPinia,
  useProductListStore,
  mockProduct,
  mockProduct2,
} from '../../components/__tests__/mocks/mocks'
import { beforeEach } from 'vitest'

let wrapper: VueWrapper
beforeEach(() => {
  const pinia = setupTestPinia()
  const store = useProductListStore()
  store.sortedProducts = [mockProduct, mockProduct2]
  store.loading = false

  wrapper = mount(ProductList, {
    global: {
      plugins: [pinia],
      components: {
        ProductCard,
      },
      stubs: {
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
  // it('displays the product card component', async () => {
  //   await wrapper.vm.$nextTick()
  //   console.log('Products:', wrapper.html())
  //   const productCards = wrapper.findAllComponents({ name: 'ProductCard' })
  //   console.log(productCards)
  //   expect(productCards.length).toBe(2)
  // })

  it('sorts products by price', async () => {
    const store = useProductListStore()
    const sortDropdown = wrapper.findComponent({ name: 'SortDropdown' })
    expect(sortDropdown.exists()).toBe(true)

    await sortDropdown.vm.$emit('sort', 'price')
    const sortedProducts = store.items.sort((a, b) => a.price - b.price)

    expect(store.items).toEqual(sortedProducts)
  })
})
