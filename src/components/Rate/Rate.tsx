import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Html5Entities } from 'html-entities'
import './Rate.scss'
import { actions } from '../../redux/convertorAC'
//components:
import { Calc } from '../Calc/Calc'
import { TableCurrency } from '../TableCurrency/TableCurrency'
//types:
import { AppStateType } from '../../redux/store'

export const Rate: React.FC = () => {

  const htmlEntities = new Html5Entities() 
  
  useEffect(() => {
    dispatch(actions.setRateSaga())
  }, [])

  const dispatch = useDispatch()
  const dateFromAPIRequest = useSelector((state: AppStateType) => state.convertorReducer.dateFromAPIRequest)
  const currencyUsdEurForRub = useSelector((state: AppStateType) => state.convertorReducer.currencyUsdEurForRub)
  const currencyListBaseRub = useSelector((state: AppStateType) => state.convertorReducer.currencyListBaseRub)
  
  return (
    <div className="rate">
      <div className="row">
        <div className="col-12 title">
          Курс валют на {dateFromAPIRequest}
        </div>
      </div>
      <div className="row">
        {
          dateFromAPIRequest !== '' &&
          Object.keys(currencyUsdEurForRub).map(keyName => {
            return (
              <div className="col-12 col-lg-6">
                <div className="card card-flip h-100">
                  <div className="card-front text-white bg-dark">
                    <div className="card-body">
                        <i className="fa fa-search fa-5x float-right"></i>
                        <h3 className="card-title">{htmlEntities.decode(keyName)}</h3>
                        <div className="card-text">{currencyUsdEurForRub[keyName].toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="card-back bg-dark text-white">
                    <div className="card-body">
                        <div className="card-text">
                          Exchange rates API is a free service for current and historical foreign exchange 
                          rates published by the European Central Bank
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col-12 title">Калькулятор обмена</div>
        <Calc/>
      </div>
      <div className="row">
        {
          Object.keys(currencyUsdEurForRub).length === 0 &&
          <div className="col-12">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        <div className="col-12 title">Курсы валют Европейского Центрального банка</div>
          <TableCurrency currencyListBaseRub={currencyListBaseRub} />
      </div>
    </div>
  )
}


