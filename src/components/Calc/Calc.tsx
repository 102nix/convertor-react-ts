import React, { useEffect } from 'react'
import './Calc.scss'
import { connect } from 'react-redux'
import { onGetDynamicsRate, changeCountRUB, IObject } from '../../redux/convertorReducer'
import { AppStateType } from '../../redux/store'

type DispachProps = {
  onGetDynamicsRate(partOfURL: string): void
  changeCountRUB(val: number): void
}
type MapProps = {
  currentRUB: number 
  startValueForInput: number
  countRUB: number
  currencyList: IObject
}

const Calc: React.FC<DispachProps & MapProps> = props => {

  let inputRef = React.createRef<HTMLInputElement>()

  useEffect(() => {
    props.onGetDynamicsRate(Object.keys(props.currencyList)[0])
  },[props.currencyList])

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const resultExchangeRate: number = +event.target.value * +props.currentRUB
      props.changeCountRUB(resultExchangeRate)
    }
  }

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    props.changeCountRUB(0)
    inputRef.current!.value = '1'
    console.log(inputRef.current?.value)
    props.onGetDynamicsRate(event.target.value)
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
                  .map(option => {
                    return (
                    <option value={option} key={option}>{option}</option>
                    )
                  })
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
let mapStateToProps = (state: AppStateType): MapProps => {
  return {
    currencyList: state.convertorReducer.currencyList,
    currentRUB: state.convertorReducer.currentRUB,
    startValueForInput: state.convertorReducer.startValueForInput,
    countRUB: state.convertorReducer.countRUB
  }
}
const connector = connect(mapStateToProps, { onGetDynamicsRate, changeCountRUB })
export default connector(Calc)
