import React from 'react';
import classes from './Input.scss';

import Icon from '../Icon/Icon';

const input = (props) => {
    
    let styles;
    
    if(props.elementType === 'email' || props.elementType === 'text' ) {
        styles = {
            backgroundColor : '#ededee',
            border: 'none',
            padding: '10px 20px 10px 0',
            color: '#787D85',
        }
    }
    if(props.elementType === 'error' ) {
        styles = {
            backgroundColor: 'red',
            border: 'none',
            padding: '10px 20px 10px 0',
            color: 'red'
        }
    }

    return  (
        <div className={ classes.Input }>
            <div className={ classes.Input__icon }>
                <Icon icon={ props.icon } color={ styles.color }/>
            </div>
            <input 
                { ...props.elementConfig }
                value={ props.value }
                style={ styles } 
                onChange={ props.changedValue }
            />
        </div>
    )
};

export default input;