import { ActionsType, InitialStateType, ReducerConst } from '../types/ACTypes'

let initialState: InitialStateType = {
  dateFromAPIRequest: '',
  currencyUsdEurForRub: {},
  currencyList: {},
  baseCurrencyFromAPIRequest: '',
  currentRUB: 1,
  startValueForInput: 1, 
  countRUB: 0,
  currencyListBaseRub: {},
  listHistoricalRates: null,
  load: false
}


const convertorReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ReducerConst.GET_RATE:
      return {
        ...state,
        dateFromAPIRequest: action.dateFromAPIRequest,
        currencyUsdEurForRub: action.currencyUsdEur,
        currencyList: action.currencyList,
        baseCurrencyFromAPIRequest: action.baseCurrencyFromAPIRequest
      }
    case ReducerConst.SET_CURRENT_RUB:
      return {
        ...state,
        currentRUB: action.value,
      }
    case ReducerConst.CHANGE_COUNT_RUB:
      return {
        ...state,
        countRUB: action.value,
      }
    case ReducerConst.CURRENCY_LIST_BASE_RUB:
      return {
        ...state,
        currencyListBaseRub: action.currencyListBaseRub
      }
    case ReducerConst.LIST_HISTORICAL_RATES:
      return {
        ...state,
        listHistoricalRates: action.listHistoricalRates
      }
    case ReducerConst.RESET_HISTORICAL_RATES:
      return {
        ...state,
        listHistoricalRates: null
      }
    case ReducerConst.SET_LOADER:
      return {
        ...state,
        load: action.val
      }
    default: return state
  }
}

export default convertorReducer
