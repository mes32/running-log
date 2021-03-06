import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import Workout from '../../classes/Workout';

function* fetchWorkouts() {
    try {
        const response = yield axios.get('api/workout');
        const workouts = yield Workout.fromQuery(response.data);
        yield put({ type: 'SET_WORKOUTS', payload: workouts });
    } catch (error) {
        console.log('Error in FETCH_WORKOUTS:', error);
        alert('Unable to fetch workouts from server.')
    }
}

function* addWorkout(action) {
    console.log(action);
    try {
        yield axios.post('api/workout', action.payload);
        yield put({ type: 'FETCH_WORKOUTS' });
    } catch (error) {
        console.log('Error in ADD_WORKOUTS:', error);
        alert('Unable to submit workout to server.')
    }
}

function* workoutSaga() {
    yield takeLatest('FETCH_WORKOUTS', fetchWorkouts);
    yield takeLatest('ADD_WORKOUT', addWorkout);
}

export default workoutSaga;