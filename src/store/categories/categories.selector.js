import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
)

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)





// what we are doing is that initially we are getting modified collection i.e categorieMap and the we select it from selector function
// but now we are purely fetching only data as original array not as modified and here we are modifying it as map. 
// because if another component need different form of data then we can modify the data as our condition 


// export const selectCategoriesMap = (state) => {
//
//   // whenever reducer runs then all the useSelector hook will get fired
//   // whenever we mount shop or category route it runs every time which calculate data every time from start.
//   // It waste our resource so we use reselect library
//
//   console.log("selector fired")
//   const categoriesMap = state.categories.categories.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   )

//   return categoriesMap
// }