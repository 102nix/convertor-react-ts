import { 
  ChangeCountRUBType, 
  getRateType, 
  ResetHistoricalRatesType, 
  SetCurrencyListBaseRubType, 
  SetCurrentRUBType, 
  getDynamicRateSagaType, 
  SetListHistoricalRatesType, 
  SetLoaderType, 
  SetRateSagaType, 
  SetHistoricalRateSagaType} from "../types/ACTypes"
import { IObject } from "../types/componentTypes"
import { 
  CHANGE_COUNT_RUB, 
  CURRENCY_LIST_BASE_RUB, 
  GET_RATE, 
  LIST_HISTORICAL_RATES, 
  RESET_HISTORICAL_RATES, 
  SET_CURRENT_RUB, 
  SET_CURRENT_RUB_SAGA, 
  SET_LOADER, 
  SET_RATE_SAGA,
  SET_HISTORICAL_RATE_SAGA } from "./convertorReducer" 


export const setRate = 
  (dateFromAPIRequest: string, currencyUsdEur: IObject, currencyList: IObject, baseCurrencyFromAPIRequest: any): 
  getRateType => ({type: GET_RATE, dateFromAPIRequest, currencyUsdEur, currencyList, baseCurrencyFromAPIRequest})
export const setCurrentRUB = (value: number): SetCurrentRUBType => ({type: SET_CURRENT_RUB, value})
export const changeCountRUB = (value: number): ChangeCountRUBType => ({type: CHANGE_COUNT_RUB, value})
export const setCurrencyListBaseRub = (currencyListBaseRub: IObject):SetCurrencyListBaseRubType => ({type: CURRENCY_LIST_BASE_RUB, currencyListBaseRub})
export const SetListHistoricalRates = (listHistoricalRates: IObject):SetListHistoricalRatesType => ({type: LIST_HISTORICAL_RATES, listHistoricalRates})
export const resetHistoricalRates = (): ResetHistoricalRatesType => ({type: RESET_HISTORICAL_RATES})
export const setLoader = (val: boolean): SetLoaderType => ({type: SET_LOADER, val})
export const setRateSaga = (): SetRateSagaType => ({type: SET_RATE_SAGA})
export const getDynamicRateSaga = (pateOfURL: string): getDynamicRateSagaType => ({type: SET_CURRENT_RUB_SAGA, pateOfURL})
export const SetHistoricalRateSaga = (valueHistoricalRate: string): SetHistoricalRateSagaType => ({type: SET_HISTORICAL_RATE_SAGA, valueHistoricalRate})