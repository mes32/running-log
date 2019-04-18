import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkoutForm from '../WorkoutForm/WorkoutForm';

class HomePage extends Component {
    render() {
        return (
            <div>
                <WorkoutForm />
            </div>
        );
    }
}

export default connect()(HomePage);