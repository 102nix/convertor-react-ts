import { IObject } from "./componentTypes"

export enum ReducerConst {
GET_RATE = 'GET_RATE',
SET_CURRENT_RUB = 'SET_CURRENT_RUB',
CHANGE_COUNT_RUB = 'CHANGE_COUNT_RUB',
CURRENCY_LIST_BASE_RUB = 'CURRENCY_LIST_BASE_RUB',
LIST_HISTORICAL_RATES = 'LIST_HISTORICAL_RATES',
RESET_HISTORICAL_RATES = 'RESET_HISTORICAL_RATES',
SET_LOADER = 'SET_LOADER',
SET_RATE_SAGA = 'SET_RATE_SAGA',
GET_DYNAMIC_RATE_SAGA = 'GET_DYNAMIC_RATE_SAGA', 
SET_HISTORICAL_RATE_SAGA = 'SET_HISTORICAL_RATE_SAGA'
}

export type InitialStateType = {
  dateFromAPIRequest: string
  currencyUsdEurForRub: IObject
  currencyList: IObject
  baseCurrencyFromAPIRequest: string
  currentRUB: number
  startValueForInput: number 
  countRUB: number
  currencyListBaseRub: IObject
  listHistoricalRates: null  | IObject
  load: boolean
  historicalValue: string
}

export type getRateType = {
  type: ReducerConst.GET_RATE
  dateFromAPIRequest: string
  currencyUsdEur: IObject
  currencyList: IObject
  baseCurrencyFromAPIRequest: any
}
export type SetCurrentRUBType = {
  type: ReducerConst.SET_CURRENT_RUB
  value: number 
}
export type ChangeCountRUBType = {
  type: ReducerConst.CHANGE_COUNT_RUB
  value: number 
}
export type SetCurrencyListBaseRubType = {
  type: ReducerConst.CURRENCY_LIST_BASE_RUB
  currencyListBaseRub: IObject
}
export type SetListHistoricalRatesType = {
  type: ReducerConst.LIST_HISTORICAL_RATES
  listHistoricalRates: IObject
}
export type ResetHistoricalRatesType = {
  type: ReducerConst.RESET_HISTORICAL_RATES
}
export type SetLoaderType = {
  type: typeof ReducerConst.SET_LOADER
  val: boolean
}
export type SetRateSagaType = {
  type: ReducerConst.SET_RATE_SAGA
}
export type getDynamicRateSagaType = {
  type: ReducerConst.GET_DYNAMIC_RATE_SAGA
  pateOfURL: string
}
export type SetHistoricalRateSagaType = {
  type: ReducerConst.SET_HISTORICAL_RATE_SAGA
  valueHistoricalRate: string
}
export type ActionsType = getRateType | SetCurrentRUBType | ChangeCountRUBType | SetCurrencyListBaseRubType | SetListHistoricalRatesType | ResetHistoricalRatesType | SetLoaderType | getDynamicRateSagaType | SetHistoricalRateSagaType 