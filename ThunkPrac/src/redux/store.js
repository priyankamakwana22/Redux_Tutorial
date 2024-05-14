import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {placeReducer} from './reducer';

const store = createStore(placeReducer, applyMiddleware(thunk));

export default store;
