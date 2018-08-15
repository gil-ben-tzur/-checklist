import {createStore} from 'redux';
import allReducers from './reducers'
import {provider} from 'react-redux'

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




