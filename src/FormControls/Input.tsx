import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import './FieldOfForm.scss';

// type FieldFormType = {
//   input: {
//     name: string
//     value: string
//   }
//   meta: {
//     error: string | undefined
//     touched: boolean
//   }
// }

export const FieldValue: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  console.log(input, meta)
  return (
    <> 
      <input {...input} {...props} />
      { 
        hasError &&
        <small>{meta.error}</small>
      }
    </>
  )
}


