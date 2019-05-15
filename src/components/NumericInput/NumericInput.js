import React from 'react';
import PropTypes from 'prop-types';

import './NumericInput.css';

function NumericInput(props) {
    return (
        <input className="numeric-input" name={props.name} onChange={props.onChange} type="number" placeholder={props.placeholder} value={props.value} />
    );
}

NumericInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default NumericInput;