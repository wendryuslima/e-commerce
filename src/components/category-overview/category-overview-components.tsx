import { FunctionComponent } from 'react'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.style'
import Category from '../../types/categories.types'
import ProductItem from '../product-item/product-item-component'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
