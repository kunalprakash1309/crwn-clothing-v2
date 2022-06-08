import { takeLatest, call, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.actions'

import CATEGORIES_ACTION_TYPE from './categories.types'

export function* fetchCategoriesAsync() {
  try {
                      // call is the effect inside generator function that invokes the method
    const categories = yield call(getCategoriesAndDocuments, 'categories')
          // put is resemble to dispatch effect. It is the effect for creating actions
    yield put(fetchCategoriesSuccess(categories))
  } catch (error) {
    yield put(fetchCategoriesFailure(error))
  }
}

// It also listen for "FETCH_COLLECTION_START" like categoriesReducer. Inspite it fires fetchCategoriesAsync()
export function* fetchCategoriesSaga() {

  // listen to latest action of specific type we pass to it
  yield takeLatest(
    CATEGORIES_ACTION_TYPE.FETCH_COLLECTION_START,
    fetchCategoriesAsync
  )
}