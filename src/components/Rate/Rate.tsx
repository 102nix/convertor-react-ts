import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Html5Entities } from 'html-entities'
import './Rate.scss'
import { setRateSaga } from '../../redux/convertorAC'
//components:
import Calc from '../Calc/Calc'
import TableCurrency from '../TableCurrency/TableCurrency'
//types:
import { AppStateType } from '../../redux/store'
import { RateTypes, RateStatePropsType } from '../../types/RateTypes'

const Rate: React.FC<RateTypes> = props => {

  const htmlEntities = new Html5Entities() 

  useEffect(() => {
    props.setRateSaga()
  }, [])

  return (
    <div className="rate">
      <div className="row">
        <div className="col-12 title">
          Курс валют на {props.dateFromAPIRequest}
        </div>
      </div>
      <div className="row">
        {
          props.dateFromAPIRequest !== '' &&
          Object.keys(props.currencyUsdEurForRub).map(keyName => {
            return (
              <div className="col-12 col-lg-6">
                <div className="card card-flip h-100">
                  <div className="card-front text-white bg-dark">
                    <div className="card-body">
                        <i className="fa fa-search fa-5x float-right"></i>
                        <h3 className="card-title">{htmlEntities.decode(keyName)}</h3>
                        <div className="card-text">{props.currencyUsdEurForRub[keyName].toFixed(2)}</div>
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
          Object.keys(props.currencyUsdEurForRub).length === 0 &&
          <div className="col-12">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        <div className="col-12 title">Курсы валют Европейского Центрального банка</div>
        <TableCurrency currencyListBaseRub={props.currencyListBaseRub} />
      </div>
    </div>
  )
}
let mapStateToProps = (state: AppStateType): RateStatePropsType => {
  return {
    dateFromAPIRequest: state.convertorReducer.dateFromAPIRequest,
    currencyUsdEurForRub: state.convertorReducer.currencyUsdEurForRub,
    baseCurrencyFromAPIRequest: state.convertorReducer.baseCurrencyFromAPIRequest,
    currencyListBaseRub: state.convertorReducer.currencyListBaseRub
  }
}

const connector = connect(mapStateToProps, { setRateSaga })
export default connector(Rate)