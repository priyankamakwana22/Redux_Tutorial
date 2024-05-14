import {all, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ADD_PLACE, ADD_PLACE_SAGE, addPlace} from './action';

export default function* rootSaga() {
  yield delay(2000);
  yield takeLatest(ADD_PLACE, addPlaceAsync);
}
function* addPlaceAsync(action) {
  console.log('🚀 ~ function*addPlaceAsync ~ action:', action);
  try {
    yield put({type: ADD_PLACE_SAGE, placeName: action.payload});
  } catch (e) {}
}
