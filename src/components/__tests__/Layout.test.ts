import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import Layout from '../Layout/Layout.vue'
import { router } from './mocks/mocks'

let wrapper: VueWrapper
beforeEach(() => {
  wrapper = mount(Layout, {
    global: {
      plugins: [router],
      stubs: {
        Navbar: true,
        FooterElement: true,
        'router-view': true,
      },
    },
  })
})

describe('Basic Rendering', () => {
  it('renders succefully', () => {
    expect(wrapper.exists()).toBe(true)
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
  it('renders router-view in the main content area', () => {
    const content = wrapper.find('.layout__content')
    expect(content.exists()).toBe(true)
    // router-view is stubbed, so we check if it exists in the content area
    expect(content.find('router-view-stub').exists()).toBe(true)
  })
})
