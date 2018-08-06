import {combineReducers} from 'redux';
import Item from './item';
import Label from './labels';


const allReducers = combineReducers({
	itemData:Item,
	labelData:Label
});

export default allReducers;