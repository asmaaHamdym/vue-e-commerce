import { it, describe, expect, vi, beforeEach } from 'vitest'
import SideCart from '../SideCart.vue'
import { mount } from '@vue/test-utils'
import { Product } from '../../types/types'
import { createStore } from 'vuex'

// Mock Product
const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
  rating: {
    rate: 2.5,
    count: 26,
  },
  description: 'This is a test product',
  category: 'test-category',
}

// Mock product 2
const mockProduct2: Product = {
  id: 2,
  title: 'Test Product 2',
  price: 200,
  image: 'test-image-2.jpg',
  rating: {
    rate: 3.5,
    count: 30,
  },
  description: 'This is another test product',
  category: 'test-category-2',
}

describe('SideCart', () => {
  let emptyStore: any
  let storeWithProducts: any
  let removeFromCartMock: any
  let clearCartMock: any

  beforeEach(() => {
    // mock fucntions
    removeFromCartMock = vi.fn()
    clearCartMock = vi.fn()
    // Store with empty cart
    emptyStore = createStore({
      modules: {
        cart: {
          namespaced: true,
          state: {
            products: [],
            total: 0,
          },
          getters: {
            cartItems: (state) => state.products,
            cartTotal: (state) => state.total,
          },
          actions: {
            removeFromCart: removeFromCartMock,
            clearCart: clearCartMock,
          },
        },
      },
    })

    // Store with products
    storeWithProducts = createStore({
      modules: {
        cart: {
          namespaced: true,
          state: {
            products: [
              { product: mockProduct, quantity: 1 },
              { product: mockProduct2, quantity: 3 },
            ],
            total: 700,
          },
          getters: {
            cartItems: (state) => state.products,
            cartTotal: (state) => state.total,
          },
          actions: {
            removeFromCart: removeFromCartMock,
            clearCart: clearCartMock,
          },
        },
      },
    })
  })

  it('renders correctly with no products', () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [emptyStore],
      },
    })

    expect(wrapper.find('.cart-sidebar__empty-notice').text()).toBe('Your cart is empty')
    expect(wrapper.find('.cart-item').exists()).toBe(false)
  })

  it('renders correctly with products in cart', () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [storeWithProducts],
      },
    })

    expect(wrapper.find('.cart-item').exists()).toBe(true)
    expect(wrapper.findAll('.cart-item')).toHaveLength(2)
    expect(wrapper.find('.cart-sidebar__total').text()).toBe('Total: $700.00')
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [emptyStore],
      },
    })

    await wrapper.find('.cart-sidebar__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  // removes from cart when remove button is clicked
  it('calls removeFromCart action when remove button is clicked', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [storeWithProducts],
      },
    })

    await wrapper.find('.cart-item__remove').trigger('click')
    expect(removeFromCartMock).toHaveBeenCalled()
    expect(removeFromCartMock).toHaveBeenCalledWith(expect.anything(), mockProduct.id)
  })
  // clears cart when clear button is clicked
  it('calls clearCart action when clear button is clicked', async () => {
    const wrapper = mount(SideCart, {
      props: {
        isOpen: true,
      },
      global: {
        plugins: [storeWithProducts],
      },
    })

    await wrapper.find('.cart-sidebar__clear').trigger('click')
    expect(clearCartMock).toHaveBeenCalled()
  })
})
