import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import { rootReducer } from './root-reducer'
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if(process.env.NODE_ENV !== 'production'){
  middlewares.push(logger)
}

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'] // try to comment this and check for any bug
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)