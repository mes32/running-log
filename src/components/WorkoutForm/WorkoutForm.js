import React, { useState } from 'react';
import { connect } from 'react-redux';

import './WorkoutForm.css';
import NumericInput from '../NumericInput/NumericInput';
import SubmitButton from '../SubmitButton/SubmitButton';

const DEFAULT_DATA = {
    distance: '',
    duration: '',
    incline: ''
};

function WorkoutForm(props) {
    const [data, setData] = useState(DEFAULT_DATA);

    const clearForm = () => {
        setData(DEFAULT_DATA);
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (data.distance) {
            const action = {
                type: 'ADD_WORKOUT',
                payload: {
                    distance_miles: convertInt(data.distance),
                    duration_minutes: convertInt(data.duration),
                    incline_percent: convertInt(data.incline)
                }
            };
            props.dispatch(action);
            clearForm();
        }
    };

    const convertInt = (string) => {
        if (string === '') {
            return null;
        } else {
            return parseInt(string);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <NumericInput name="distance" onChange={handleChange} placeholder={"Distance (" + props.distance + ")"} value={data.distance} />
                <NumericInput name="duration" onChange={handleChange} placeholder={"Time (" + props.duration + ")"} value={data.duration} />
                <NumericInput name="incline" onChange={handleChange} placeholder={"Incline (" + props.incline + ")"} value={data.incline} />
                <SubmitButton value="Log Run" />
            </form>
        </div>
    );
}

const mapReduxStoreToProps = (reduxStore) => ({
    distance: reduxStore.units.distance,
    duration: reduxStore.units.duration,
    incline: reduxStore.units.incline
});

export default connect(mapReduxStoreToProps)(WorkoutForm);