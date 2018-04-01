import { combineReducers } from 'redux'
import { activeSearch, tweets, searches } from './tweets'

const RootReducer = combineReducers({
  activeSearch,
  tweets,
  searches
})

export default RootReducer
