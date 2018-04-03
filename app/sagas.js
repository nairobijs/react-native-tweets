import { takeEvery } from 'redux-saga'
import { call, put, fork, select } from 'redux-saga/effects'
import api from './api'
import { log } from './utilities'

import {
  SEARCH_FOR_TWEETS_REQUESTED,
  searchForTweetsSuccess,
  searchForTweetsError,
  setActiveSearch
} from './actions'

// Workers sagas
function * fetchTweets (action) {
  log('worker saga ' + action.type)
  try {
    const activeSearch = yield select(state => state.activeSearch)
    log('setting activeSearch: ' + activeSearch)
    yield put(setActiveSearch(activeSearch))

    log('api call: ' + action.searchText)
    const tweets = yield call(api.search, action.searchText)

    yield put(searchForTweetsSuccess(action.searchText, tweets))
  } catch (error) {
    yield put(searchForTweetsError(action.searchText, error.message))
  }
}

/*
  Watcher sagas
*/
export function * watchSearchTweets () {
  yield * takeEvery(SEARCH_FOR_TWEETS_REQUESTED, fetchTweets) // Allow concurrent workers
}

// Root saga that will be run, we just fork the watcher sagas
export default function * rootSaga () {
  log('running sagas')
  yield fork(watchSearchTweets)
}
