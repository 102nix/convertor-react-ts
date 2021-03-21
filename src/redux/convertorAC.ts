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
  SetHistoricalRateSagaType,
  ReducerConst } from "../types/ACTypes"
import { IObject } from "../types/componentTypes"


export const setRate = 
  (dateFromAPIRequest: string, currencyUsdEur: IObject, currencyList: IObject, baseCurrencyFromAPIRequest: any): 
  getRateType => ({type: ReducerConst.GET_RATE, dateFromAPIRequest, currencyUsdEur, currencyList, baseCurrencyFromAPIRequest})
export const setCurrentRUB = (value: number): SetCurrentRUBType => ({type: ReducerConst.SET_CURRENT_RUB, value})
export const changeCountRUB = (value: number): ChangeCountRUBType => ({type: ReducerConst.CHANGE_COUNT_RUB, value})
export const setCurrencyListBaseRub = (currencyListBaseRub: IObject):SetCurrencyListBaseRubType => ({type: ReducerConst.CURRENCY_LIST_BASE_RUB, currencyListBaseRub})
export const SetListHistoricalRates = (listHistoricalRates: IObject):SetListHistoricalRatesType => ({type: ReducerConst.LIST_HISTORICAL_RATES, listHistoricalRates})
export const resetHistoricalRates = (): ResetHistoricalRatesType => ({type: ReducerConst.RESET_HISTORICAL_RATES})
export const setLoader = (val: boolean): SetLoaderType => ({type: ReducerConst.SET_LOADER, val})
export const setRateSaga = (): SetRateSagaType => ({type: ReducerConst.SET_RATE_SAGA})
export const getDynamicRateSaga = (pateOfURL: string): getDynamicRateSagaType => ({type: ReducerConst.GET_DYNAMIC_RATE_SAGA, pateOfURL})
export const setHistoricalRateSaga = (valueHistoricalRate: string): SetHistoricalRateSagaType => ({type: ReducerConst.SET_HISTORICAL_RATE_SAGA, valueHistoricalRate})