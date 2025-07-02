import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/Layout.vue'
import Navbar from '../Navbar/NavBar.vue'
import FooterElement from '../Footer/Footer.vue'

// Mock components to avoid complex dependencies
const mockNavbar = {
  name: 'Navbar',
  template: '<div class="navbar-mock">Navbar</div>',
}

const mockFooter = {
  name: 'FooterElement',
  template: '<div class="footer-mock">Footer</div>',
}

// Create a simple router for testing
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/test', component: { template: '<div>Test Page</div>' } },
  ],
})

describe('Layout Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof Layout>>

  beforeEach(() => {
    wrapper = mount(Layout, {
      global: {
        plugins: [router],
        stubs: {
          Navbar: mockNavbar,
          FooterElement: mockFooter,
          'router-view': true,
        },
      },
    })
  })

  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('has the correct component name', () => {
      expect(wrapper.vm.$options.name).toBe('AppLayout')
    })

    it('renders the main layout container', () => {
      const layoutContainer = wrapper.find('.layout')
      expect(layoutContainer.exists()).toBe(true)
    })

    it('has the correct layout structure', () => {
      expect(wrapper.find('.layout__header').exists()).toBe(true)
      expect(wrapper.find('.layout__content').exists()).toBe(true)
      expect(wrapper.find('.layout__footer').exists()).toBe(true)
    })
  })

  describe('Component Structure', () => {
    it('renders the Navbar component in header section', () => {
      const header = wrapper.find('.layout__header')
      expect(header.exists()).toBe(true)
      expect(header.findComponent(mockNavbar).exists()).toBe(true)
    })

    it('renders the Footer component in footer section', () => {
      const footer = wrapper.find('.layout__footer')
      expect(footer.exists()).toBe(true)
      expect(footer.findComponent(mockFooter).exists()).toBe(true)
    })

    it('renders router-view in the main content area', () => {
      const content = wrapper.find('.layout__content')
      expect(content.exists()).toBe(true)
      // router-view is stubbed, so we check if it exists in the content area
      expect(content.find('router-view-stub').exists()).toBe(true)
    })

    it('has the correct HTML structure', () => {
      const layout = wrapper.find('.layout')
      const header = layout.find('.layout__header')
      const main = layout.find('.layout__content')
      const footer = layout.find('.layout__footer')

      // Check that all main sections exist
      expect(header.exists()).toBe(true)
      expect(main.exists()).toBe(true)
      expect(footer.exists()).toBe(true)

      // Check that main element is actually a <main> tag
      expect(main.element.tagName.toLowerCase()).toBe('main')
    })
  })

  describe('CSS Classes', () => {
    it('applies correct CSS classes to layout sections', () => {
      expect(wrapper.find('.layout').exists()).toBe(true)
      expect(wrapper.find('.layout__header').exists()).toBe(true)
      expect(wrapper.find('.layout__content').exists()).toBe(true)
      expect(wrapper.find('.layout__footer').exists()).toBe(true)
    })

    it('navbar has the correct class', () => {
      const navbar = wrapper.findComponent(mockNavbar)
      expect(navbar.classes()).toContain('layout__header')
    })

    it('footer has the correct class', () => {
      const footer = wrapper.findComponent(mockFooter)
      expect(footer.classes()).toContain('layout__footer')
    })
  })

  describe('Component Registration', () => {
    it('registers Navbar component correctly', () => {
      expect(wrapper.vm.$options.components?.Navbar).toBeDefined()
    })

    it('registers FooterElement component correctly', () => {
      expect(wrapper.vm.$options.components?.FooterElement).toBeDefined()
    })
  })

  describe('Layout Behavior', () => {
    it('maintains flex layout structure', () => {
      const layout = wrapper.find('.layout')

      // This test ensures the class is applied correctly
      expect(layout.classes()).toContain('layout')
    })

    it('content area is wrapped in main semantic element', () => {
      const mainElement = wrapper.find('main.layout__content')
      expect(mainElement.exists()).toBe(true)
      expect(mainElement.element.tagName.toLowerCase()).toBe('main')
    })
  })
})
