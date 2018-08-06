import {createStore} from 'redux';
import allReducers from './reducers'
import {provider} from 'react-redux'

const store = createStore(allReducers);




