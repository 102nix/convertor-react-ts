import { call, put, takeEvery } from 'redux-saga/effects'
import { ConvertorAPI } from '../../api/api'
import { getDynamicRateAction } from '../../types/sagaInterfaces'
import { setCurrentRUB } from '../convertorAC'
import { GET_DYNAMIC_RATE_SAGA } from '../convertorReducer'

function* fetchDynamicRate (action: getDynamicRateAction) {
  try {
    const response = yield call(ConvertorAPI.getDynamicsRate, action.pateOfURL)
    yield put (setCurrentRUB(response.data.rates['RUB']))
  } catch (err) {
    console.log(err)
  }
}

export function* fetchDynamicRateWatcher () {
  yield takeEvery (GET_DYNAMIC_RATE_SAGA, fetchDynamicRate)
}