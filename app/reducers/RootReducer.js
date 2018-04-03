import { combineReducers } from 'redux'
import { activeSearch, tweets, searches } from './TweetsReducer'

const RootReducer = combineReducers({
  activeSearch,
  tweets,
  searches
})

export default RootReducer
