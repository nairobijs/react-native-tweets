import RootReducer from './reducers/RootReducer'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
  )
)

// must be run after mounting to the store
sagaMiddleware.run(rootSaga)

export default store
