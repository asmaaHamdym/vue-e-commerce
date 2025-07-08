import { it, describe, expect, beforeEach } from 'vitest'
import SideCart from '../SideCart.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import { $store, mockProduct, mockProduct2 } from './mocks/mocks'

let wrapper: VueWrapper
beforeEach(() => {
  wrapper = mount(SideCart, {
    props: {
      isOpen: true,
    },
    global: {
      plugins: [$store],
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
    $store.state.cart.products = [
      { product: mockProduct, quantity: 1 },
      { product: mockProduct2, quantity: 1 },
    ]
    await nextTick()

    expect(wrapper.find('.cart-item').exists()).toBe(true)
    expect(wrapper.findAll('.cart-item')).toHaveLength(2)
  })

  it('emits close event when close button is clicked', async () => {
    await wrapper.find('.cart-sidebar__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
