import { all } from 'redux-saga/effects';

import workoutSaga from '../sagas/workout';

export default function* rootSaga() {
    yield all([
        workoutSaga(),
    ]);
}