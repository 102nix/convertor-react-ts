import { ThunkAction } from 'redux-thunk';
import { ConvertorAPI } from '../api/api';
import { AppStateType } from './store';

const GET_RATE = 'GET_RATE'
const SET_CURRENT_RUB = 'SET_CURRENT_RUB'
const CHANGE_COUNT_RUB = 'CHANGE_COUNT_RUB'
const CURRENCY_LIST_BASE_RUB = 'CURRENCY_LIST_BASE_RUB'
const LIST_HISTORICAL_RATES = 'LIST_HISTORICAL_RATES'
const RESET_HISTORICAL_RATES = 'RESET_HISTORICAL_RATES'
const SET_LOADER = 'SET_LOADER' 

export interface IObject {
  [key: string]: number 
}

// export type InitialStateType = {
//   dateFromAPIRequest: string
//   currencyUsdEurForRub: IObject
//   currencyList: IObject
//   baseCurrencyFromAPIRequest: any
//   currentRUB: number,
//   startValueForInput: number,
//   countRUB: number,
//   currencyListBaseRub: IObject
//   listHistoricalRates: null | IObject
//   load: boolean
// }

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

type ActionsType = getRateType | SetCurrentRUBType | ChangeCountRUBType | SetCurrencyListBaseRubType | SetListHistoricalRatesType | ResetHistoricalRatesType | SetLoaderType

type getRateType = {
  type: typeof GET_RATE
  dateFromAPIRequest: string
  currencyUsdEur: IObject
  currencyList: IObject
  baseCurrencyFromAPIRequest: any
}
type SetCurrentRUBType = {
  type: typeof SET_CURRENT_RUB
  value: number 
}
type ChangeCountRUBType = {
  type: typeof CHANGE_COUNT_RUB
  value: number 
}
type SetCurrencyListBaseRubType = {
  type: typeof CURRENCY_LIST_BASE_RUB
  currencyListBaseRub: IObject
}
type SetListHistoricalRatesType = {
  type: typeof LIST_HISTORICAL_RATES
  listHistoricalRates: IObject
}
type ResetHistoricalRatesType = {
  type: typeof RESET_HISTORICAL_RATES
}
type SetLoaderType = {
  type: typeof SET_LOADER
  val: boolean
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setRate = 
  (dateFromAPIRequest: string, currencyUsdEur: IObject, currencyList: IObject, baseCurrencyFromAPIRequest: any): 
  getRateType => ({type: GET_RATE, dateFromAPIRequest, currencyUsdEur, currencyList, baseCurrencyFromAPIRequest})
export const setCurrentRUB = (value: number): SetCurrentRUBType => ({type: SET_CURRENT_RUB, value})
export const changeCountRUB = (value: number): ChangeCountRUBType => ({type: CHANGE_COUNT_RUB, value})
export const setCurrencyListBaseRub = (currencyListBaseRub: IObject):SetCurrencyListBaseRubType => ({type: CURRENCY_LIST_BASE_RUB, currencyListBaseRub})
export const SetListHistoricalRates = (listHistoricalRates: IObject):SetListHistoricalRatesType => ({type: LIST_HISTORICAL_RATES, listHistoricalRates})
export const resetHistoricalRates = (): ResetHistoricalRatesType => ({type: RESET_HISTORICAL_RATES})
export const setLoader = (val: boolean): SetLoaderType => ({type: SET_LOADER, val})

export const onGetRate = (): ThunkType => async (dispatch) => {
  try {
    const responseUsd = await ConvertorAPI.getRateUsd()
    const responseEur = await ConvertorAPI.getRateEur()
    const responseRub = await ConvertorAPI.getRateRub()
    const responseCurrencyList = await ConvertorAPI.getRate()
    const dateFromAPIRequest: string = responseUsd.data.date
    let currencyUsdEur: IObject = {}
    currencyUsdEur['&#36;'] = responseUsd.data.rates['RUB']
    currencyUsdEur['&#8364;'] = responseEur.data.rates['RUB']
    dispatch(setRate(dateFromAPIRequest, currencyUsdEur, responseCurrencyList.data.rates, responseCurrencyList.data.base))
    dispatch(setCurrencyListBaseRub(responseRub.data.rates))
  } catch (error) {
    console.log(error)
  }
}

export const onGetDynamicsRate = (pateOfURL: string): ThunkType => async (dispatch) => {
  try {
    const response = await ConvertorAPI.getDynamicsRate(pateOfURL)
    const currentRUB: number = response.data.rates['RUB']
    dispatch(setCurrentRUB(currentRUB))
  } catch (error) {
    console.log(error)
  }
}
export const onHistoricalRate = (valueHistoricalRate: string): ThunkType => async (dispatch) => {
  try {
    const response = await ConvertorAPI.getHistoricalRate(valueHistoricalRate)
    dispatch(SetListHistoricalRates(response.data.rates))
    dispatch(setLoader(false))
  } catch (error) {
    console.log(error)
    dispatch(setLoader(false))
  }
}

export default convertorReducer
