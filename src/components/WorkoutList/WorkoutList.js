import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WorkoutList.css';
import WorkoutRow from './WorkoutRow/WorkoutRow';

class WorkoutList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_WORKOUTS' });
    }

    render() {
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
                    {this.props.reduxStore.workouts.map(
                        workout => <WorkoutRow key={workout.id} workout={workout} />
                    )}
                </tbody>
            </table>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(WorkoutList);