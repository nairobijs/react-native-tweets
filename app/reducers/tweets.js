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

let initialTweets = {
  first: [
    {
      id: '001',
      text: 'first 001'
    },
    {
      id: '002',
      text: 'first 002'
    },
    {
      id: '003',
      text: 'first 003'
    }
  ]
}

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

let initialSearches = {
  first: {
    isSearching: false,
    error: null
  }
}

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
