import { FunctionComponent } from 'react'
import Header from '../../components/header/header.components'
import CategoriesOverview from '../../components/categories-overview/categories-overview-components'
import CategoryOverview from '../../components/category-overview/category-overview-components'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
      <CategoryOverview />
    </>
  )
}

export default ExplorePage
