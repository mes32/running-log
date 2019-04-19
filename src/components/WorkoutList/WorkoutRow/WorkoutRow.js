import React from 'react';

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

export default WorkoutRow;