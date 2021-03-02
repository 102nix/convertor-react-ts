export interface IObject {
  [key: string]: number 
}
export type RateStatePropsType = {
  dateFromAPIRequest: string
  currencyUsdEurForRub: IObject
  baseCurrencyFromAPIRequest: string
  currencyListBaseRub: IObject
}
export type RateDispatchPropsType = {
  setRateSaga(): void 
}

export type CalcStatePropsType = {
  currentRUB: number 
  startValueForInput: number
  countRUB: number
  currencyList: IObject
}
export type CalcDispachPropsType = {
  getDynamicRateSaga(partOfURL: string): void
  changeCountRUB(val: number): void
}

export type TableCurrencyContainerPropsType = {
  currencyListBaseRub: { [key: string]: number }
}

export type HistoricalRatesPropsType = {
  listHistoricalRates: null | { [key: string]: number }
  load: boolean
}
export type HistoricalRatesDispatcProps = {
  SetHistoricalRateSaga(dataForm: string): void
  resetHistoricalRates(): void
  setLoader(val: boolean): void
}
export type FormInData = {
  exchangeRateDate: string
}
export type FormHistoricalContainerProps = {
  onSubmit(dataForm: FormInData): void
  resetExchangeRateDate(): void
  load: boolean
}

