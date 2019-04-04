import React from 'react';
import classes from './ButtonCircle.scss';

const buttonCircle = (props) => {

    return (
        <button className={ classes.ButtonCircle }>{ props.children }</button>
    )
};

export default buttonCircle;