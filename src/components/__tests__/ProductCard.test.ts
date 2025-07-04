import { it, describe, expect, vi } from 'vitest'
import ProductCard from '../ProductCard.vue'
import { mount } from '@vue/test-utils'
import { Product } from '../../types/types'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../router/index'

// Mock Product props
const mockProduct = {
  title: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
  rating: {
    rate: 2.5,
    count: 26,
  },
}
// Mock FontAwesome icon component

const mockFontAwesome = {
  template: '<i :class="starClass" :data-icon="iconType"></i>',
  props: ['icon'],
  computed: {
    iconType() {
      return 'star'
    },
    starClass() {
      return {
        product__star: true,
        filled: this.icon === 'fas fa-star',
        far: this.icon === 'far fa-star',
        fas: this.icon === 'fas fa-star',
      }
    },
  },
}

describe('ProductCard', () => {
  it('loads succefully', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct as Product,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
  // handle missing props
  it('throws error if product prop is missing', () => {
    expect(() => {
      mount(ProductCard)
    }).toThrow()
  })

  it('renders product title, image, price', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct as Product,
      },
    })
    expect(wrapper.find('.product__title').text()).toBe('Test Product')
    expect(wrapper.find('.product__price').text()).toBe('$100')
    expect(wrapper.find('.product__image').attributes('src')).toBe('test-image.jpg')
  })
})
// display a description of the product when provided
it('renders product description', () => {
  const wrapper = mount(ProductCard, {
    props: {
      product: { ...mockProduct, description: 'This is a test product description.' } as Product,
    },
  })
  expect(wrapper.find('.product__description').text()).toBe('This is a test product description.')
})

// it properly displays the rating stars
it('renders product rating stars', () => {
  const wrapper = mount(ProductCard, {
    props: {
      product: mockProduct as Product,
    },
    global: {
      components: {
        FontAwesomeIcon: mockFontAwesome,
      },
    },
  })

  const stars = wrapper.findAll('[data-icon="star"]')
  expect(stars.length).toBe(5)

  // With rating 2.5, Math.round(2.5) = 3, so first 3 stars should be filled
  expect(stars[0].classes()).toContain('filled')
  expect(stars[1].classes()).toContain('filled')
  expect(stars[2].classes()).toContain('filled')
  expect(stars[3].classes()).not.toContain('filled')
  expect(stars[4].classes()).not.toContain('filled')
})
// Test for clicking the card navigates to product details page
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
it('navigates to product details page when card is clicked', async () => {
  const wrapper = mount(ProductCard, {
    props: {
      product: { ...mockProduct, id: 1 } as Product,
    },
    global: {
      plugins: [router],
      components: {
        FontAwesomeIcon: mockFontAwesome,
      },
    },
  })
  // Mock the router push method
  router.push = vi.fn()
  await wrapper.find('.product__item').trigger('click')
  expect(router.push).toHaveBeenCalledTimes(1)
  expect(router.push).toHaveBeenCalledWith({ name: 'product', params: { id: 1 } })
})

// Test for add to cart button emits product-added event
it('emits product-added event when add to cart button is clicked', async () => {
  const $store = createStore({
    state: {
      cart: [],
    },
    mutations: {
      addToCart(state, product) {
        state.cart.push(product)
      },
    },
  })
  const wrapper = mount(ProductCard, {
    props: {
      product: mockProduct as Product,
    },
    global: {
      plugins: [$store],
      components: {
        FontAwesomeIcon: mockFontAwesome,
      },
    },
  })

  await wrapper.find('.product__add-to-cart').trigger('click')

  const myEventCalls = wrapper.emitted('product-added')
  expect(myEventCalls).toHaveLength(1)
})
