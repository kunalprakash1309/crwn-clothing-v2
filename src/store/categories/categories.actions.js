import CATEGORIES_ACTION_TYPE from "./categories.types"

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
  payload: categories
})