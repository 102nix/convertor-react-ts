import React, {useEffect} from 'react'
import './formHistoricalRates.scss'
import Form, { FormInData } from './FormHistoricalRates'
import { onHistoricalRate, resetHistoricalRates, setLoader } from '../../redux/convertorReducer'
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import TableCurrency from '../TableCurrency/TableCurrency'
import { useHistory } from 'react-router-dom'

type DispatcProps = {
  onHistoricalRate(dataForm: string): void
  resetHistoricalRates(): void
  setLoader(val: boolean): void
}
type MapProps = {
  listHistoricalRates: null | { [key: string]: number }
  load: boolean
}

const HistoricalRates: React.FC<DispatcProps & MapProps> = props => {

  useEffect(() => {
    props.resetHistoricalRates()
  }, [])

  const history = useHistory()

  const resetExchangeRateDate = () => {
    props.resetHistoricalRates()
    history.push('/')
  }

  const onSubmit = (dataForm: FormInData): void => {
    props.onHistoricalRate(dataForm.exchangeRateDate)
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
let mapStateToProps = (state: AppStateType): MapProps => {
  return {
    listHistoricalRates: state.convertorReducer.listHistoricalRates,
    load: state.convertorReducer.load
  }
}
const connector = connect(mapStateToProps, { onHistoricalRate, resetHistoricalRates, setLoader })
export default connector(HistoricalRates)