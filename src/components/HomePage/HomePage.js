import React, { Component } from 'react';

import WorkoutForm from '../WorkoutForm/WorkoutForm';
import WorkoutList from '../WorkoutList/WorkoutList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <WorkoutForm />
                <WorkoutList />
            </div>
        );
    }
}

export default HomePage;