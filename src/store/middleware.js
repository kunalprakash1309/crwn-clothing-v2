// Middleware is in the form of () => () => () => {} (i.e currying function)
export const loggerMiddleware = (store) => (next) => (action) => {
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

// Thunks are action creater that returns a function that gets the dispatch parameter

// Thunk is a middleware which keep eye on all actions when it found such actions which return function(with dispatch parameter) inspite of object

// const thunkMiddleware = (store) => (next) => (action) =>  {
//   if(typeof(action) === 'function'){
//     action(dispatch)
//   }
// }
