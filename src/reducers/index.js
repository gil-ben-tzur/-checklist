import {combineReducers} from 'redux';
import Item from './item';
import Label from './labels';
import CheckList from './checklist';


const allReducers = combineReducers({
	itemData:Item,
	checkListData:CheckList,
	labelData:Label
});

export default allReducers;