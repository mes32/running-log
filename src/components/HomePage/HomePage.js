import React from 'react';

import WorkoutForm from '../WorkoutForm/WorkoutForm';
import WorkoutList from '../WorkoutList/WorkoutList';

function HomePage(props) {
    return (
        <div>
            <WorkoutForm />
            <WorkoutList />
        </div>
    );
}

export default HomePage;