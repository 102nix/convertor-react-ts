import { Action } from 'redux'
import { AxiosResponse } from 'axios'

export interface getHistoricalRateAction extends Action { 
  valueHistoricalRate: string
  getHistoricalRate(valueHistoricalRate: string): Promise<AxiosResponse<any>>
}

export interface getDynamicRateAction extends Action { 
  pateOfURL: string
  getDynamicsRate(pateOfURL: string): Promise<AxiosResponse<any>>
}