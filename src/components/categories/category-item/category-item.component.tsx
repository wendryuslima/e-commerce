import Category from '../../../types/categories.types'
import { FunctionComponent } from 'react'
interface CategoryItemPropos {
  category: Category
}

//Styles
import './category-item-style.css'

const CategoryItem: FunctionComponent<CategoryItemPropos> = ({ category }) => {
  return (
    <div className='category-item-conteiner'>
      <div className='category-name'>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
