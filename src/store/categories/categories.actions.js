import CATEGORIES_ACTION_TYPE from "./categories.types"

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_START
})

export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_SUCCESS,
  payload: categories
})

export const fetchCategoriesFailure = (error) => ({
  type: CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_FAILURE,
  payload: error
})

// // Thunks are action creater that returns a function that gets the dispatch parameter
// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart())

//     try {
//       const categories = await getCategoriesAndDocuments('categories')
//       dispatch(fetchCategoriesSuccess(categories))
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error))
//     }
//   }
// }
