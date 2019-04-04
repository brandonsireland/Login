import React from 'react';
import classes from './Layer.scss';
import ButtonOval from '../../UI/Buttons/ButtonOval/ButtonOval';

const layer = (props) => {
    let layerDiv;
    let btnStyles= {
        backgroundColor: '#fff',
        color: '#FE4C47'
    };
    
    if(props.type == 'signin') {
        layerDiv = (
            <div className={ classes.Layer }>
                <div className={ classes.Layer__title}>
                    <span>New here?</span>
                </div>
                <div className={ classes.Layer__text}>
                    <span>Sign up for free and discover concerts near you!</span>
                </div>
                    <ButtonOval  to='/signup' {...props} style={ btnStyles }>Sign Up</ButtonOval>
            </div>
        )
     };

    if(props.type == 'signup') { 
        layerDiv = (
            <div className={ classes.Layer }>
                <div className={ classes.Layer__title}>
                    <span>One of Us?</span>
                </div>
                <div className={ classes.Layer__text}>
                    <span>If you already have an account, just sign in. We've missed you!</span>
                </div>
                    <ButtonOval to='/login' {...props} style={ btnStyles }>Sign In</ButtonOval>
            </div>
        )
    }
    return(
        { ...layerDiv }
    )
};

export default layer;