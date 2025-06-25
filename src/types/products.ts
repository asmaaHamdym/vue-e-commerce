export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  images: string
  rating: {
    rate: number
    count: number
  }
}

export interface ProductsState {
  items: Product[]
  currentProduct: Product | null
  loading: boolean
  error: string | null
}
export interface ToggleMobileMenu {
  mobile: boolean
  mobileNav: boolean
  windowWidth: number
  isCartOpen: boolean
}
