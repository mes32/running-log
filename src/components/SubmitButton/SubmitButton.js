import React from 'react';
import PropTypes from 'prop-types';

import './SubmitButton.css';

function SubmitButton(props) {
    return (
        <input className="submit-button" type="submit" value={props.value} />
    );
}

SubmitButton.propTypes = {
    value: PropTypes.string.isRequired
};

export default SubmitButton;