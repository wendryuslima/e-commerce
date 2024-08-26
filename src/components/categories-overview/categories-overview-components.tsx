import { FunctionComponent, useContext } from 'react'
import { Container } from './categories-overview.styles'
import { CategoryContext } from '../../contexts/category.context'
import CategoryOverview from '../category-overview/category-overview-components'

const CategoriesOverview: FunctionComponent = () => {
  const { categories } = useContext(CategoryContext)
  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview category={category} key={category.id} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
