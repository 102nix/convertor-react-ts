import { call, put, takeEvery } from 'redux-saga/effects'
import { ConvertorAPI } from '../../api/api'
import { ReducerConst } from '../../types/ACTypes'
import { getHistoricalRateAction } from '../../types/sagaInterfaces'
import { SetListHistoricalRates, setLoader } from '../convertorAC'

function* fetchHistoricalRate (action: getHistoricalRateAction) { 
  try {
    const response = yield call (ConvertorAPI.getHistoricalRate, action.valueHistoricalRate)
    yield put (SetListHistoricalRates(response.data.rates))
    yield put (setLoader(false))
  } catch (err) {
    console.log(err)
  }
}

export function* fetchHistoricalRateWatcher () {
  yield takeEvery (ReducerConst.SET_HISTORICAL_RATE_SAGA, fetchHistoricalRate)
}