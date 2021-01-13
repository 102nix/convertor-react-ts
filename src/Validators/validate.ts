type FieldValidatorsType = (value: string) => string | undefined
// type ConfirmPassType = (value: string, listParams: any) => string | undefined

export const required: FieldValidatorsType = (val) => {
  if (val) return undefined
  return 'Поле не должно быть пустым!'
}

// export const confirmPass: ConfirmPassType = (val, ...listParams) => {
//   const password: string = listParams[0].password
//   const confirmPass: string = val
//   if (password === confirmPass) return undefined
//   return 'Пароли не совпадают!'
// }

