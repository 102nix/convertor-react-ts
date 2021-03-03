import React, { useEffect, useRef } from 'react' 
import { connect } from 'react-redux'
import { getDynamicRateSaga, changeCountRUB } from '../../redux/convertorAC'
import './Calc.scss'
//types: 
import { AppStateType } from '../../redux/store'
import { CalcDispachPropsType, CalcStatePropsType } from '../../types/componentTypes'

const Calc: React.FC<CalcStatePropsType & CalcDispachPropsType> = props => {

  // let inputRef = React.createRef<HTMLInputElement>()
  let inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    props.getDynamicRateSaga(Object.keys(props.currencyList)[0])
  },[props.currencyList])

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const resultExchangeRate: number = +event.target.value * +props.currentRUB
      props.changeCountRUB(resultExchangeRate)
    }
  }

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.changeCountRUB(0)
    inputRef.current!.value = '1'
    console.log(inputRef.current?.value)
    props.getDynamicRateSaga(event.target.value)
  }

  return (
    <div className="calc-block">
      <div className="col-12">
        <div className="calc-input-select">
          <input 
            type="number" 
            className="input"
            ref={inputRef}          
            defaultValue={props.startValueForInput}
            onChange={handlerInput} 
          />
          <select onChange={handlerSelect}>
            { 
              Object.keys(props.currencyList)
                .filter(key => key !== 'RUB')
                  .map(option => <option value={option} key={option}>{option}</option>)
            }
          </select>
        </div>
        <div className="show-rub">
          В Рублях: <strong>{props.countRUB === 0 ? props.currentRUB.toFixed(2) : props.countRUB.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  )
}
let mapStateToProps = (state: AppStateType): CalcStatePropsType => {
  return {
    currencyList: state.convertorReducer.currencyList,
    currentRUB: state.convertorReducer.currentRUB,
    startValueForInput: state.convertorReducer.startValueForInput,
    countRUB: state.convertorReducer.countRUB
  }
}
const connector = connect(mapStateToProps, { getDynamicRateSaga, changeCountRUB })
export default connector(Calc)
