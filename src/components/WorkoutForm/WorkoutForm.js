import React, { useState } from 'react';
import { connect } from 'react-redux';

import './WorkoutForm.css';

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
                <input name="distance" onChange={handleChange} type="number" placeholder="Distance (miles)" value={data.distance} />
                <input name="duration" onChange={handleChange} type="number" placeholder="Time (minutes)" value={data.duration} />
                <input name="incline" onChange={handleChange} type="number" placeholder="Incline (percent)" value={data.incline} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default connect()(WorkoutForm);