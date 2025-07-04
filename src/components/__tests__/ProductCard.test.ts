import { it, describe, expect, vi, beforeEach } from 'vitest'
import ProductCard from '../ProductCard.vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { Product } from '../../types/types'
import { mockProduct, mockFontAwesome } from './mocks/mocks'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../router/index'

// Mock Vuex store
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
// Mock Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

let wrapper: VueWrapper<InstanceType<typeof ProductCard>>
// passing the mock product, router and store to the component before each test
beforeEach(() => {
  wrapper = mount(ProductCard, {
    props: {
      product: mockProduct as Product,
    },
    global: {
      plugins: [router, $store],
      components: {
        FontAwesomeIcon: mockFontAwesome,
      },
    },
  })
})

describe('ProductCard', () => {
  it('loads succefully', () => {
    expect(wrapper.exists()).toBe(true)
  })
  // it renders the product details correctly
  it('renders product title, image, price, description', () => {
    expect(wrapper.find('.product__title').text()).toBe('Test Product')
    expect(wrapper.find('.product__price').text()).toBe('$100')
    expect(wrapper.find('.product__image').attributes('src')).toBe('test-image.jpg')
    expect(wrapper.find('.product__description').text()).toBe('This is a test product description.')
  })
})

// it properly displays the rating stars
it('renders product rating stars', () => {
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
it('navigates to product details page when card is clicked', async () => {
  // Mock the router push method
  router.push = vi.fn()
  await wrapper.find('.product__item').trigger('click')
  expect(router.push).toHaveBeenCalledTimes(1)
  expect(router.push).toHaveBeenCalledWith({ name: 'product', params: { id: 1 } })
})

// Test for add to cart button emits product-added event
it('emits product-added event when add to cart button is clicked', async () => {
  await wrapper.find('.product__add-to-cart').trigger('click')

  expect(wrapper.emitted('product-added')).toHaveLength(1)
  expect(wrapper.emitted('product-added')[0]).toEqual([mockProduct])
})
