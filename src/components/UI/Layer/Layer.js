import React from 'react';
import PropTypes from 'prop-types';

import classes from './Layer.scss';
import ButtonOval from '../Buttons/ButtonOval/ButtonOval';

const layer = (props) => {
    let layerDiv;
    let btnStyles= {
        backgroundColor: '#fff',
        color: '#FE4C47'
    };
    
    if(props.type == 'signin') {
        layerDiv = (
            <div className={ classes.Layer } transition='layer'>
                <div className={ classes.Layer__block } transition="text">
                    <div className={ classes.Layer__title}>
                        <span>New here?</span>
                    </div>
                    <div className={ classes.Layer__subtext}>
                        <span>Sign up for free and discover concerts near you!</span>
                    </div>
                        <ButtonOval  
                            to='/signup' 
                            {...props} 
                            style={ btnStyles }
                            transition="button">Sign Up</ButtonOval>
                </div>
            </div>
        )
     };

    if(props.type == 'signup') { 
        layerDiv = (
            <div className={ classes.Layer } transition='layer'>
                <div className={ classes.Layer__block } transition="text">
                    <div className={ classes.Layer__title}>
                        <span>One of Us?</span>
                    </div>
                    <div className={ classes.Layer__subtext}>
                        <span>If you already have an account, just sign in. We've missed you!</span>
                    </div>
                        <ButtonOval 
                            to='/login'
                            { ...props} 
                            style={ btnStyles }
                            transition="button">Sign In</ButtonOval>
                </div>
            </div>
        )
    }

    return (
        { ...layerDiv }         
    )
};

layer.propTypes = {
    type: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default layer;