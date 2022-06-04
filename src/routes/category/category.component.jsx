import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoryContainer, Title } from './category.styles'

import { selectCategoriesMap } from '../../store/categories/categories.selector'


const Category = () => {
  const { category } = useParams()
  const categoriesMap  = useSelector(selectCategoriesMap)

  // one Way
  // const products = categoriesMap[category]

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {
          products && products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category