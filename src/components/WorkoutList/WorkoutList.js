import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './WorkoutList.css';
import WorkoutRow from './WorkoutRow/WorkoutRow';

function WorkoutList(props) {

    useEffect(() => {
        async function fetchData() {
            await props.dispatch({ type: 'FETCH_WORKOUTS' });
        }
        fetchData();
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

const mapReduxStoreToProps = (reduxStore) => {
    return {
        workouts: reduxStore.workouts
    };
}

export default connect(mapReduxStoreToProps)(WorkoutList);