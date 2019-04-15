import React from 'react';
import classes from './Input.scss';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLockAlt } from '@fortawesome/pro-light-svg-icons';
import { faUserAlt } from '@fortawesome/pro-light-svg-icons';

const input = (props) => {
    let styles;
    let icon;
    
    switch(props.icon) {
        case 'faEnvelope':
        icon = faEnvelope;
        break;
        case 'faLockAlt':
        icon = faLockAlt;
        break;
        case 'faUserAlt':
        icon = faUserAlt

    }
    
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
                <Icon icon={ icon } />
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
input.propTypes = {
    elementType: PropTypes.string.isRequired,
    elementConfig: PropTypes.object.isRequired,
    changedValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default input;