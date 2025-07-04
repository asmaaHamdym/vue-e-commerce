// interface for products
export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface ProductsState {
  items: Product[]
  selectedProduct: Product | null
  loading: boolean
  error: string | null
}
// interface for Hamburger menu
export interface MobileMenu {
  mobile: boolean
  mobileNav: boolean
  windowWidth: number
  isCartOpen: boolean
}
//  interface for cart
export interface CartItem {
  product: Product
  quantity: number
}
export interface CartState {
  products: CartItem[]
  total: number
}
