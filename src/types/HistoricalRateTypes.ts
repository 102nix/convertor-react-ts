export type HistoricalRatesPropsType = {
  listHistoricalRates: null | { [key: string]: number }
  load: boolean
}
export type HistoricalRatesDispatcProps = {
  setHistoricalRateSaga(dataForm: string): void
  resetHistoricalRates(): void
  setLoader(val: boolean): void
}
export type HistoricalRatesType = HistoricalRatesPropsType & HistoricalRatesDispatcProps

export type HistoricalFormDataType = {
  exchangeRateDate: string
}
export type FormHistoricalContainerType = {
  onSubmit(dataForm: HistoricalFormDataType): void
  resetExchangeRateDate(): void
  load: boolean
}