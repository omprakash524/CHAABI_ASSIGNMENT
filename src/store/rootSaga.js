import { all } from 'redux-saga/effects';
import typingSaga from './sagas/typingSaga';

function* rootSaga() {
  yield all([
    typingSaga(),
    // Add more sagas here if needed
  ]);
}

export default rootSaga;
