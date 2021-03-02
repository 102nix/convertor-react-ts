import React from 'react'
import './TableCurrency.scss';
//types:
import { TableCurrencyContainerPropsType } from '../../types/componentTypes';

const TableCurrency: React.FC<TableCurrencyContainerPropsType> = props => {
  
  const arrayCurrencyValue: {[key: string]: string} = {
     'CAD': 'Канадский доллар',
     'CHF': 'Швейцарский франк',
     'EUR': 'Евро',
     'SGD': 'Сингапурский доллар',
     'CZK': 'Чешских крон',
     'TRY': 'Турецких лир',
     'AUD': 'Австралийский доллар',
     'SEK': 'Шведских кронк',
     'INR': 'Индийских рупий',
     'BRL': 'Бразильский реал',
     'USD': 'Доллар США',
     'GBP': 'Фунт стерлингов',
     'JPY': 'Японских иен',
     'HKD': 'Гонконгский доллар',
     'ISK': 'Исландская крона',
     'PHP': 'Филиппинское песо',
     'DKK': 'Датская крона',
     'HUF': 'Венгерский форинт',
     'RON': 'Румынский лей',
     'IDR': 'Индонезийская рупия',
     'RUB': 'Россиский рубль',
     'HRK': 'Хорватская куна',
     'THB': 'Тайский бат',
     'MYR': 'Малайзийский ринггит',
     'BGN': 'Болгарский лев',
     'CNY': 'Китайский юань',
     'NOK': 'Норвежских крон',
     'NZD': 'Новозеландский доллар',
     'ZAR': 'Южноафриканский рэнд',
     'MXN': 'Мексиканское песо',
     'ILS': 'Новый израильский шекель',
     'KRW': 'Вон Республики Корея',
     'PLN': 'Польский злотый',
     'LVL': 'Латвийский лат',
     'LTL': 'Литовский лит',
     'EEK': 'Эстонская крона'
  }
  
  return (
      <div className="col-12">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Код</th><th>Единиц</th><th>Валюты</th><th>Рублей РФ</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(props.currencyListBaseRub).length !== 0 &&
              Object.keys(props.currencyListBaseRub)
                .filter(key => key !== 'RUB' )
                  .map(key => {
                    return (<tr>
                        <td key={key}>{key}</td>
                        <td>1</td>
                        <td>{arrayCurrencyValue[key]}</td>
                        <td>{(1 / +props.currencyListBaseRub[key]).toFixed(2)}</td>
                      </tr>)
                  })
            }
          </tbody>
        </table>
      </div>
  )
}
export default TableCurrency 
