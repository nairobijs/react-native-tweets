import { Platform } from 'react-native';
import RootReducer from './reducers';

import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import logger from 'redux-logger';

import devTools from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
	RootReducer,
	compose(
		applyMiddleware(sagaMiddleware, logger),
		devTools({
			name: Platform.OS,
			hostname: 'localhost',
			port: 5678,
			suppressConnectErrors: false,
		}),
	)
);

// must be run after mounting to the store
sagaMiddleware.run(rootSaga);

export default Store;