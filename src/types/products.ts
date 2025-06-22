export default interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: {
    id: number
    name: string
    image: string
    slug: string
  }
  images: string[]
}

export interface ProductsState {
  items: Product[]
  loading: boolean
  error: string | null
}
