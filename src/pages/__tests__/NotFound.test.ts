import { it, describe, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import NotFound from '../NotFound.vue'
import AppLink from '../../components/shared/AppLink.vue'
import { beforeEach } from 'vitest'

let wrapper: VueWrapper

beforeEach(() => {
  wrapper = mount(NotFound, {
    global: {
      stubs: {
        'router-link': true,
      },
    },
  })
})

describe('Notfound', () => {
  it('renders successfully', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('404 - Not Found')
  })

  it('Link has correct route to homepage', () => {
    const appLink = wrapper.findComponent(AppLink)
    expect(appLink.props('to')).toBe('/')
  })
})
