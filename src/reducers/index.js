import list from './list';
import {combinReducers} from 'redux';

const rootReducer = combinReducers({
	list
});

export default rootReducer;
