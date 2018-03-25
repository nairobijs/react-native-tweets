import { combineReducers } from 'redux';
import { tweets, searches } from './tweets';

const RootReducer = combineReducers({
	tweets,
  	searches,
});

export default RootReducer