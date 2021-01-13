import React, {useState} from 'react'
import './CurrencyRow.scss'

type ContainerProps = {
  rateName: Array<string>
  selectCurrency: string | Array<string>
  listRate: { [key: string]: number }
}

const CurrencyRow: React.FC<ContainerProps> = props => {

  const [selectCurrency, setSelectCurrency] = useState(props.selectCurrency)



  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value)
    setSelectCurrency(event.target.value)
  }
  
  return (
    <div className="currency-row-block">
      <input type="number" className="input" />
      <select value={selectCurrency} onChange={onChangeHandler}>
        {
          props.rateName.map(option => (
          <option key={option} value={option}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}
export default CurrencyRow
