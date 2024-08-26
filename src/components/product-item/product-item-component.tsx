import { FunctionComponent } from 'react'
import Product from '../../types/products.types'
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.style'

interface ProductItemProps {
  product: Product
}
const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
