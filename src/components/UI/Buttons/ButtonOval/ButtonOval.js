import React from 'react';
import classes from './buttonOval.scss';
import slide from '../../../Transitions/Slide';

const buttonOval = ({ history, to, ...props }) => {    
    let button;
    button = history ? (
        <button
         onClick={() => history.push({ pathname: to, state: slide })}
         className={ classes.ButtonOval } 
         style={ props.style }>
         { props.children }</button>
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
