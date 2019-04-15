import React from 'react';
import classes from './buttonOval.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const buttonOval = ({ history, to, ...props }) => {    

    let button;
    button = history ? (
        <Link to={ to }>
            <button
            transition={props.transition }
            className={ classes.ButtonOval } 
            style={ props.style }>
            { props.children }</button>
        </Link>
    ) : (
        <button
            onClick={ props.clicked }
            className={ classes.ButtonOval } 
            style={ props.style }>
            { props.children }</button> 
    );

    return (
        { ...button }
    )
};

buttonOval.propTypes = {
    children: PropTypes.string.isRequired,
    clicked: PropTypes.func,
    transition: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string
};

export default buttonOval;
