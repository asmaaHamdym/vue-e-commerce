import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import HamburgerMenu from '../Navbar/HamburgerMenu.vue'
import AppLink from '../shared/AppLink.vue'
import { router } from './mocks/mocks'

describe('HamburgerMenu', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(HamburgerMenu, {
      props: {
        mobileNav: true,
      },
      global: {
        plugins: [router],
        components: {
          AppLink,
        },
      },
    })
  })

  it('renders successfully with required props', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('shows navigation links when mobileNav is true', () => {
    const navList = wrapper.find('.mobile-nav-ul')
    expect(navList.isVisible()).toBe(true)
  })

  it('hides navigation links when mobileNav is false', async () => {
    await wrapper.setProps({ mobileNav: false })
    const navList = wrapper.find('.mobile-nav-ul')
    expect(navList.exists()).toBe(false)
  })

  it('renders AppLink components with correct props', () => {
    const appLinks = wrapper.findAllComponents(AppLink)
    expect(appLinks).toHaveLength(3)

    // Check first link (Home)
    expect(appLinks[0].props('to')).toEqual({ name: 'home' })
    expect(appLinks[0].text()).toBe('Home')

    // Check second link (Products)
    expect(appLinks[1].props('to')).toEqual({ name: 'products' })
    expect(appLinks[1].text()).toBe('Products')

    // Check third link (Contact us)
    expect(appLinks[2].props('to')).toEqual({ name: 'contactus' })
    expect(appLinks[2].text()).toBe('Contact us')
  })

  it('emits closeMobileNav event when a link is clicked', async () => {
    const appLinks = wrapper.findComponent(AppLink)
    await appLinks.trigger('click')
    expect(wrapper.emitted('closeMobileNav')).toBeTruthy()
  })
})
