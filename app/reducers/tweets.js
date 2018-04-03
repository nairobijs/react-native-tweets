import {
  SEARCH_FOR_TWEETS_REQUESTED,
  SEARCH_FOR_TWEETS_SUCCESS,
  SEARCH_FOR_TWEETS_ERROR,
  SET_ACTIVE_SEARCH
} from '../actions'

import { log } from '../utilities.js'

export function activeSearch (state = '', action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_REQUESTED:
      return action.searchText
    case SET_ACTIVE_SEARCH:
      return action.searchText
    default:
      return state
  }
}

let initialTweets = {}
// let initialTweets = {
//   first: [
//     {
//       id: '001',
//       text: 'This is my first tweet!'
//     },
//     {
//       id: '002',
//       text: 'I got a new friend on my first day at work :)'
//     },
//     {
//       id: '003',
//       text: 'RT @techytimo: First things first, I hate twitter but I <3 React...'
//     }
//   ]
// }

export function tweets (state = initialTweets, action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_SUCCESS:
      return {
        ...state,
        [action.searchText]: action.tweets
      }
    default:
      return state
  }
}

let initialSearches = {}
// let initialSearches = {
//   first: {
//     isSearching: false,
//     error: null
//   }
// }

export function searches (state = initialSearches, action) {
  switch (action.type) {
    case SEARCH_FOR_TWEETS_REQUESTED:
      log('searching tweets 2 - ' + action.searchText)
      return {
        ...state,
        [action.searchText]: {
          isSearching: true,
          error: ''
        }
      }
    case SEARCH_FOR_TWEETS_SUCCESS:
      return {
        ...state,
        [action.searchText]: {
          isSearching: false,
          error: null
        }
      }
    case SEARCH_FOR_TWEETS_ERROR:
      return {
        ...state,
        [action.searchText]: {
          isSearching: false,
          error: action.error
        }
      }
    default:
      return state
  }
}
