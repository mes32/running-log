import { combineReducers } from 'redux';

import workouts from './workout';

const rootReducer = combineReducers({
    workouts
});

export default rootReducer;