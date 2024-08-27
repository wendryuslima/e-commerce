import { FunctionComponent, useContext, useEffect } from 'react'
import { Container } from './categories-overview.styles'
import { CategoryContext } from '../../contexts/category.context'
import CategoryOverview from '../category-overview/category-overview-components'
import Loading from '../loading/loading.component'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />
  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview category={category} key={category.id} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
