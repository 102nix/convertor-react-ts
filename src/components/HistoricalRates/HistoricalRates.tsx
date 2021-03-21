import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './formHistoricalRates.scss'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
//components:
import { setHistoricalRateSaga, resetHistoricalRates, setLoader } from '../../redux/convertorAC'
//components:
import { TableCurrency } from '../TableCurrency/TableCurrency'
//types: 
import { AppStateType } from '../../redux/store'
import { HistoricalFormDataType } from '../../types/HistoricalRateTypes'
import { Input } from '../InputElement/Input'

export const HistoricalRates: React.FC = () => {

  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(setLoader(false))
    dispatch(resetHistoricalRates())  
  }, [])

  const listHistoricalRates = useSelector(((state: AppStateType) => state.convertorReducer.listHistoricalRates))
  const load = useSelector(((state: AppStateType) => state.convertorReducer.load))

  const history = useHistory()

  const minDate = '1999-01-01'

  const goMainPageHandler = () => {
    dispatch(resetHistoricalRates())
    history.push('/')
  }
      

  return (
    <div className="exchange-rate-date-content">
      <div className="row">
        <div className="col-12">
          <div className="title-historical-rate">Курс валюты по указанной дате, начиная с 1999 года:</div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12">
          <Formik
            initialValues={{
              exchangeRateDate: ''
            }}
            validationSchema={Yup.object({
              exchangeRateDate: Yup.date()
                .min(minDate, `Дата начиная с ${minDate}`)
                .required('Требуется указать дату')
            })}
            onSubmit={
              (dataForm: HistoricalFormDataType): void => {
                dispatch(setHistoricalRateSaga(dataForm.exchangeRateDate))
                dispatch(setLoader(true))
              }
            }
          >
            <Form className="form-historical-rate">
              <div className="from-group">
                <Input
                  id="exchangeRateDate"
                  type="text"
                  name="exchangeRateDate"
                  placeholder="Введите дату в формате: 2010-01-12"
                  autocomplete="off"
                />
              </div>
              <div className="add-action">
                {
                  !load &&
                  <button type="submit" className="btn">&#10147;</button>
                }
              </div>
              <div className="loader">
                {
                  load &&
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                }
              </div>
              <button className="btn btn-dark exit-historical" onClick={goMainPageHandler}>Отмена</button>
            </Form>
          </Formik>
        </div>
      </div>
      {
        listHistoricalRates &&
        <div className="row">
          <TableCurrency currencyListBaseRub={listHistoricalRates} />
        </div>
      }
    </div>
  )
}

