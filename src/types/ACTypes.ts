import { actions } from "../redux/convertorAC"
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

type PropertiesType<T> = T extends {[key: string]: infer U}? U : never

export type ActionsType = ReturnType<PropertiesType<typeof actions>>

  
