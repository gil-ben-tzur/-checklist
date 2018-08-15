import {combineReducers} from 'redux';
import Item from './item';
import Label from './labels';
import CheckList from './checklist';
import CheckListActive from './checklist-active';

const allReducers = combineReducers({
	itemData:Item,
	checkListData:CheckList,
	checkListA:CheckListActive,
	labelData:Label
});

export default allReducers;