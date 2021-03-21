import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
//Components:
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import { Rate } from './components/Rate/Rate'
import About from './components/About/About'
import { HistoricalRates } from './components/HistoricalRates/HistoricalRates'

function App() {
  return(
    <div className="App">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-lg-4">
            <NavbarComponent />
          </div>
          <div className="col-12 col-lg-8">
            <div className="content">
              <Switch>
                <Route exact path="/" render={() => <Rate /> } />
                <Route path="/about" render={() => <About /> } />
                <Route path="/historical-rate" render={() => <HistoricalRates /> } />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
