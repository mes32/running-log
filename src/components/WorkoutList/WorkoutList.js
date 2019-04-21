import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './WorkoutList.css';
import WorkoutRow from './WorkoutRow/WorkoutRow';

function WorkoutList(props) {
    useEffect(() => {
        props.dispatch({ type: 'FETCH_WORKOUTS' });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance (miles)</th>
                    <th>Time (minutes)</th>
                    <th>Incline (percent)</th>
                    <th>Terrain</th>
                </tr>
            </thead>
            <tbody>
                {props.workouts.map(
                    workout => <WorkoutRow key={workout.id} workout={workout} />
                )}
            </tbody>
        </table>
    );
}

WorkoutList.propTypes = {
    workouts: PropTypes.array.isRequired
};

const mapReduxStoreToProps = (reduxStore) => ({
    workouts: reduxStore.workouts
});

export default connect(mapReduxStoreToProps)(WorkoutList);