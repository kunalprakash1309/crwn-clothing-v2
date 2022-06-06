import { Fragment } from "react"
import { useSelector } from "react-redux"
import CategoryPreview from "../../components/category-preview/category-preview.component"
import Spinner from "../../components/spinner/spinner.component"
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector"


const CategoriesPreview = () => {

  const categoriesMap  = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)

  return (
    <Fragment>
      {
        isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key]
            return <CategoryPreview key={key} title={key} products={products} />
          })
        )
      }
    </Fragment>
  )
}

export default CategoriesPreview
