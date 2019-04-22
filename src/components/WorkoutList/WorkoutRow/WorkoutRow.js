import React from 'react';
import PropTypes from 'prop-types';

import Workout from '../../../classes/Workout';

function WorkoutRow(props) {
    return (
        <tr>
            <td>{props.workout.getDate()}</td>
            <td>{props.workout.getDistance()}</td>
            <td>{props.workout.getDuration()}</td>
            <td>{props.workout.getIncline()}</td>
            <td>-</td>
        </tr>
    );
}

WorkoutRow.propTypes = {
    workout: PropTypes.instanceOf(Workout).isRequired
};

export default WorkoutRow;