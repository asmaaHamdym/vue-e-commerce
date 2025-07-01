import { describe, it, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import Footer from '../Footer/Footer.vue'
import FooterNewsletter from '../Footer/FooterNewsletter.vue'
import FooterNavigation from '../Footer/FooterNavigation.vue'
import FooterInfo from '../Footer/FooterInfo.vue'

describe('Footer Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof Footer>>

  beforeEach(() => {
    wrapper = mount(Footer, {
      global: {
        stubs: {
          'font-awesome-icon': true,
        },
      },
    })
  })

  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('has the correct component name', () => {
      expect(wrapper.vm.$options.name).toBe('FooterElement')
    })

    it('renders the main footer element', () => {
      const footer = wrapper.find('footer.footer')
      expect(footer.exists()).toBe(true)
    })

    it('renders the footer container', () => {
      const container = wrapper.find('.footer__container')
      expect(container.exists()).toBe(true)
    })

    it('renders the navigation-info section', () => {
      const navInfo = wrapper.find('.footer__navigation-info')
      expect(navInfo.exists()).toBe(true)
    })
  })

  describe('Child Components', () => {
    it('renders FooterNewsletter component', () => {
      const newsletter = wrapper.findComponent(FooterNewsletter)
      expect(newsletter.exists()).toBe(true)
    })

    it('renders FooterNavigation component', () => {
      const navigation = wrapper.findComponent(FooterNavigation)
      expect(navigation.exists()).toBe(true)
    })

    it('renders FooterInfo component', () => {
      const info = wrapper.findComponent(FooterInfo)
      expect(info.exists()).toBe(true)
    })
  })

  describe('Data Properties', () => {
    it('has currentYear data property set to current year', () => {
      const currentYear = new Date().getFullYear()
      expect(wrapper.vm.currentYear).toBe(currentYear)
    })
  })

  describe('Structure', () => {
    it('has correct component structure', () => {
      const container = wrapper.find('.footer__container')
      const newsletter = container.findComponent(FooterNewsletter)
      const navInfo = container.find('.footer__navigation-info')

      expect(newsletter.exists()).toBe(true)
      expect(navInfo.exists()).toBe(true)
    })
  })
})

describe('FooterNewsletter Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof FooterNewsletter>>

  beforeEach(() => {
    wrapper = mount(FooterNewsletter)
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct component name', () => {
    expect(wrapper.vm.$options.name).toBe('NewsletterForm')
  })

  it('renders newsletter title', () => {
    const title = wrapper.find('.newsletter__title')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Join our Newsletter')
  })

  it('renders newsletter description', () => {
    const description = wrapper.find('.newsletter__description')
    expect(description.exists()).toBe(true)
    expect(description.text()).toContain('Nulla ac convallis lorem')
  })

  it('renders email input field', () => {
    const input = wrapper.find('input[type="email"]')
    expect(input.exists()).toBe(true)
    expect(input.attributes('placeholder')).toBe('Your E-mail')
  })

  it('renders submit button', () => {
    const button = wrapper.find('button[type="submit"]')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Submit')
  })

  it('has email data property', () => {
    expect(wrapper.vm.email).toBeDefined()
    expect(wrapper.vm.email).toBe('')
  })
})

describe('FooterNavigation Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof FooterNavigation>>

  beforeEach(() => {
    wrapper = mount(FooterNavigation)
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct component name', () => {
    expect(wrapper.vm.$options.name).toBe('FooterLinkGroup')
  })

  it('renders navigation columns', () => {
    const columns = wrapper.findAll('.footer-navigation__column')
    expect(columns.length).toBe(3)
  })

  it('renders Navigate section', () => {
    const navigateTitle = wrapper.find('.footer-navigation__title')
    expect(navigateTitle.text()).toBe('Navigate')

    const navigateItems = wrapper.findAll('.footer-navigation__item')
    expect(navigateItems.length).toBeGreaterThan(0)
  })

  it('renders copyright with current year', () => {
    const copyright = wrapper.find('.footer-navigation__copyright')
    const currentYear = new Date().getFullYear()
    expect(copyright.text()).toContain(`Copyright © All Rights Reserved ${currentYear}`)
  })

  it('has currentYear data property', () => {
    const currentYear = new Date().getFullYear()
    expect(wrapper.vm.currentYear).toBe(currentYear)
  })
})

describe('FooterInfo Component', () => {
  let wrapper: VueWrapper<InstanceType<typeof FooterInfo>>

  beforeEach(() => {
    wrapper = mount(FooterInfo, {
      global: {
        stubs: {
          'font-awesome-icon': true,
        },
      },
    })
  })

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has the correct component name', () => {
    expect(wrapper.vm.$options.name).toBe('FooterInfo')
  })

  it('renders address information', () => {
    const address = wrapper.find('.footer-info__address')
    expect(address.exists()).toBe(true)
    expect(address.text()).toContain('399 Crowfield Road')
    expect(address.text()).toContain('Phoenix, Arizona 85012')
  })

  it('renders website information', () => {
    const website = wrapper.find('.footer-info__website')
    expect(website.exists()).toBe(true)
    expect(website.text()).toBe('asffefdsfsdc.com')
  })

  it('renders phone information', () => {
    const phone = wrapper.find('.footer-info__phone')
    expect(phone.exists()).toBe(true)
    expect(phone.text()).toBe('+602-926-5809')
  })

  it('renders social media section', () => {
    const socialsTitle = wrapper.find('.footer-info__title')
    expect(socialsTitle.exists()).toBe(true)
    expect(socialsTitle.text()).toBe('Get social')
  })

  it('renders social media links', () => {
    const socialLinks = wrapper.findAll('.footer-social__link')
    expect(socialLinks.length).toBe(4) // Facebook, Twitter, Instagram, Pinterest
  })
})
