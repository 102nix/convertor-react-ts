import { call, put, takeEvery } from 'redux-saga/effects'
import { ConvertorAPI } from '../../api/api'
import { setRate, setCurrencyListBaseRub } from '../convertorAC'
import { SET_RATE_SAGA } from '../convertorReducer'


function* fetchRate (action) {
  try {
    const responseUsd          = yield call(ConvertorAPI.getRateUsd)
    const responseEur          = yield call(ConvertorAPI.getRateEur)
    const responseRub          = yield call(ConvertorAPI.getRateRub)
    const responseCurrencyList = yield call(ConvertorAPI.getRate)
    yield put (setRate(
      responseUsd.data.date, 
      {'&#36;' : responseUsd.data.rates['RUB'], '&#8364;' : responseEur.data.rates['RUB']}, 
      responseCurrencyList.data.rates, 
      responseCurrencyList.data.base)
    )
    yield put (setCurrencyListBaseRub(responseRub.data.rates))
  } catch (err) {
    console.log(err)
  }
}

export function* fetchRateWatcher () {
  yield takeEvery (SET_RATE_SAGA, fetchRate)
}
