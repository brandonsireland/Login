import React from 'react';
import classes from './ButtonCircle.scss';
import PropTypes from 'prop-types';

const buttonCircle = (props) => (
    <button 
    className={ classes.ButtonCircle } 
    onClick={() => props.clicked }>
    { props.children }</button>
)

buttonCircle.propTypes = {
    children: PropTypes.element.isRequired
}
export default buttonCircle;