import React from 'react'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import { IValuesInput } from '../../types/InputTypes'
import './Input.scss'

export const Input: React.FC<IValuesInput> =({label, ...props}) => {

  const [field, meta] = useField(props)

  return (
    <Form.Group>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="form-control"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ): null}
    </Form.Group>
  )
}
