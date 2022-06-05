import { compose, createStore, applyMiddleware} from "redux";
// import logger from "redux-logger";

import { rootReducer } from './root-reducer'

// Middleware is in the form of () => () => () => {} (i.e currying function)
const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type){
    return next(action)
  }

  console.log("Action: ", action.type)
  console.log("Payload: ", action.payload)
  console.log("Store: ", store.getState())

  // this will send action to reducer or next middleware
  next(action)

  // this prints after the store updated 
  console.log("Updated state: ", store.getState())
}

const middlewares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)