const DEFAULT_STATE = {
    distance: 'miles',
    duration: 'minutes',
    incline: 'percent'
};

const units = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_DISTANCE_UNITS') {
        return { ...state, distance: action.payload };
    } else if (action.type === 'SET_DURATION_UNITS') {
        return { ...state, duration: action.payload };
    } else if (action.type === 'SET_INCLINE_UNITS') {
        return { ...state, incline: action.payload };  
    } else {
        return state;
    }
};

export default units;