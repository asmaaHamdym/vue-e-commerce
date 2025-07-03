import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HamburgerMenu from '../Navbar/HamburgerMenu.vue'
import AppLink from '../shared/AppLink.vue'

// Mock router setup
const routes = [
  { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
  { path: '/products', name: 'products', component: { template: '<div>Products</div>' } },
  { path: '/contactus', name: 'contactus', component: { template: '<div>Contact</div>' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('HamburgerMenu', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    // Reset router to home route before each test
    router.push('/')
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('renders successfully with required props', () => {
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

    expect(wrapper.exists()).toBe(true)
  })

  it('shows navigation links when mobileNav is true', () => {
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

    const navList = wrapper.find('.mobile-nav-ul')
    expect(navList.isVisible()).toBe(true)
  })

  it('hides navigation links when mobileNav is false', () => {
    wrapper = mount(HamburgerMenu, {
      props: {
        mobileNav: false,
      },
      global: {
        plugins: [router],
        components: {
          AppLink,
        },
      },
    })

    const navList = wrapper.find('.mobile-nav-ul')
    expect(navList.isVisible()).toBe(false)
  })

  it('renders all navigation links', () => {
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

    const links = wrapper.findAll('.mobile-nav-ul__link')
    expect(links).toHaveLength(3)

    // Check if all expected links are present
    const linkTexts = links.map((link) => link.text())
    expect(linkTexts).toContain('Home')
    expect(linkTexts).toContain('Products')
    expect(linkTexts).toContain('Contact us')
  })

  it('renders AppLink components with correct props', () => {
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

  it('applies correct CSS classes to navigation items', () => {
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

    const listItems = wrapper.findAll('.mobile-nav-ul__link')
    expect(listItems[0].classes()).toContain('mobile-nav-ul__link')

    const appLinks = wrapper.findAllComponents(AppLink)
    appLinks.forEach((link) => {
      const classNameProp = link.props('className')
      expect(classNameProp).toContain('mobile-nav-ul__link-item')
    })
  })

  it('has correct component name', () => {
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

    expect(wrapper.vm.$options.name).toBe('HamburgerMenu')
  })

  it('contains correct navigation data', () => {
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

    const expectedLinks = [
      { name: 'home', label: 'Home' },
      { name: 'products', label: 'Products' },
      { name: 'contactus', label: 'Contact us' },
    ]

    expect(wrapper.vm.links).toEqual(expectedLinks)
  })
})
