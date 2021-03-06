import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './formHistoricalRates.scss'
//components:
import Form from './FormHistoricalRates'
import { setHistoricalRateSaga, resetHistoricalRates, setLoader } from '../../redux/convertorAC'
//components:
import TableCurrency from '../TableCurrency/TableCurrency'
//types: 
import { AppStateType } from '../../redux/store'
import { HistoricalRatesType, HistoricalRatesPropsType, HistoricalFormDataType } from '../../types/HistoricalRateTypes'

const HistoricalRates: React.FC<HistoricalRatesType> = props => {

  useEffect(() => {
    props.resetHistoricalRates()
  }, [])

  const history = useHistory()

  const resetExchangeRateDate = () => {
    props.resetHistoricalRates()
    history.push('/') 
  }

  const onSubmit = (dataForm: HistoricalFormDataType): void => {
    props.setHistoricalRateSaga(dataForm.exchangeRateDate)
    props.setLoader(true)
  }
  
  return (
    <div className="historical-rate-base">
      <div className="row text-center">
        <div className="col-12">
          <Form 
            onSubmit={onSubmit} 
            resetExchangeRateDate={resetExchangeRateDate}
            load={props.load}
          />
        </div>
      </div>
      { 
        props.listHistoricalRates &&
        <div className="row">
          <TableCurrency currencyListBaseRub={props.listHistoricalRates} />
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state: AppStateType): HistoricalRatesPropsType => {
  return {
    listHistoricalRates: state.convertorReducer.listHistoricalRates,
    load: state.convertorReducer.load
  }
}
const connector = connect(mapStateToProps, { setHistoricalRateSaga, resetHistoricalRates, setLoader })
export default connector(HistoricalRates)