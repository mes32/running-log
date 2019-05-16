import React from 'react';
import { connect } from 'react-redux';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

function SettingsPage(props) {

    const setDistance = (event) => {
        const action = {
            type: 'SET_DISTANCE_UNITS',
            payload: event.target.value
        };
        props.dispatch(action);
    }

    const setDuration = (event) => {
        const action = {
            type: 'SET_DURATION_UNITS',
            payload: event.target.value
        };
        props.dispatch(action);
    }

    const setIncline = (event) => {
        const action = {
            type: 'SET_INCLINE_UNITS',
            payload: event.target.value
        };
        props.dispatch(action);
    }

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <DropdownMenu
                    id="distance-units"
                    label="Distance Units:"
                    onChange={setDistance}
                    optionList={['miles', 'kilometers']}
                    value={props.units.distance}
                />
            </div>
            <div>
                <DropdownMenu
                    id="duration-units"
                    label="Duration Units:"
                    onChange={setDuration}
                    optionList={['minutes', 'hours']}
                    value={props.units.duration}
                />
            </div>
            <div>
                <DropdownMenu
                    id="incline-units"
                    label="Incline Units:"
                    onChange={setIncline}
                    optionList={['percent', 'degrees']}
                    value={props.units.incline}
                />
            </div>
        </div>
    );
}

const mapReduxStoreToProps = (reduxStore) => ({
    units: reduxStore.units
});

export default connect(mapReduxStoreToProps)(SettingsPage);