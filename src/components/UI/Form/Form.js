import React from 'react';
import { Link } from 'react-router-dom';

import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
import { faLockAlt } from '@fortawesome/pro-light-svg-icons';
import { faUserAlt } from '@fortawesome/pro-light-svg-icons';

import classes from './Form.scss';

import Input from '../Input/Input';
import ButtonOval from '../Buttons/ButtonOval/ButtonOval';

const signForm = (props) => {
    let formDiv;

    if(props.type == 'signin') {
        formDiv = (
            <div className={ classes.Form } >
            <span> or use your email account: </span>
            <form>
                <Input 
                    type='email' 
                    name='Email' 
                    value='Email' 
                    icon={ faEnvelope }/>
                <Input 
                    type='text' 
                    name='Password' 
                    value='Password' 
                    icon={ faLockAlt }/>
            </form>
            <Link to='/forgot'>
                <span className={ classes.Form__forgot }>Forgot your password?</span>
            </Link>
            <ButtonOval>Sign In</ButtonOval>
        </div>
        );
    };

    if(props.type == 'signup') {
        formDiv = (
            <div className={ classes.Form } >
            <span> or use your email for registration: </span>
            <form>
                <Input 
                    type='text' 
                    name='Name' 
                    value='Name' 
                    icon={ faUserAlt}/>
                <Input 
                    type='email' 
                    name='Email' 
                    value='Email' 
                    icon={ faEnvelope }/>
                <Input 
                    type='text' 
                    name='Password' 
                    value='Password' 
                    icon={ faLockAlt }/>
            </form>
            <ButtonOval>Sign Up</ButtonOval>
        </div>
        );
    }
    return (
        { ...formDiv }
    )
};

export default signForm;