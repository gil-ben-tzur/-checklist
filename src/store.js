import {createStore} from 'redux';
import {} from './reducers';
export default (initialState) =>{
	return createStore(rootReducer, initialState);
}