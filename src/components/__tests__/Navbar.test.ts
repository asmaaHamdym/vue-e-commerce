import NavBar from '../Navbar/NavBar.vue'
import { it, describe, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'

const mockStore = {
  getters: {
    'cart/cartItemCount': 0,
  },
}
const mockRoute = {
  name: 'home', // or whatever route name you want to mock
  path: '/',
  params: {},
  query: {},
}
describe('Navbar', () => {
  it('loads successfully', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.exists()).toBe(true)
  })

  it('renders logo image', () => {
    const wrapper = mount(NavBar, {
      global: {
        mocks: {
          $store: mockStore,
          $route: mockRoute,
        },
        stubs: {
          SideCart: true,
        },
      },
    })
    const logoImg = wrapper.find('.nav__logo-img')
    expect(logoImg.exists()).toBe(true)
    expect(logoImg.attributes('alt')).toBe('Colorful shopping bag logo')
  })

  it('shows Sign in link', () => {
    const wrapper = mount(NavBar, {
      global: {
        mocks: {
          $store: mockStore,
          $route: mockRoute,
        },
        stubs: {
          SideCart: true,
        },
      },
    })
    expect(wrapper.text()).toContain('Sign in')
  })

  it('starts with mobile menu closed', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.vm.mobileNav).toBe(false)
  })

  it('starts with cart closed', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.vm.isCartOpen).toBe(false)
  })
})
