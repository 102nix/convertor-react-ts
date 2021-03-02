import { all } from 'redux-saga/effects'
import { fetchRateWatcher } from './getRateSaga'
import { fetchDynamicRateWatcher } from './getDynamicsRateSaga'
import { fetchHistoricalRateWatcher } from './getHistoricalRate'

export function* rootWatcher () {
  yield all ([fetchRateWatcher(), fetchDynamicRateWatcher(), fetchHistoricalRateWatcher()])
}