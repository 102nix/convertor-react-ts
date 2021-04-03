import React, { useEffect, useRef } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/convertorAC'
import './Calc.scss'
//types: 
import { AppStateType } from '../../redux/store'

export const Calc: React.FC = () => {

  const dispatch = useDispatch()
  const currencyList = useSelector((state: AppStateType) => state.convertorReducer.currencyList)
  const currentRUB =  useSelector((state: AppStateType) => state.convertorReducer.currentRUB)
  const startValueForInput = useSelector((state: AppStateType) => state.convertorReducer.startValueForInput)
  const countRUB = useSelector((state: AppStateType) => state.convertorReducer.countRUB)

  // let inputRef = React.createRef<HTMLInputElement>()
  let inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    dispatch(actions.getDynamicRateSaga(Object.keys(currencyList)[0]))
  },[currencyList])

  const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const resultExchangeRate: number = +event.target.value * +currentRUB
      dispatch(actions.changeCountRUB(resultExchangeRate))
    }
  }

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(actions.changeCountRUB(0))
    inputRef.current!.value = '1'
    console.log(inputRef.current?.value)
    dispatch(actions.getDynamicRateSaga(event.target.value))
  }

  return (
    <div className="calc-block">
      <div className="col-12">
        <div className="calc-input-select">
          <input 
            type="number" 
            className="input"
            ref={inputRef}          
            defaultValue={startValueForInput}
            onChange={handlerInput} 
          />
          <select onChange={handlerSelect}>
            { 
              Object.keys(currencyList)
                .filter(key => key !== 'RUB')
                  .map(option => <option value={option} key={option}>{option}</option>)
            }
          </select>
        </div>
        <div className="show-rub">
          В Рублях: <strong>{countRUB === 0 ? currentRUB.toFixed(2) : countRUB.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  )
}

