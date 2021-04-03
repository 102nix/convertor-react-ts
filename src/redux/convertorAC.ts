import { ReducerConst } from "../types/ACTypes"
import { IObject } from "../types/componentTypes"

export const actions = {
  setRate: (dateFromAPIRequest: string, currencyUsdEur: IObject, currencyList: IObject, baseCurrencyFromAPIRequest: any) => ({type: ReducerConst.GET_RATE, dateFromAPIRequest, currencyUsdEur, currencyList, baseCurrencyFromAPIRequest} as const ),
  setCurrentRUB: (value: number) => ({type: ReducerConst.SET_CURRENT_RUB, value} as const ),
  changeCountRUB: (value: number) => ({type: ReducerConst.CHANGE_COUNT_RUB, value} as const),
  setCurrencyListBaseRub: (currencyListBaseRub: IObject) => ({type: ReducerConst.CURRENCY_LIST_BASE_RUB, currencyListBaseRub} as const),
  SetListHistoricalRates: (listHistoricalRates: IObject) => ({type: ReducerConst.LIST_HISTORICAL_RATES, listHistoricalRates} as const),
  resetHistoricalRates: () => ({type: ReducerConst.RESET_HISTORICAL_RATES} as const),
  setLoader: (val: boolean) => ({type: ReducerConst.SET_LOADER, val} as const),
  setRateSaga: () => ({type: ReducerConst.SET_RATE_SAGA} as const),
  getDynamicRateSaga: (pateOfURL: string) => ({type: ReducerConst.GET_DYNAMIC_RATE_SAGA, pateOfURL} as const),
  setHistoricalRateSaga: (valueHistoricalRate: string) => ({type: ReducerConst.SET_HISTORICAL_RATE_SAGA, valueHistoricalRate} as const)
 
}
