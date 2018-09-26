import {combineReducers} from 'redux';
import AddItem from './add-item';
import Label from './labels';
import CheckList from './checklist';
import CheckListActive from './checklist-active';

const allReducers = combineReducers({
	additem:AddItem,
	checkListData:CheckList,
	checkListA:CheckListActive,
	labelData:Label
});

export default allReducers;