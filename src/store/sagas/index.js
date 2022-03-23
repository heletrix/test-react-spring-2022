import { all, fork } from 'redux-saga/effects';
import { watchGetAllJobs } from './job';

export default function* rootSaga() {
  yield all([
    fork(watchGetAllJobs)
  ]);
}
