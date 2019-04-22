import Workout from '../../classes/Workout';

const DEFAULT_STATE = [];

const workouts = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_WORKOUTS') {
        return Workout.convertFromSQL(action.payload);
    } else if (action.type === 'CLEAR_WORKOUTS') {
        return DEFAULT_STATE;
    } else {
        return state;
    }
};

export default workouts;