import Product from "./products.types"

interface Category {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}

export default Category
