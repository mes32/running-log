import React from 'react';
import PropTypes from 'prop-types';

function WorkoutRow(props) {
    const date = props.workout.last_updated;
    const distance = props.workout.distance_miles;
    const duration = props.workout.duration_minutes;
    const incline = props.workout.incline_percent;
    return (
        <tr>
            <td>{date}</td>
            <td>{distance}</td>
            <td>{duration}</td>
            <td>{incline}</td>
            <td>-</td>
        </tr>
    );
}

WorkoutRow.propTypes = {
    workout: PropTypes.shape({
        last_updated: PropTypes.string.isRequired,
        distance_miles: PropTypes.number.isRequired,
        duration_minutes: PropTypes.number,
        incline_percent: PropTypes.number
    }).isRequired
};

export default WorkoutRow;