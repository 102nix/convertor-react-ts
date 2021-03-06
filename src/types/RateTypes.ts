import { IObject } from "./componentTypes"

export type RateStatePropsType = {
  dateFromAPIRequest: string
  currencyUsdEurForRub: IObject
  baseCurrencyFromAPIRequest: string
  currencyListBaseRub: IObject
}
export type RateDispatchPropsType = {
  setRateSaga(): void 
}
export type RateTypes = RateStatePropsType & RateDispatchPropsType