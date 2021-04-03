import axios from 'axios';

const API_KEY = 'de1bd33d355507d1a214294c9c00d732'
const API_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=de1bd33d355507d1a214294c9c00d732&format=1`
const API_URL_RUB = 'http://api.exchangeratesapi.io/v1/latest?access_key=de1bd33d355507d1a214294c9c00d732&format=1&symbols=AUD,GBP,USD,EUR,CAD,TRY,JPY,CHF,BRL,INR,SEK,SGD,CZK'
const API_URL_USD = 'http://api.exchangeratesapi.io/v1/latest?access_key=de1bd33d355507d1a214294c9c00d732&format=1'
const API_URL_EUR = 'http://api.exchangeratesapi.io/v1/latest?access_key=de1bd33d355507d1a214294c9c00d732&format=1&base=EUR'

export const ConvertorAPI = {
  getRate () {
    return axios.get<any>(API_URL)
  },
  getRateRub () {
    return axios.get<any>(API_URL_RUB)
  },
  getRateUsd () {
    return axios.get<any>(API_URL_USD)
  },
  getRateEur () {
    return axios.get<any>(API_URL_EUR)
  },
  getDynamicsRate(patOfURL: string) {
    return axios.get<any>(`http://api.exchangeratesapi.io/v1/latest?access_key=de1bd33d355507d1a214294c9c00d732&format=1`)
  },
  getHistoricalRate(valueHistoricalRate: string) {
    return axios.get<any>(`https://api.exchangeratesapi.io/${valueHistoricalRate}`)
  }
}

