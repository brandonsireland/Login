import React from 'react';
import classes from './Input.scss';

import Icon from '../Icon/Icon';

const input = (props) => {
    let styles;
    
    if(props.type === 'submit') {
        styles = {

        }
    }
    if(props.type === 'email' || props.type === 'text' ) {
        styles = {
            backgroundColor : '#ededee',
            border: 'none',
            padding: '10px 20px 10px 0',
            color: '#787D85',
        }
    }

    return  (
        <div className={ classes.Input }>
            <div className={ classes.Input__icon }>
                <Icon icon={ props.icon } color={ styles.color }/>
            </div>
            <input 
            style={ styles } 
            type={ props.type } 
            name={ props.name } 
            value={ props.value }
            form={ props.form }
            />
        </div>
    )
};

export default input;