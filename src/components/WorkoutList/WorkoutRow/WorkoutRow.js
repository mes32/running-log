import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Workout from '../../../classes/Workout';

function WorkoutRow(props) {
    return (
        <tr>
            <td>{props.workout.getDate()}</td>
            <td>{props.workout.getDistance(props.units)}</td>
            <td>{props.workout.getDuration(props.units)}</td>
            <td>{props.workout.getIncline(props.units)}</td>
            <td>-</td>
        </tr>
    );
}

WorkoutRow.propTypes = {
    workout: PropTypes.instanceOf(Workout).isRequired
};

const mapReduxStoreToProps = (reduxStore) => ({
    units: reduxStore.units
});

export default connect(mapReduxStoreToProps)(WorkoutRow);