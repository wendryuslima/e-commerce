import { FunctionComponent } from 'react'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.style'
import Category from '../../types/categories.types'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
