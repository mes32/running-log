import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './WorkoutList.css';
import WorkoutRow from './WorkoutRow/WorkoutRow';

function WorkoutList(props) {

    const [data, setData] = useState({ workouts: [] });

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('api/workout');
            await setData({ workouts: response.data });
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
                {data.workouts.map(
                    workout => <WorkoutRow key={workout.id} workout={workout} />
                )}
            </tbody>
        </table>
    );
}

export default WorkoutList;