import axios from 'axios';

const API_URL = 'https://api.exchangeratesapi.io/latest?base=KRW'
const API_URL_RUB = 'https://api.exchangeratesapi.io/latest?base=RUB&symbols=AUD,GBP,USD,EUR,CAD,TRY,JPY,CHF,BRL,INR,SEK,SGD,CZK'
const API_URL_USD = 'https://api.exchangeratesapi.io/latest?base=USD'
const API_URL_EUR = 'https://api.exchangeratesapi.io/latest?base=EUR'

export const ConvertorAPI = {
  getRate () {
    return axios.get<Object>(API_URL)
  },
  getRateRub () {
    return axios.get<Object>(API_URL_RUB)
  },
  getRateUsd () {
    return axios.get<Object>(API_URL_USD)
  },
  getRateEur () {
    return axios.get<Object>(API_URL_EUR)
  },
  getDynamicsRate(patOfURL: string) {
    return axios.get<Object>(`https://api.exchangeratesapi.io/latest?base=${patOfURL}`)
  },
  getHistoricalRate(valueHistoricalRate: string) {
    return axios.get<Object>(`https://api.exchangeratesapi.io/${valueHistoricalRate}?base=RUB`)
  }
}

