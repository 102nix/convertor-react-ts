import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { FieldValue } from '../../FormControls/Input'
import { FormHistoricalContainerProps, FormInData } from '../../types/componentTypes'
import { required } from '../../Validators/validate'
import './formHistoricalRates.scss'

const FormHistoricalRates: React.FC<InjectedFormProps<FormInData, FormHistoricalContainerProps> & FormHistoricalContainerProps> = ({handleSubmit, ...props}) => {
  return (
    <div className="exchange-rate-date-content">
      <div className="title-historical-rate">Курс валюты по указанной дате, начиная с 1999 года:</div>
      <form onSubmit={handleSubmit} className="form-historical-rate ">
        <div className="from-group">
          <Field
            placeholder="Введите дату в формате: 2010-01-12" 
            name="exchangeRateDate" 
            component={FieldValue} 
            validate={[required]} 
            className="form-control" 
            autocomplete="off"
          />
        </div>
        <div className="add-action">
          {  
            !props.load &&
            <button type="submit" className="btn">&#10147;</button>  
          }
        </div>
        <div className="loader">
          {
            props.load &&
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          }
        </div>
      </form>
    </div>
  )
}
const Form = reduxForm<FormInData, FormHistoricalContainerProps>({form: 'exchange-rate-date-content'})(FormHistoricalRates)
export default Form 
