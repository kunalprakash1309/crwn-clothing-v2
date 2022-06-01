import { createContext, useEffect, useState } from "react";
import SHOP_DATA from '../shop-data.js'

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: []
})

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])

  // when we want to run async call in useEffect this is wrong way
  // useEffect(async() => {}, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      console.log(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = {products}

  return(
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}

export default ProductProvider