import { describe, it, expect } from 'vitest'
import SortDropdown from '../SortDropdown.vue'
import { mount } from '@vue/test-utils'

describe('SortDropdown', () => {
  it('renders correctly', () => {
    const wrapper = mount(SortDropdown, {})

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.text()).toContain('Default')
    expect(wrapper.text()).toContain('Price: Low to High')
    expect(wrapper.text()).toContain('Price: High to Low')
    expect(wrapper.text()).toContain('Highest Rating')
    expect(wrapper.text()).toContain('Category')
  })
  it("emits 'emitSelectedOption' when an option is selected", async () => {
    const wrapper = mount(SortDropdown, {})
    await wrapper.find('.dropdown__select').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
