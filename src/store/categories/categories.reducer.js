import CATEGORIES_ACTION_TYPE from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: true
}

const categoriesReducer = (state = INITIAL_STATE, action={}) => {
  const {type, payload} = action

  switch(type){
    case (CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_START): {
      return {
        ...state,
        isLoading: true
      }
    }
    case (CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_SUCCESS):
      return {
        ...state,
        categories: payload,
        isLoading: false
      }
    
    case (CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_FAILURE):
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    
    default:
      return state
  }
}

export default categoriesReducer