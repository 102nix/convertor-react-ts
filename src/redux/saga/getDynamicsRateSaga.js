import { call, put, takeEvery } from 'redux-saga/effects'
import { ConvertorAPI } from '../../api/api'
import { setCurrentRUB } from '../convertorAC'
import { SET_CURRENT_RUB_SAGA } from '../convertorReducer'

function* fetchDynamicRate (action) {
  try {
    const response = yield call(ConvertorAPI.getDynamicsRate, action.pateOfURL)
    const currentRUB = response.data.rates['RUB']
    yield put (setCurrentRUB(currentRUB))
  } catch (err) {
    console.log(err)
  }
}

export function* fetchDynamicRateWatcher () {
  yield takeEvery (SET_CURRENT_RUB_SAGA, fetchDynamicRate)
}