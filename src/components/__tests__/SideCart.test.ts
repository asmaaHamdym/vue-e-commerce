import { it, describe, expect, beforeEach } from 'vitest'
import SideCart from '../SideCart.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import { setupTestPinia, useCartStore, mockProduct, mockProduct2 } from './mocks/mocks'
import { cartStore } from '../../store/cartStore'

let wrapper: VueWrapper
beforeEach(() => {
  setupTestPinia()
  wrapper = mount(SideCart, {
    props: {
      isOpen: true,
    },
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })
})

describe('SideCart', () => {
  it('renders correctly with no products', () => {
    expect(wrapper.find('.cart-sidebar__empty-notice').text()).toBe('Your cart is empty')
    expect(wrapper.find('.cart-item').exists()).toBe(false)
  })

  it('renders correctly with products in cart', async () => {
    // Mock cart state with products
    const cartStore = useCartStore()
    cartStore.addToCart(mockProduct)
    await nextTick()

    expect(wrapper.find('.cart-item').exists()).toBe(true)
    expect(wrapper.text()).toContain('Test Product')
  })

  it('emits close event when close button is clicked', async () => {
    await wrapper.find('.cart-sidebar__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
