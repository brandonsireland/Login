import React from 'react';
import classes from './buttonOval.scss';
import { Link } from 'react-router-dom';

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
            className={ classes.ButtonOval } 
            style={ props.style }>
            { props.children }</button> 
    );

    return (
        { ...button }
    )
};

export default buttonOval;
