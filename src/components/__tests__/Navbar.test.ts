import NavBar from '../Navbar/NavBar.vue'
import { it, describe, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { router, setupTestPinia } from './mocks/mocks'
import { beforeEach } from 'vitest'

let wrapper: VueWrapper

beforeEach(() => {
  setupTestPinia()
  wrapper = mount(NavBar, {
    global: {
      plugins: [router],
      stubs: {
        SideCart: true,
        FontAwesomeIcon: true,
      },
    },
  })
})

describe('Navbar', () => {
  // const cartStore = useCartStore()
  it('loads successfully', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders logo image', () => {
    const logoImg = wrapper.find('.nav__logo-img')
    expect(logoImg.exists()).toBe(true)
    expect(logoImg.attributes('alt')).toBe('Colorful shopping bag logo')
  })

  it('starts with mobile menu closed', () => {
    expect(wrapper.vm.mobileNav).toBe(false)
  })

  it('starts with cart closed', () => {
    expect(wrapper.vm.isCartOpen).toBe(false)
  })
})
