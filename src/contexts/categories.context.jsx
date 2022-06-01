import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  // when we want to run async call in useEffect this is wrong way
  // useEffect(async() => {}, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');

      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}

export default CategoriesProvider