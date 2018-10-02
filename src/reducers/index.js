import {combineReducers} from 'redux';
import additem from './add-item';
import itemStatus from './item-status';

export default combineReducers({
  additem,
  itemStatus
})