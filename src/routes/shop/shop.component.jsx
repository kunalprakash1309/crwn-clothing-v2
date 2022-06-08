import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { fetchCategoriesStart } from '../../store/categories/categories.actions'


import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

// only problem is that whenever shop mounts it fetch data everytime and run selector
const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />}/>
    </Routes>
  )
}

export default Shop
