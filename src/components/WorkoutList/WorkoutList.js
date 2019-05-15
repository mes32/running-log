import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './WorkoutList.css';
import Workout from '../../classes/Workout';
import WorkoutRow from './WorkoutRow/WorkoutRow'; 

function WorkoutList(props) {
    useEffect(() => {
        props.dispatch({ type: 'FETCH_WORKOUTS' });
    }, []);

    // const distanceHeading = () => {
    //     if 
    // }

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance ({props.distance})</th>
                    <th>Time ({props.duration})</th>
                    <th>Incline ({props.incline})</th>
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
    workouts: PropTypes.arrayOf(PropTypes.instanceOf(Workout)).isRequired
};

const mapReduxStoreToProps = (reduxStore) => ({
    workouts: reduxStore.workouts,
    distance: reduxStore.units.distance,
    duration: reduxStore.units.duration,
    incline: reduxStore.units.incline
});

export default connect(mapReduxStoreToProps)(WorkoutList);