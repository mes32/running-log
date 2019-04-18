import React, { Component } from 'react';

class WorkoutRow extends Component {
    render() {
        const date = this.props.workout.last_updated;
        const distance = this.props.workout.distance_miles;
        const duration = this.props.workout.duration_minutes;
        const incline = this.props.workout.incline_percent;
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
}

export default WorkoutRow;