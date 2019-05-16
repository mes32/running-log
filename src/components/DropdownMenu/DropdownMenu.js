import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './DropdownMenu.css';

function DropdownMenu(props) {
    return (
        <>
            <label htmlFor={props.id}>{props.label} </label>
            <select id={props.id} onChange={props.onChange} value={props.value} className="dropdown-menu">
                {props.optionList.map(option => 
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
        </>
    );
}

DropdownMenu.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    optionList: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired
};

export default DropdownMenu;