import { all, call } from 'redux-saga/effects'
import { fetchCategoriesSaga } from './categories/categories.saga'
import { userSagas } from './user/user.sagas'

export function* rootSaga() {
  yield all([call(fetchCategoriesSaga), call(userSagas)])
}