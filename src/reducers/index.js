import { combineReducers } from 'redux';
import pets from './pet';
import filter from './filter';

export default combineReducers({
  pets,
  filter,
});
