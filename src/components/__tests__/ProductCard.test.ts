import { it, describe, expect } from 'vitest'
import ProductCard from '../ProductCard.vue'
import { mount } from '@vue/test-utils'
import { Product } from '../../types/types'
describe('ProductCard', () => {
  // test for html elements
  it('renders product name', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: {
          title: 'Test Product',
          // price: 100,
          // image: 'test-image.jpg',
          rating: {
            rate: 2.5,
            count: 26,
          },
        } as Product,
      },
    })
    // expect(wrapper.text()).toContain('Test Product')
    // expect(wrapper.html()).toContain('li')
    expect
  })
  // renders price with dollar sign
})
