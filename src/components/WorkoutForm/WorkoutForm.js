import React, { Component } from 'react';
import { connect } from 'react-redux';

import './WorkoutForm.css';

class WorkoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: '',
            duration: '',
            incline: ''
        };
    }

    clearForm = () => {
        this.setState({
            distance: '',
            duration: '',
            incline: ''
        });
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.distance) {
            const action = {
                type: 'ADD_WORKOUT',
                payload: {
                    distance_miles: this.convertInt(this.state.distance),
                    duration_minutes: this.convertInt(this.state.duration),
                    incline_percent: this.convertInt(this.state.incline)
                }
            };
            this.props.dispatch(action);
            this.clearForm();
        }
    }

    convertInt = (string) => {
        if (string === '') {
            return null;
        } else {
            return parseInt(string);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="distance" onChange={this.handleChange} type="number" placeholder="Distance (miles)" value={this.state.distance} />
                    <input name="duration" onChange={this.handleChange} type="number" placeholder="Time (minutes)" value={this.state.duration} />
                    <input name="incline" onChange={this.handleChange} type="number" placeholder="Incline (percent)" value={this.state.incline} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(WorkoutForm);