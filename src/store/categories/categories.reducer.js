import CATEGORIES_ACTION_TYPE from "./categories.types";

const INITIAL_STATE = {
  categoriesMap: {}
}

const categoriesReducer = (state = INITIAL_STATE, action={}) => {
  const {type, payload} = action

  switch(type){
    case (CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP):
      return {
        ...state,
        categoriesMap: payload
      }
    
    default:
      return state
  }
}

export default categoriesReducer