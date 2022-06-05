import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setCategories } from '../../store/categories/categories.actions'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

// only problem is that whenever shop mounts it fetch data everytime and run selector
const Shop = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments('categories');

      dispatch(setCategories(categories))
    }

    getCategoriesMap()
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />}/>
    </Routes>
  )
}

export default Shop
