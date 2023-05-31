import { put, takeLatest } from 'redux-saga/effects';

function* calculateAccuracySaga(action) {
  const { typedKeys, nextKeys } = action.payload;
  const totalKeys = typedKeys.length;
  const correctKeys = typedKeys.split('').filter((key, index) => key === nextKeys[index]).length;
  const accuracy = (correctKeys / totalKeys) * 100;
  yield put({ type: 'SET_ACCURACY', payload: accuracy.toFixed(2) });
}

function* typingSaga() {
  yield takeLatest('SET_TYPED_KEYS', calculateAccuracySaga);
}

export default typingSaga;
