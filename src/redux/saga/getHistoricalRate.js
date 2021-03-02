import { call, put, takeEvery } from 'redux-saga/effects'
import { ConvertorAPI } from '../../api/api'
import { SetListHistoricalRates, setLoader } from '../convertorAC'
import { SET_HISTORICAL_RATE_SAGA } from '../convertorReducer'


function* fetchHistoricalRate (action) {
  try {
    const response = yield call (ConvertorAPI.getHistoricalRate, action.valueHistoricalRate)
    yield put (SetListHistoricalRates(response.data.rates))
    yield put (setLoader(false))
  } catch (err) {
    console.log(err)
  }
}

export function* fetchHistoricalRateWatcher () {
  yield takeEvery (SET_HISTORICAL_RATE_SAGA, fetchHistoricalRate)
}