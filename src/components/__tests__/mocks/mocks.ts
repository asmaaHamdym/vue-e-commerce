// Mock Product props
export const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
  rating: {
    rate: 2.5,
    count: 26,
  },
  description: 'This is a test product description.',
}
// Mock FontAwesome icon component

export const mockFontAwesome = {
  template: '<i :class="starClass" :data-icon="iconType"></i>',
  props: ['icon'],
  computed: {
    iconType() {
      return 'star'
    },
    starClass() {
      return {
        product__star: true,
        filled: this.icon === 'fas fa-star',
        far: this.icon === 'far fa-star',
        fas: this.icon === 'fas fa-star',
      }
    },
  },
}
