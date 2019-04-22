import React from 'react';

import WorkoutForm from '../WorkoutForm/WorkoutForm';
import WorkoutList from '../WorkoutList/WorkoutList';

export function HomePage(props) {
    return (
        <div>
            <WorkoutForm />
            <WorkoutList />
        </div>
    );
}

export default HomePage;