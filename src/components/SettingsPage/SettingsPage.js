import React from 'react';
import { connect } from 'react-redux';

function SettingsPage(props) {

    const setDistance = (event) => {
        const action = {
            type: 'SET_DISTANCE_UNITS',
            payload: event.target.value
        };
        props.dispatch(action);
    }

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <label htmlFor="distance-units">Distance Units: </label>
                <select id="distance-units" onChange={setDistance} value={props.units.distance}>
                    <option value="miles">Miles</option>
                    <option value="kilometers">Kilometers</option>
                </select>
            </div>
            <div>
                <label htmlFor="duration-units">Duration Units: </label>
                <select id="duration-units" defaultValue={props.units.duration}>
                    <option value="minutes">Minutes</option>
                    <option value="hours">Hours</option>
                </select>
            </div>
            <div>
                <label htmlFor="incline-units">Incline Units: </label>
                <select id="incline-units" defaultValue={props.units.incline}>
                    <option value="percent">Percent</option>
                    <option value="degrees">Degrees</option>
                </select>
            </div>
        </div>
    );
}

const mapReduxStoreToProps = (reduxStore) => ({
    units: reduxStore.units
});

export default connect(mapReduxStoreToProps)(SettingsPage);