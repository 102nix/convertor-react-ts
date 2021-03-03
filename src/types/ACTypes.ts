import { 
  CHANGE_COUNT_RUB, 
  CURRENCY_LIST_BASE_RUB, 
  GET_RATE, 
  LIST_HISTORICAL_RATES, 
  RESET_HISTORICAL_RATES, 
  SET_CURRENT_RUB, 
  GET_DYNAMIC_RATE_SAGA, 
  SET_HISTORICAL_RATE_SAGA, 
  SET_LOADER, 
  SET_RATE_SAGA 
} from "../redux/convertorReducer"
import { IObject } from "./componentTypes"

export type getRateType = {
  type: typeof GET_RATE
  dateFromAPIRequest: string
  currencyUsdEur: IObject
  currencyList: IObject
  baseCurrencyFromAPIRequest: any
}
export type SetCurrentRUBType = {
  type: typeof SET_CURRENT_RUB
  value: number 
}
export type ChangeCountRUBType = {
  type: typeof CHANGE_COUNT_RUB
  value: number 
}
export type SetCurrencyListBaseRubType = {
  type: typeof CURRENCY_LIST_BASE_RUB
  currencyListBaseRub: IObject
}
export type SetListHistoricalRatesType = {
  type: typeof LIST_HISTORICAL_RATES
  listHistoricalRates: IObject
}
export type ResetHistoricalRatesType = {
  type: typeof RESET_HISTORICAL_RATES
}
export type SetLoaderType = {
  type: typeof SET_LOADER
  val: boolean
}
export type SetRateSagaType = {
  type: typeof SET_RATE_SAGA
}
export type getDynamicRateSagaType = {
  type: typeof GET_DYNAMIC_RATE_SAGA
  pateOfURL: string
}
export type SetHistoricalRateSagaType = {
  type: typeof SET_HISTORICAL_RATE_SAGA
  valueHistoricalRate: string
}
export type ActionsType = getRateType | SetCurrentRUBType | ChangeCountRUBType | SetCurrencyListBaseRubType | SetListHistoricalRatesType | ResetHistoricalRatesType | SetLoaderType | getDynamicRateSagaType | SetHistoricalRateSagaType