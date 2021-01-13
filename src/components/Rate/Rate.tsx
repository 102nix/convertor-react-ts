import React, { useEffect } from 'react'
import './Rate.scss'
import { connect } from 'react-redux'
import { onGetRate, IObject } from '../../redux/convertorReducer'
import { AppStateType } from '../../redux/store'
import { Html5Entities } from 'html-entities';
import Calc from '../Calc/Calc'
import TableCurrency from '../TableCurrency/TableCurrency'

type MapProps = {
  dateFromAPIRequest: string
  currencyUsdEurForRub: IObject
  baseCurrencyFromAPIRequest: string
  currencyListBaseRub: IObject
}
type DispatchProps = {
  onGetRate(): void
}
type Props = MapProps & DispatchProps

const Rate: React.FC<Props> = props => {

  const htmlEntities = new Html5Entities();

  useEffect(() => {
    props.onGetRate()
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
let mapStateToProps = (state: AppStateType): MapProps => {
  return {
    dateFromAPIRequest: state.convertorReducer.dateFromAPIRequest,
    currencyUsdEurForRub: state.convertorReducer.currencyUsdEurForRub,
    baseCurrencyFromAPIRequest: state.convertorReducer.baseCurrencyFromAPIRequest,
    currencyListBaseRub: state.convertorReducer.currencyListBaseRub
  }
}

const connector = connect(mapStateToProps, { onGetRate })
export default connector(Rate)