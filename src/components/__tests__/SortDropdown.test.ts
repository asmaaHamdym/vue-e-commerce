import { describe, it, expect } from 'vitest'
import SortDropdown from '../SortDropdown.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach } from 'node:test'

let wrapper: VueWrapper

beforeEach(() => {
  wrapper = mount(SortDropdown, {})
})

describe('SortDropdown', () => {
  it('renders correctly', () => {
    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.text()).toContain('Default')
    expect(wrapper.text()).toContain('Price: Low to High')
    expect(wrapper.text()).toContain('Price: High to Low')
    expect(wrapper.text()).toContain('Highest Rating')
    expect(wrapper.text()).toContain('Category')
  })
  it("emits 'emitSelectedOption' when an option is selected", async () => {
    await wrapper.find('.dropdown__select').trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
  })
})
