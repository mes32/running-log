import { combineReducers } from 'redux';

import units from './units';
import workouts from './workout';

const rootReducer = combineReducers({
    units,
    workouts
});

export default rootReducer;