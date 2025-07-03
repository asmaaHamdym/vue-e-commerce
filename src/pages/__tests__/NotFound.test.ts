import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NotFound from '../NotFound.vue'
import AppLink from '../../components/shared/AppLink.vue'

describe('Notfound', () => {
  it('renders successfully', () => {
    const wrapper = mount(NotFound, {})
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('404 - Not Found')
  })

  it('Link has correct route to homepage', () => {
    const wrapper = mount(NotFound, {
      global: {
        stubs: {
          'router-link': true,
        },
      },
    })
    const appLink = wrapper.findComponent(AppLink)
    expect(appLink.props('to')).toBe('/')
  })
})
