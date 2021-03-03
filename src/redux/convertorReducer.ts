import { ActionsType } from '../types/ACTypes'
import { IObject } from '../types/componentTypes'

export const GET_RATE = 'GET_RATE'
export const SET_CURRENT_RUB = 'SET_CURRENT_RUB' 
export const CHANGE_COUNT_RUB = 'CHANGE_COUNT_RUB'
export const CURRENCY_LIST_BASE_RUB = 'CURRENCY_LIST_BASE_RUB'
export const LIST_HISTORICAL_RATES = 'LIST_HISTORICAL_RATES'
export const RESET_HISTORICAL_RATES = 'RESET_HISTORICAL_RATES'
export const SET_LOADER = 'SET_LOADER' 
export const SET_RATE_SAGA = 'SET_RATE_SAGA'
export const GET_DYNAMIC_RATE_SAGA = 'GET_DYNAMIC_RATE_SAGA' 
export const SET_HISTORICAL_RATE_SAGA = 'SET_HISTORICAL_RATE_SAGA'

let initialState = {
  dateFromAPIRequest: '',
  currencyUsdEurForRub: {} as IObject,
  currencyList: {} as IObject,
  baseCurrencyFromAPIRequest: '',
  currentRUB: 1,
  startValueForInput: 1, 
  countRUB: 0,
  currencyListBaseRub: {} as IObject,
  listHistoricalRates: null  as IObject | null,
  load: false
}

export type InitialStateType = typeof initialState

const convertorReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case GET_RATE:
      return {
        ...state,
        dateFromAPIRequest: action.dateFromAPIRequest,
        currencyUsdEurForRub: action.currencyUsdEur,
        currencyList: action.currencyList,
        baseCurrencyFromAPIRequest: action.baseCurrencyFromAPIRequest
      }
    case SET_CURRENT_RUB:
      return {
        ...state,
        currentRUB: action.value,
      }
    case CHANGE_COUNT_RUB:
      return {
        ...state,
        countRUB: action.value,
      }
    case CURRENCY_LIST_BASE_RUB:
      return {
        ...state,
        currencyListBaseRub: action.currencyListBaseRub
      }
    case LIST_HISTORICAL_RATES:
      return {
        ...state,
        listHistoricalRates: action.listHistoricalRates
      }
    case RESET_HISTORICAL_RATES:
      return {
        ...state,
        listHistoricalRates: null
      }
    case SET_LOADER:
      return {
        ...state,
        load: action.val
      }
    default: return state
  }
}

export default convertorReducer
