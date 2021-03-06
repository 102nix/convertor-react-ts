import { IObject } from "./componentTypes"

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
export type CalcTypes = CalcStatePropsType & CalcDispachPropsType