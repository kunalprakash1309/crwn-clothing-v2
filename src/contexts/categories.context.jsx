import { createContext, useEffect, useReducer} from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CATEGORIES_ACTION_TYPE = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP'
}

const INITIAL_STATE = {
  categoriesMap: {}
}

export const categoriesReducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case (CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP):
      return {
        ...state,
        categoriesMap: payload
      }
    
    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`)
    
  }
}

export const CategoriesProvider = ({children}) => {

  const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)

  // when we want to run async call in useEffect this is wrong way
  // useEffect(async() => {}, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');

      dispatch({
        type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP,
        payload: categoryMap
      })
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return(
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}

export default CategoriesProvider