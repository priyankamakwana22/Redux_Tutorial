import {legacy_createStore as createStore} from 'redux';
import placeReducer from './reducer';

const store = createStore(placeReducer);

export default store;
