import CATEGORIES_ACTION_TYPE from "./categories.types";

const INITIAL_STATE = {
  categories: []
}

const categoriesReducer = (state = INITIAL_STATE, action={}) => {
  const {type, payload} = action

  switch(type){
    case (CATEGORIES_ACTION_TYPE.SET_CATEGORIES):
      return {
        ...state,
        categories: payload
      }
    
    default:
      return state
  }
}

export default categoriesReducer