import { combineReducers, createStore, applyMiddleware } from 'redux';
import convertorReducer from './convertorReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers({
  convertorReducer,
  form: formReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default storage