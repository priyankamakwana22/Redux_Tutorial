import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import placeReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(placeReducer, applyMiddleware(sagaMiddleware));

export default store;
sagaMiddleware.run(rootSaga);
