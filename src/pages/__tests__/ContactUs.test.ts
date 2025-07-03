import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactUs from '../ContactUs.vue'

describe('ContactUs', () => {
  it('renders correctly', () => {
    const wrapper = mount(ContactUs, {})

    expect(wrapper.find('.contact').exists()).toBe(true)
    expect(wrapper.find('.contact__description').exists()).toBe(true)
    expect(wrapper.html()).toContain('form')
  })
})
